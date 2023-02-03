import { NextFunction, Request, Response  } from "express";
import authModel, { userDetails } from "../model/auth.model";
import { AppError, HttpCodes } from "../utils/appError";
import { asyncHandler } from "../utils/asyncHandler";
import bcrypt from "bcrypt"

export const regsiterUser = asyncHandler(
    async(req:Request<{} , {} , userDetails> , res:Response , next:NextFunction):Promise<Response> => {
        const { email, password  , name, isAdmin  } = req.body;
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password , salt)
        const user = await authModel.create({
            email, password:hashedPassword  , name, isAdmin 
        }) 

        if(!user){
            next(
                new AppError({
                    message : "failed to register user",
                    httpcode : HttpCodes.BAD_REQUEST,
                    name : AppError.name,
                    isOperational : true
                })
            )
        }

        return res.status(201).json({
            message : "created successfully",
            data : user
        })
    }
)

//login

export const loginUser = asyncHandler(
    async(req:Request , res:Response , next:NextFunction):Promise<Response> =>{
        const {email , password} = req.body

        const user = await authModel.findOne({email , password})
    }
)