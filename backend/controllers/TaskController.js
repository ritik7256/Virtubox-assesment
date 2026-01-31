import Task from "../models/Task";

const createTask = async (req, res) => {
  const task = await Task.create({ title: req.body.title });
  res.json(task);
};


const getAllTask = async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
};

const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(task);
};

const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};

export {createTask,getAllTask,deleteTask,updateTask};
