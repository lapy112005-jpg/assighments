import { Router } from "express";
import { findByEmail, findByPk, updateOrCreate } from "./userService.js";
// import { allusers, deleteUser, findByid, findEmails, greaterThan, howMuch, lessThan, update } from "./userService.js";
const router = Router();

router.put("/:id" , async(req,res,next)=>{
    const result = await updateOrCreate(req.body , req.params.id)
    res.json({message:"user created or updated successfully" , result})
})

router.get("/by-email" , async(req,res,next)=>{
    const result = await findByEmail(req.query)
    res.json({message:"user found" , result})
})

router.get("/findpk/:id" , async(req,res,next)=>{
    const result = await findByPk(req.params)
    res.json({message:"user found" , result}) 
})
export default router;
