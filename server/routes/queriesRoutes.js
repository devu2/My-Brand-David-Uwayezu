const express = require("express");
const router = express.Router();
const queriesControllers = require("../controllers/queriesController");

router.post("/", queriesControllers.createQuery);
router.get("/", queriesControllers.getAllQueries);
router.get("/:queryId", queriesControllers.getSingleQuery);
router.delete("/:queryId", queriesControllers.deleteQuery);

module.exports = router;
