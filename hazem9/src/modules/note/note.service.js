import mongoose from "mongoose";
import { noteModel } from "../../DB/model/note.model.js";

export const addNote = async (id, reqbody) => {
  const addNote = await noteModel.create({
    title: reqbody.title,
    content: reqbody.content,
    userId: id,
  });
  return addNote;
};
export const updateById = async (noteid, userid, reqbody) => {
  const updteNote = await noteModel.findOneAndUpdate(
    { _id: noteid, userId: userid },
    { title: reqbody.title, content: reqbody.content },
    { new: true },
  );
  return updteNote;
};
export const replace = async (noteid, userid, reqbody) => {
  const replaceNote = await noteModel.findOneAndReplace(
    { _id: noteid, userId: userid },
    { title: reqbody.title, content: reqbody.content },
    { new: true },
  );
  return replaceNote;
};
export const updateAlltitlesCreatedByUser = async (userId, reqbody) => {
  const updateTitles = await noteModel.updateMany(
    { userId: userId },
    { $set: { title: reqbody.title } },
  );
  return updateTitles;
};
export const deleteNoteByItsId = async (userId, noteId) => {
  const deleteNote = await noteModel.deleteOne({ userId: userId, _id: noteId });
  return deleteNote;
};
export const getAllNotesOfUser = async (userId, page, limit) => {
  const skip = (page - 1) * limit;
  const notes = await noteModel
    .find({ userId: userId })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);
  return notes;
};
export const getNoteByItsId = async (userId, noteId) => {
  const note = await noteModel.findOne({ userId: userId, _id: noteId });
  return note;
};
export const getNoteByItsContent = async (userId, content) => {
  const note = await noteModel.findOne({ userId: userId, content: content });
  return note;
};
export const getallNotesWithUserWhoCreate = async (userId) => {
    const note = await noteModel
    .find({ userId: userId })
    .select("title userId createdAt")
    .populate({ path: "userId", select: { email: 1, _id: 0 } });
  return note;
};
export const aggregate = async (userId) => {
  const note = await noteModel.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } },
      {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "userInfo",
    },
},
    {
        $project: {
            title: 1,
            content: 1,
            "userInfo.name": 1,
            "userInfo.email": 1,
        },
    },
]);
return note;
};
export const deleteAllnotesRelatedToUser = async (userId) => {
  const note = await noteModel.deleteMany({ userId: userId});
  return note;
};
