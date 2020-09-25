const express = require('express');
const router = express.Router();
const queriesControllers = require('../controllers/queriesController');

router.post('/',queriesControllers.createQuery);






module.exports = router;