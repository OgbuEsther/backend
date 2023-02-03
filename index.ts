import express, { Application } from "express"
import { appConfig } from "./app"
import { dbConfig } from "./config/db"

const app:Application = express()
appConfig(app)
dbConfig()

const port : number | string = process.env.PORT || 7000

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`)
})