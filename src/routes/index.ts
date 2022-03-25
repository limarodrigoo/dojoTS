import { Router } from 'express';
import blogPostRouter from './BlogPost';

const router = Router();

router.use('/blogpost', blogPostRouter);

export default router;