import { Router } from 'express'
import { insertLog } from './logs.service.js';
const router = Router(); 



//q7
router.post("/insertlog" , async(req,res,next)=>{
    const result = await insertLog(req.body)
    res.json({message:"done" , result})
})


export default router