import { Router } from "express";
import {
  aggregate1,
  aggregate2,
  aggregate3,
  aggregate4,
  deleteBeforeYear,
  exclude,
  findAndFilter,
  findBook,
  findBooksFromTo,
  findDocsThatIncludeEleInArr,
  findIntergerYear,
  insertBook,
  insertManyBooks,
  updatebook,
} from "./book.service.js";
const router = Router();

//5
router.post("/insertbook", async (req, res, next) => {
  const result = await insertBook(req.body);
  res.json({ message: "book added", result });
});
//6
router.post("/insertmanybooks", async (req, res, next) => {
  const result = await insertManyBooks(req.body);
  res.json({ message: "all book added", result });
});
//8
router.patch("/updatebook", async (req, res, next) => {
  const result = await updatebook(req.body);
  res.json({ message: "updated", result });
});
//9
router.get("/findbook", async (req, res, next) => {
  const result = await findBook(req.query.title);
  res.json({ message: "done", result });
});
//10
router.get("/findfromto", async (req, res, next) => {
  const result = await findBooksFromTo(
    Number(req.query.from),
    Number(req.query.to),
  );
  res.json({ message: "done", result });
});
//11
router.get("/findincludeele", async (req, res, next) => {
  const result = await findDocsThatIncludeEleInArr(req.query.genre);
  res.json({ message: "done", result });
});
//12
router.get("/findandfilter", async (req, res, next) => {
  const result = await findAndFilter();
  res.json({ message: "done", result });
});
//13
router.get("/findintergeryear", async (req, res, next) => {
  const result = await findIntergerYear();
  res.json({ message: "done", result });
});
//14
router.get("/exclude", async (req, res, next) => {
  const result = await exclude();
  res.json({ message: "done", result });
});
//15
router.delete("/deletebefore", async (req, res, next) => {
  const result = await deleteBeforeYear(Number(req.query.year));
  res.json({ message: "deleted successfully", result });
});
//16
router.get("/aggregate1", async (req, res, next) => {
  const result = await aggregate1();
  res.json({ message: "done", result });
});
//17
router.get("/aggregate2", async (req, res, next) => {
  const result = await aggregate2();
  res.json({ message: "done", result });
});
//18
router.get("/aggregate3", async (req, res, next) => {
  const result = await aggregate3();
  res.json({ message: "done", result });
});
//19
router.get("/aggregate4", async (req, res, next) => {
  const result = await aggregate4();
  res.json({ message: "done", result });
});

export default router;
