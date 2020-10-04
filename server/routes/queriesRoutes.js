const express = require("express");
const router = express.Router();
const queriesControllers = require("../controllers/queriesController");
const checkAuth = require('../middlewares/auth');

router.post("/", queriesControllers.createQuery);
router.get("/", checkAuth,queriesControllers.getAllQueries);
router.get("/:queryId", queriesControllers.getSingleQuery);
router.delete("/:queryId",checkAuth, queriesControllers.deleteQuery);

module.exports = router;
