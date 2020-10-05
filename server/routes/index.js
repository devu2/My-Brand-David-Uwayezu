import { Router } from 'express';

const router = Router();
import blogRoutes from '../routes/blogRoutes';
import queriesRoutes from '../routes/queriesRoutes';
import userRoutes from '../routes/userRoutes';


router.use('/api/blogs',blogRoutes);
router.use('/api/queries',queriesRoutes);
router.use('/api/users',userRoutes);




export default router;