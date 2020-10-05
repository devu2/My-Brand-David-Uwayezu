import { Router } from "express";
const router = Router();
import { createUser, login, signout, getAllUsers, getOneUser, updateUser, deleteUser } from "../controllers/userController";


router.post("/signup", createUser);
router.post("/signin",login);
router.post("/signout/:userId", signout);
router.get("/", getAllUsers);
router.get("/:userId", getOneUser);
router.patch("/update/:userId", updateUser);
router.delete("/:userId", deleteUser);


export default router;
