import { userModel } from "../../DB/model/userModel.js"

//part 2 //1
export const signup = async(inputs)=>{
  const {email , name , password , role} = inputs
  const findUser = await userModel.findOne({
    where:{email:email}
  })
  if (findUser) {
    throw new Error("this email already exist");
  }
  const user = await userModel.create({email:email , name:name , password:password , role:role})
  
  return user
}
























// import { userModel } from "../../DB/model/userModel.js";

// export const signup = async (inputs) => {
//   const { email, name, password , role } = inputs;
//   const user = await userModel.create({ email: email, password: password, name: name  , role:role}); //userModel.build()
//   return user;                                                                 //useModel.save()
// };                                                                             //userModel.create()
 //                                                                               //userModel.createBulk()
 //                                                                               //userModel.upsert()
