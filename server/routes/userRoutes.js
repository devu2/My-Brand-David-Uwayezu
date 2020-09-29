const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userController");


router.post("/signup", userControllers.createUser);
router.post("/signin",userControllers.login);
router.get("/", userControllers.getAllUsers);
router.get("/:userId", userControllers.getOneUser);
router.patch("/update/:userId", userControllers.updateUser);
router.delete("/:userId", userControllers.deleteUser);
router.get("/signout/:userId", userControllers.signout);

module.exports = router;
