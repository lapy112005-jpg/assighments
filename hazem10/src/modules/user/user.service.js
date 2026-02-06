import { model } from "mongoose";
import { create, findOne } from "../../DB/dbServices.js"
import { userModel } from "../../DB/model/user.model.js"
import { compareHash, generateHash } from "../../common/utils/security/hash.js";
import { decrypt, encrypt } from "../../common/utils/security/encryption.js";

export const signUp = async (reqbody)=>{
  const checkUserExist = await findOne({model:userModel , filter:{email:reqbody.email}})
  if (checkUserExist) {
    throw new Error("email already exist");
  }
  const user = await create({model:userModel , data:{username:reqbody.username , email:reqbody.email , password:await generateHash(reqbody.password) , phone: encrypt(reqbody.phone)}})
  return user
}

export const login = async(reqbody)=>{
  const findUser = await findOne({model:userModel , filter:{email:reqbody.email}})
  if (!findUser) {
    throw new Error("email wrong");
  }
  const matchpass = await compareHash(reqbody.password , findUser.password)
  if (!matchpass) {
    throw new Error("pass wrong");
  }
  findUser.phone = decrypt(findUser.phone)    //update to decrypt
  return findUser
}