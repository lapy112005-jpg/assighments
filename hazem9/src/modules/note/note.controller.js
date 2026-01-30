import { Router } from "express";
import {
  addNote,
  aggregate,
  deleteAllnotesRelatedToUser,
  deleteNoteByItsId,
  getAllNotesOfUser,
  getallNotesWithUserWhoCreate,
  getNoteByItsContent,
  getNoteByItsId,
  replace,
  updateAlltitlesCreatedByUser,
  updateById,
} from "./note.service.js";
import { auth } from "../user/user.service.js";
const router = Router();
router.post("/addnote", auth, async (req, res, next) => {
  const result = await addNote(req.user.id, req.body);
  return res.status(201).json({ message: "note added", result });
});
router.patch("/update/:noteid", auth, async (req, res, next) => {
  const result = await updateById(req.params.noteid, req.user.id, req.body);
  return res.status(201).json({ message: "note updted", result });
});
router.put("/replace/:noteid", auth, async (req, res, next) => {
  const result = await replace(req.params.noteid, req.user.id, req.body);
  return res.status(201).json({ message: "note replaced", result });
});
router.patch("/updatetitles", auth, async (req, res, next) => {
  const result = await updateAlltitlesCreatedByUser(req.user.id, req.body);
  return res.status(201).json({ message: "title updated ", result });
});
router.delete("/deletenote/:noteid", auth, async (req, res, next) => {
  const result = await deleteNoteByItsId(req.user.id, req.params.noteid);
  return res.status(201).json({ message: "deleted", result });
});
router.get("/getall/:page/:limit", auth, async (req, res, next) => {
  const result = await getAllNotesOfUser(
    req.user.id,
    req.params.page,
    req.params.limit,
  );
  return res.status(201).json({ message: "done", result });
});
router.get("/getnote/:noteid", auth, async (req, res, next) => {
  const result = await getNoteByItsId(req.user.id, req.params.noteid);
  return res.status(201).json({ message: "done", result });
});
router.get("/getnotebycontent", auth, async (req, res, next) => {
  const result = await getNoteByItsContent(req.user.id, req.query.content);
  return res.status(201).json({ message: "done", result });
});
router.get("/getallnoteswithuser", auth, async (req, res, next) => {
  const result = await getallNotesWithUserWhoCreate(req.user.id);
  return res.status(201).json({ message: "done", result });
});
router.get("/aggregate", auth, async (req, res, next) => {
  const result = await aggregate(req.user.id);
  return res.status(201).json({ message: "done", result });
});
router.delete("/deletenotes", auth, async (req, res, next) => {
  const result = await deleteAllnotesRelatedToUser(req.user.id);
  return res.status(201).json({ message: "done", result });
});

export default router;
