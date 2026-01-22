import { MongoClient } from "mongodb";
import {  DB_NAME, DB_URI } from "../../config/config.service.js";


const client  = new MongoClient (DB_URI)


//determine db name
export const db = client.db(DB_NAME)

export const checkConnection = async()=>{
    try {
        await client.connect()
        console.log("db connected succefully");
    } catch (error) {
        console.log("fail to connect with db");
        
    }
}



