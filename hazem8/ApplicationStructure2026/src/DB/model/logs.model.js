import { db } from "../connection.db.js";


//q3
export const logModel = await db.createCollection("logs" , {capped:true , size:1048576})





