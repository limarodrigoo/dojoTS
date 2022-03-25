import { Router } from 'express';
import { BlogPostControler } from '../controllers';

const router = Router();

const blogPostControler = new BlogPostControler();

router.get('/', blogPostControler.getAll);
router.get('/:id', blogPostControler.getById);
router.post('/', blogPostControler.create);
router.put('/:id', blogPostControler.edit);

export default router;
