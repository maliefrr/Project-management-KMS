import express from "express";
import { showAllProject, getAddNew } from "../controller/projectController.js";

const router = express.Router();

router.get("/", showAllProject);
router.get("/add", getAddNew);

export default router;
