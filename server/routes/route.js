import express from "express";
import { userSignUp, userSignIn, getGames } from "../controller/userController.js";
const router = express.Router();


router.post("/signUp", userSignUp);
router.post("/signIn", userSignIn);
router.get("/games",getGames)

export default router;