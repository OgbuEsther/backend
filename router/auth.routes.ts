import { Router } from "express";
import { getUser, loginUser, regsiterUser } from "../controller/auth.controls";

const authRouter = Router();

authRouter.route("/register").post(regsiterUser)
authRouter.route("/login").post(loginUser)
authRouter.route("/get").get(getUser)


export default authRouter

