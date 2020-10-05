import User from "../";
require("dotenv").config();
const admin = {
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
};
const adminAccount = new user(admin);
adminAccount.save();

export default adminAccount;