const express = require('express');
const router = express.Router();
const blogControllers = require('../controllers/blogController');
const checkAuth = require('../middlewares/auth');


router.post('/',checkAuth,blogControllers.createBlog);
router.get('/',blogControllers.blogsGet);
router.get('/:blogId',blogControllers.getSingleBlog);
router.patch('/:blogId',checkAuth,blogControllers.updateBlog);
router.delete('/:blogId',checkAuth,blogControllers.deleteBlog)



module.exports = router;