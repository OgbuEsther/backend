import express,{ Application } from "express";
import cors from "cors"
import morgan from "morgan"
import { errorHandler } from "./middlewares/errors/errorHandler";
import authRouter from "./router/auth.routes";
import gearRouter from "./router/gear.routes";

export const appConfig = (app:Application) =>{
    app.use(express.json()).use(cors()).use(morgan("dev"))

    app.use("/api/auth" , authRouter)
    app.use("/api" , gearRouter)

    //
    app.use(errorHandler)
}