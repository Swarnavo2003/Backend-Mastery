import express from "express";
import { addTask, fetchTask } from "../controllers/task.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/add-task", requireAuth, addTask);
router.post("/fetch-task", requireAuth, fetchTask);

export default router;
