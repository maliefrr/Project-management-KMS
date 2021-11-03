import express from "express";
import { showAllProject, getAddNew, postList } from "../controller/projectController.js";

const router = express.Router();

router.get("/", showAllProject);
router.get("/add", getAddNew);
router.post("/", postList);

export default router;
