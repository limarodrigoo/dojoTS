import { Pool, ResultSetHeader } from 'mysql2/promise';
import BlogPost from '../interfaces/BlogPost';

export default class BlogPostModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection
  }

  public async getAll(): Promise<BlogPost[]> {
    const result = await this.connection.execute(
      'SELECT * FROM blogPost'
    );
    const [blogPost] = result;
    return blogPost as BlogPost[];
  }
  
  public async getById(id: number): Promise<BlogPost> {
    const [result] = await this.connection.execute(
      'SELECT * FROM blogPost WHERE id=?', [id]
    );
    const [ blogPost ]= result as BlogPost[];
    return blogPost;
  }

  public async create(post: BlogPost): Promise<BlogPost> {
    const { titulo, autor, categoria, criacao } = post;
    const [newPost] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO blogPost (titulo, autor, categoria, criacao) VALUES (?, ?, ?, ?)', [titulo, autor, categoria, criacao]
    );
    const { insertId } = newPost;
    return {id: insertId, ...post};
  }

  public async edit(id: number, post: BlogPost): Promise<void> {
    const { titulo, autor, categoria } = post;
    await this.connection.execute(
      'UPDATE blogPost SET titulo=?, autor=?, categoria=? WHERE id=?', [titulo, autor, categoria, id]
    );
  }
}
