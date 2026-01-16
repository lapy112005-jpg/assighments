import { Router } from "express";
import { signup } from "./authService.js";
const router = Router()

router.post("/signup" , async(req,res,next)=>{
    const result = await signup(req.body)
    res.json({message:"done signup" , result})
})


export default router