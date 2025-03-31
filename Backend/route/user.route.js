import express from "express";
import { signup, login } from "../controller/user.controller.js";
const router = express.Router();

router.post("/signup", signup); //using post method to create a new user
// this is the signup route
router.post("/login", login);

export default router;