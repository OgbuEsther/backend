import { Router } from "express";
import { getAll, postGear } from "../controller/gear.controls";


const gearRouter = Router();

gearRouter.route("/getall").get(getAll)
gearRouter.route("/newgear").post(postGear)


export default gearRouter

