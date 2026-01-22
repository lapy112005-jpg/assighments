









































// import { ObjectId } from "mongodb";
// import { userModel } from "../../DB/model/user.model.js"

// export const profile = async(inputs)=>{
//     const {id} = inputs
//     const findId = await userModel.findOne({_id:ObjectId.createFromHexString(id)})
//     if (!findId) {
//         throw new Error("invalid account");
//     }
//     return findId
// }
// export const allUsers = async ()=>{
//     const result = await userModel.find({}).toArray()
//     return result
// }
// export const update = async(userId , inputs)=>{
//     const {email , password} = inputs
//     const findId = await userModel.findOne({_id:ObjectId.createFromHexString(userId)})
//     if (!findId) {
//         throw new Error("invalid account");
//     }
//     const updateUser = await userModel.updateOne({_id:ObjectId.createFromHexString(userId)} , {$set:{email:email , password:password}})
//     return updateUser
// }