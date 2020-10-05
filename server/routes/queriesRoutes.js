import { Router } from "express";
const router = Router();
import { createQuery, getAllQueries, getSingleQuery, deleteQuery } from "../controllers/queriesController";
import checkAuth from '../middlewares/auth';

router.post("/", createQuery);
router.get("/", checkAuth,getAllQueries);
router.get("/:queryId", getSingleQuery);
router.delete("/:queryId",checkAuth, deleteQuery);

export default router;
