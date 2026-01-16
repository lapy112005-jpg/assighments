import { userModel } from "../../DB/model/userModel.js";
//part 2   //2
export const updateOrCreate = async (values, id) => {
  const { email, password, name, role } = values;
  const user = await userModel.upsert({
    id: id,
    email: email,
    password: password,
    name: name,
    role: role,
  } , {validate:false});
};

//part 2   //3
export const findByEmail = async (input)=>{
    const {email} = input
    const findUser = await userModel.findOne({where:{email:email}})
    if (!findUser) {
        throw new Error("no user found");
        
    }
    return findUser
}

//part 2   //4
export const findByPk = async(input)=>{
    const {id} = input
    const findUser = await userModel.findByPk(id)
    if(!findUser){
        throw new Error("no user found");
    }
    return findUser
}























// import { Op, where } from "sequelize"
// import { userModel } from "../../DB/model/userModel.js"

// export const allusers = async()=>{
//     const users =  await userModel.findAll()
//     return users
// }

// export const findByid = async(inputs)=>{
//     const {id} = inputs
//     const user = await userModel.findByPk(id)
//     return user
// }

// export const lessThan = async()=>{
// const users = await userModel.findAll({
//     where:{
//         age:{[Op.lt]:56}
//     }
// })
//  return users
// }

// export const greaterThan = async(inputs)=>{
//     const {age} = inputs
//     const users = await userModel.findAll({
//         where:{
//             age:{[Op.gt]:age}
//         }
//     })
//     return users
// }
// export const findEmails = async ()=>{
//     const emails = await userModel.findAll({
//         attributes:["email" , "name"]
//     })
//     return emails
// }

// export const update = async (inputs)=>{
//     const {age , id} = inputs
//     const user = await userModel.update({age:age }, {where:{id:id}})
//     return user
// }

// export const deleteUser = async(inputs)=>{
//     const {id} = inputs
//     const user = await userModel.destroy({where:{id:id}})
//     return user
// }
// export const howMuch = async(inputs)=>{
//     const{age} = inputs;
//     const users=await userModel.findAndCountAll({
//         where:{
//             age:{[Op.eq]:age}
//         }
//     })
//     return users
// }
