import { logModel } from "../../DB/model/logs.model.js"




//q7
export const insertLog = async (inputs)=>{
    const result = await logModel.insertOne(inputs)
    return result
}
