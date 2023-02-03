import mongoose from "mongoose"



const dbPort = "mongodb://0.0.0.0:27017/BOOTCAMPPROJECT"

export const dbConfig = async():Promise<void>=>{
    try {
        const connect = await mongoose.connect(dbPort)
        console.log(`databse connected to ${connect.connection.host}`)
    } catch (error) {
        console.log(`unable to connect to database`)
    }
}