
import { Request , Response , NextFunction } from "express";
import { AppError, HttpCodes } from "../../utils/appError";

const devError = (err:AppError , res:Response) =>{
    return res.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
        name : AppError.name,
        message : err.message,
        stack : err.stack
    })
}


export const errorHandler = (err:AppError , req:Request , res:Response , next:NextFunction) =>{
    devError(err ,res)
}