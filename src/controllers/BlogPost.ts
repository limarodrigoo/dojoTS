import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { BlogPostService } from '../services';

export default class BlogPostControler {
  constructor(private blogPostService = new BlogPostService()){}
  
  public getAll = async (_req: Request, res: Response) => {
    const blogPosts = await this.blogPostService.getAll();
    return res.status(StatusCodes.OK).json(blogPosts);
  };

  public getById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const blogPosts = await this.blogPostService.getById(id);
    if(!blogPosts) {
      return res.status(StatusCodes.NOT_FOUND).json({message: 'Post not found!'})
    }
    return res.status(StatusCodes.OK).json(blogPosts);
  };

  public create = async (req: Request, res: Response) => {
    const post  = req.body;
    const newPost = await this.blogPostService.create(post);
    return res.status(StatusCodes.CREATED).json(newPost);
  }

  public edit = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const post = req.body;
    const editedPost = await this.blogPostService.edit(id, post);
    if(!editedPost){
      return res.status(StatusCodes.NOT_FOUND).json({message: 'Post not found'});
    }
    return res.status(StatusCodes.OK).json({message: 'Post edited sucessfuly'});   
  }
}
