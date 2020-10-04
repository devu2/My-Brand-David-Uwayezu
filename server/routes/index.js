const express = require('express');

const router = express.Router();
const blogRoutes = require('../routes/blogRoutes');
const queriesRoutes = require('../routes/queriesRoutes');
const userRoutes = require('../routes/userRoutes');


router.use('/api/blogs',blogRoutes);
router.use('/api/queries',queriesRoutes);
router.use('/api/users',userRoutes);
// router
// router.use('/api/user/signin',userRoutes);
// router.use('/api/user/update',userRoutes)
// router.use('/api/user/signout',userRoutes)



module.exports = router;