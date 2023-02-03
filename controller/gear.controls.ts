import { Request , Response , NextFunction } from "express";
import cloudinary from "../config/cloudinary";
import gearModel, { gearProps } from "../model/GearModel";
import { AppError, HttpCodes } from "../utils/AppError";
import { asyncHandler } from "../utils/asyncHandler";

export const getAll = asyncHandler(
    async(req:Request , res:Response, next:NextFunction):Promise<Response> =>{
        const user = await gearModel.find()
        if(!user){
            next (
                new AppError({
                    message : "unable to get all users",
                    name : AppError.name,
                    httpcode : HttpCodes.BAD_REQUEST
                })
            )
        }

        return res.status(200).json({
            message : "gotten successfully",
            data : user
        })
    }
)

export const postGear = asyncHandler(
    async(req:Request<{} ,{} , gearProps> , res:Response , next :NextFunction):Promise<Response> =>{
        const {name , price , status , image , views} = req.body
        const cloudImg = await cloudinary.uploader.upload(req.file!.path)
        const user = await gearModel.create({
            name , price , status , image:cloudImg.secure_url , views
        })

        if(!user){
            next (
                new AppError({
                    message : "unable to post users",
                    name : AppError.name,
                    httpcode : HttpCodes.BAD_REQUEST
                })
            )
        }
        return res.status(201).json({
            message : "created gear",
            data : user
        })
    }
)

//get one


export const getOne = asyncHandler(
    async(req:Request , res:Response, next:NextFunction):Promise<Response> =>{
        const user = await gearModel.findById(req.params.id)
        if(!user){
            next (
                new AppError({
                    message : "unable to get all users",
                    name : AppError.name,
                    httpcode : HttpCodes.BAD_REQUEST
                })
            )
        }

        return res.status(200).json({
            message : "gotten one successfully",
            data : user
        })
    }
)


//delete

export const removeOne = asyncHandler(
    async(req:Request , res:Response, next:NextFunction):Promise<Response> =>{
        const user = await gearModel.findByIdAndRemove(req.params.id)
        if(!user){
            next (
                new AppError({
                    message : "unable to get all users",
                    name : AppError.name,
                    httpcode : HttpCodes.BAD_REQUEST
                })
            )
        }

        return res.status(200).json({
            message : "removed one successfully",
            data : user
        })
    }
)