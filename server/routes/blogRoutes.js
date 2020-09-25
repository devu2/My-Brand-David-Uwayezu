const express = require('express');
const router = express.Router();
const blogControllers = require('../controllers/blogController');

router.post('/',blogControllers.createBlog);
router.get('/',blogControllers.blogsGet);
router.get('/:blogId',blogControllers.getSingleBlog);
router.patch('/:blogId',blogControllers.updateBlog);
router.delete('/:blogId',blogControllers.deleteBlog)



module.exports = router;