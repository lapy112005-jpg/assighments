import { Router } from "express";
import { login, signUp} from "./user.service.js";
const router=Router()
router.post("/signup" , async(req,res,next)=>{
    const result  = await signUp(req.body)
    return res.status(200).json({message:"Done signup" , result})
})
router.post("/login" , async(req,res,next)=>{
    const result  = await login(req.body)
    return res.status(200).json({message:"Done login" , result})
})

export default router







