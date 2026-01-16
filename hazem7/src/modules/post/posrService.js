import { commentModel } from "../../DB/model/commentModel.js";
import { postModel } from "../../DB/model/postModel.js"
import { userModel } from "../../DB/model/userModel.js";

export const addPost = async(inputs)=>{
    const {title , content , userId} = inputs
const post = new postModel({
  title: title,
  content: content,
  userId: userId
});
await post.save();
}


export const deletePost = async(postId , userId)=>{
    const findPost = await postModel.findByPk(postId)
    if (!findPost) {
        throw new Error("post not exist");
    }
    if(findPost.userId !== Number(userId)){
        throw new Error("you r not authorized");
    }
    const result = await findPost.destroy()
    return result
}

export const allPostsWithComments=async()=>{
    const allPosts = await postModel.findAll({attributes:["id" , "title"]})
    return allPosts
}

export const getAllPostsWithUserAndComments = async () => {
    const posts = await postModel.findAll({
        attributes: ["id", "title"], 
        include: [
            {
                model: userModel,
                attributes: ["id", "name"]
            },
            {
                model: commentModel,
                attributes: ["id", "content"] 
            }
        ]
    });

    return posts;
};