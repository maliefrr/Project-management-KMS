import express from "express";
import { showAllProject } from "../controller/projectController.js";

const router = express.Router();

router.get("/", showAllProject);

export default router;
