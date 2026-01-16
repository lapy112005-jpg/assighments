import { Router } from "express";
import { addcomments, findByPk, findOrCreate, getRecentComments, searchCommentsByWord, updateComments } from "./commentService.js";
const router = Router()

router.post("/addcomments" , async(req,res,next)=>{
    const result = await addcomments(req.body)
    res.json({message:"comment added ",result})
})
router.post("/findorcreate" , async(req,res,next)=>{
    const result = await findOrCreate(req.body)
    res.json({result})
})
router.patch("/updatecomment" , async(req,res,next)=>{
    const result = await updateComments(req.body)
    res.json({message:"done ",result})
})
router.get("/findpkk/:id" , async(req,res,next)=>{
    const result = await findByPk(req.params)
    res.json({message:"done ",result})
})
router.get("/getrecent" , async(req,res,next)=>{
    const result = await getRecentComments()
    res.json({message:"done ",result})
})
router.get("/getrecent" , async(req,res,next)=>{
    const result = await searchCommentsByWord(req.query)
    res.json({message:"done ",result})
})



export default router