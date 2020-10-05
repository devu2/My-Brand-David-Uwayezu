import { Router } from 'express';
const router = Router();
import { createBlog, blogsGet, getSingleBlog, updateBlog, deleteBlog } from '../controllers/blogController';
import checkAuth from '../middlewares/auth';


router.post('/',checkAuth,createBlog);
router.get('/',blogsGet);
router.get('/:blogId',getSingleBlog);
router.patch('/:blogId',checkAuth,updateBlog);
router.delete('/:blogId',checkAuth,deleteBlog)



export default router;