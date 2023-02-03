import { Router } from "express";
import uploader from "../config/multer";
import { getAll, getOne, postGear, removeOne } from "../controller/gear.controls";


const gearRouter = Router();

gearRouter.route("/getall").get(getAll)
gearRouter.route("/getone/:id").get(getOne)
gearRouter.route("/remove/:id").delete(removeOne)
gearRouter.route("/newgear").post(uploader,postGear)


export default gearRouter

