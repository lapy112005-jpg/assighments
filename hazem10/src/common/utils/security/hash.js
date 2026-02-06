import { compare, hash } from "bcrypt"


export const generateHash =  async(value , salt=8)=>{
    return hash(value , salt)
}

export const compareHash = async(value , hashedValue)=>{
    return await compare(value , hashedValue)
}