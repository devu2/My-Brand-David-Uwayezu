const express = require('express');

const router = express.Router();
const blogRoutes = require('../routes/blogRoutes');
const queriesRoutes = require('../routes/queriesRoutes');

router.use('/api/blogs',blogRoutes);
router.use('/api/queries',queriesRoutes)


module.exports = router;