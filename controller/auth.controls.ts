import { NextFunction, Request, Response  } from "express";
import authModel, { userDetails } from "../model/auth.model";
import { AppError, HttpCodes } from "../utils/appError";
import { asyncHandler } from "../utils/asyncHandler";
import bcrypt from "bcrypt"


//register
export const regsiterUser = asyncHandler(
    async(req:Request<{} , {} , userDetails> , res:Response , next:NextFunction):Promise<Response> => {
        const { email, password  , name, isAdmin  } = req.body;
       
        const defaultPassword = "admin"
        
        
       if(password === defaultPassword){
        const user = await authModel.create({
            email, password:defaultPassword, name, isAdmin

        })
       }else{
        next(
            new AppError({
                message : "unable to register ....you are not authorised",
                httpcode : HttpCodes.BAD_REQUEST

            })
        )
       }
      

       

        
      


        return res.status(201).json({
            message : "created successfully",
            // data : user
        })
    }
)

//login

export const loginUser = asyncHandler(
    async(req:Request , res:Response , next:NextFunction):Promise<Response> =>{
        const {email , password} = req.body
if(!email){
    next(
        new AppError({
            message : "email is required",
            name : AppError.name,
            httpcode : HttpCodes.BAD_REQUEST,
            isOperational : true
        })
    )


    }
    const user = await authModel.findOne({email , password})
    
   

    if (!user) {
        next(
          new AppError({
            message : "user not found",
            name : AppError.name,
            httpcode : HttpCodes.NOT_FOUND
            
          })
        )
        }

      
        return res.status(HttpCodes.OK).json({
            message : "logged in successfully",
            data : user
        })
    
}

)


export const getUser = asyncHandler(
    async(req:Request , res:Response , next:NextFunction):Promise<Response> =>{
        const user = await authModel.find()
        if(!user){
            next(
                new AppError({
                    message : "user not found",
                    name : AppError.name,
                    httpcode : HttpCodes.NOT_FOUND,
                    isOperational : true
                })
            )
        }

        return res.status(200).json({
            message : "gotten all users",
            data : user
        })
    }
)