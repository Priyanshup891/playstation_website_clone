import express from "express";
import { userSignUp, userSignIn, getGames,getGameById, addPayment } from "../controller/userController.js";
const router = express.Router();


router.post("/signUp", userSignUp);
router.post("/signIn", userSignIn);
router.get("/games",getGames);
router.get("/detail/:id", getGameById)
router.post("/payment", addPayment)

export default router;