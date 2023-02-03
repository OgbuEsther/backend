import { Router } from "express";
import { getAll, getOne, postGear, removeOne } from "../controller/gear.controls";


const gearRouter = Router();

gearRouter.route("/getall").get(getAll)
gearRouter.route("/getone/:id").get(getOne)
gearRouter.route("/remove/:id").delete(removeOne)
gearRouter.route("/newgear").post(postGear)


export default gearRouter

