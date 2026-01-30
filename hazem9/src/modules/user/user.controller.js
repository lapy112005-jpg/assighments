import { Router } from "express";
import { auth, deleteUser, getUser, login, signUp, update } from "./user.service.js";
const router=Router()
//1
router.post("/signup" , async(req,res,next)=>{
    const result  = await signUp(req.body)
    return res.status(200).json({message:"Done signup" , result})
})
//2
router.post("/login" , async(req,res,next)=>{
    const result  = await login(req.body)
    return res.status(200).json({message:"Done login" , result})
})
//3
router.patch("/update" ,auth, async(req,res,next)=>{
    const result  = await update(req.user.id , req.body)
    return res.status(200).json({message:"Done " , result})
})
//4
router.delete("/delete" ,auth, async(req,res,next)=>{
    const result  = await deleteUser(req.user.id )
    return res.status(200).json({message:"Done " , result})
})
//5
router.get("/get" ,auth, async(req,res,next)=>{
    const result  = await getUser(req.user.id )
    return res.status(200).json({message:"Done " , result})
})
export default router







