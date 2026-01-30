import { userModel } from "../../DB/model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { encryptPhone } from "../../utils/encrption.js";
export const signUp = async (reqbody) => {
  const checkUserExist = await userModel.findOne({ email: reqbody.email });
  if (checkUserExist) {
    throw new Error("conflict this user email already exist");
  }
  
  const hashedPassword = await bcrypt.hash(reqbody.password, 10);
  const encryptedPhone = encryptPhone(reqbody.phone);

  const addUser = await userModel.create({
    name: reqbody.name,
    password: hashedPassword,
    email: reqbody.email,
    age: reqbody.age,
    phone: encryptedPhone,
  });
  return addUser;
};

export const login = async (reqbody) => {
  const findUser = await userModel.findOne({ email: reqbody.email });
  if (!findUser) {
    throw new Error("email is wrong");
  }
  const matchpass = await bcrypt.compare(reqbody.password, findUser.password);
  if (!matchpass) {
    throw new Error("password incorrect");
  }
  const token = jwt.sign(
    {
      id: findUser._id,
      email: findUser.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    },
  );
  return {findUser  , token};
};
//middlware .................. ...
export const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (!authHeader) throw new Error("token is required");
  const decoded = jwt.verify(authHeader, process.env.JWT_SECRET);
  console.log(decoded)
  req.user = decoded;
  next();
};
//.....................
export const update = async (id , reqbody)=>{
  const checkEmailExist = await userModel.findOne({email:reqbody.email})
  if (checkEmailExist) {
    throw new Error("email already exist");
  }
  const user = await userModel.findByIdAndUpdate(id, {name:reqbody.name , email:reqbody.email , phone:reqbody.phone},{new:true}).select("-password")
  if (!user) {
     throw new Error("user not found");
  }
  return user
}

export const deleteUser = async(id)=>{
  const user = await userModel.findByIdAndDelete(id)
  return user
}
export const getUser = async(id)=>{
  const user = await userModel.findById(id)
  return user
}
