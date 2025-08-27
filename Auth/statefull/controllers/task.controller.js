import { Task } from "../models/task.model.js";

export const addTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.userId;

    const task = await Task.create({
      title,
      description,
      userId,
    });

    return res.status(200).json({
      message: "Task Created Successfully",
      success: true,
      task,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    });
  }
};

export const fetchTask = async (req, res) => {
  try {
    const userId = req.userId;

    const tasks = await Task.find({
      userId,
    });

    return res.status(200).json({
      message: "Tasks Fetched Successfully",
      success: true,
      tasks,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    });
  }
};
