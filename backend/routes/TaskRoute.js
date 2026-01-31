import express from 'express'

import { createTask,getAllTask,deleteTask,updateTask } from '../controllers/TaskController.js'
const router=express.Router();

router.post("/", createTask);
router.get("/", getAllTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;