import mongoose from "mongoose"



const dbPort = "mongodb://0.0.0.0:27017/BOOTCAMPPROJECT"

const Live_URI = "mongodb+srv://Esther:Esther2004@cluster0.byfqhoj.mongodb.net/?retryWrites=true&w=majority"

export const dbConfig = async():Promise<void>=>{
    try {
        const connect = await mongoose.connect(Live_URI)
        console.log(`databse connected to ${connect.connection.host}`)
    } catch (error) {
        console.log(`unable to connect to database`)
    }
}