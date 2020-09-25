const express = require('express');

const router = express.Router();
const blogRoutes = require('../routes/blogRoutes');
const queriesRoutes = require('../routes/queriesRoutes');

router.use('/blogs',blogRoutes);
router.use('/queries',queriesRoutes)


module.exports = router;