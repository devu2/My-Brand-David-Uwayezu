const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userController");


router.post("/signup", userControllers.createUser);
router.post("/signin",userControllers.login);
router.post("/signout/:userId", userControllers.signout);
router.get("/", userControllers.getAllUsers);
router.get("/:userId", userControllers.getOneUser);
router.patch("/update/:userId", userControllers.updateUser);
router.delete("/:userId", userControllers.deleteUser);


module.exports = router;