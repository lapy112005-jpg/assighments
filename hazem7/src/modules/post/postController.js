import { Router } from "express";
import { addPost, allPostsWithComments, deletePost, getAllPostsWithUserAndComments } from "./posrService.js";
const router = Router();

router.post("/addpost", async (req, res, next) => {
  const result = await addPost(req.body);
  res.json({message:"post added" , result})
});

router.delete("/deletepost/:postid/:userid" , async(req,res,next)=>{
    const result = await deletePost(req.params.postid , req.params.userid)
    res.json({message:"deleted" , result})
})
router.post("/allposts" , async(req,res,next)=>{
    const result = await allPostsWithComments()
    res.json({ result})
})
router.get("/getwithuserandcomment" , async(req,res,next)=>{
    const result = await getAllPostsWithUserAndComments()
    res.json({ result})
})

export default router;
