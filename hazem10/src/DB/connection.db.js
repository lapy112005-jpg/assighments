import mongoose from "mongoose";
import { DB_URI } from "../../config/config.service.js";

export const checkConnection = async()=>{
    try {
        await mongoose.connect(DB_URI)
        await mongoose.syncIndexes()
        console.log("db connected succefully");
    } catch (error) {
        console.log("fail to connect with db");
        
    }
}