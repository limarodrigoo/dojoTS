import BlogPost from '../interfaces/BlogPost';
import { BlogPostModel } from '../models';
import connection from '../models/connection';

export default class BlogPostService {
  public model: BlogPostModel;

  constructor() {
    this.model = new BlogPostModel(connection);
  }

  public async getAll(): Promise<BlogPost[]> {
    const result = await this.model.getAll();
    return result;
  }

  public async getById(id: number): Promise<BlogPost> {
    const result = await this.model.getById(id);
    return result;
  }

  public async create(post: BlogPost): Promise<BlogPost> {
    const criacao = new Date();
    post.criacao = criacao;
    const newPost = await this.model.create(post);
    return newPost;
  }

  public async edit(id: number, post: BlogPost): Promise<void | null> {
    const foundPost = await this.model.getById(id);
    if(!foundPost){
      return null;
    }
    return await this.model.edit(id, post);
  }
}
