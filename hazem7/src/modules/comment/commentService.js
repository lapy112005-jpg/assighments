import { where } from "sequelize";
import { commentModel } from "../../DB/model/commentModel.js";
//bulk create
export const addcomments = async (inputs) => {
  const create = await commentModel.bulkCreate(inputs);
  return create;
};

export const updateComments = async (inputs) => {
  const { commentId, userId, content } = inputs;
  const findComment = await commentModel.findOne({
    where: { id: commentId },
  });
  if (!findComment) {
    throw new Error("comment not found");
  }
  if (findComment.userId !== Number(userId)) {
    throw new Error("you r not ausorized");
  }
  const result = await commentModel.update(
    { content: content },
    { where: { userId: userId, id: commentId } }
  );
  return result;
};

export const findOrCreate = async (inputs) => {
  const { userId, postId, content } = inputs;
  const findUser = await commentModel.findOrCreate({
    where: { postId: Number(postId), userId: Number(userId), content: content },
    defaults: { postId: postId, userId: userId, content: content },
  });
  return findUser;
};

export const findByPk=async(input)=>{
    const {id} = input
    const findComment = await commentModel.findByPk(id)
    if (!findComment) {
        throw new Error("not exist");
    }
    return findUser
    
}
export const getRecentComments = async () => {
    const comments = await commentModel.findAll({
        order: [["createdAt", "DESC"]],
        limit: 3
    });

    return comments;
};

export const searchCommentsByWord = async (word) => {
    const { rows, count } = await commentModel.findAndCountAll({
        where: {
            content: {
                [Op.like]: `%${word}%`
            }
        },
        attributes: ["id", "content", "userId", "postId", "createdAt"]
    });

    return { count, comments: rows };
};
