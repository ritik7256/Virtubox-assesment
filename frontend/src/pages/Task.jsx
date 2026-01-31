import axios from "axios";
import { useEffect, useState } from "react";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState("");

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/task", {
      withCredentials: true,
    });
    setTasks(res.data);
  };

  const submitTask = async (e) => {
    e.preventDefault();

    if (!title) {
      alert("Enter task");
      return;
    }

    if (editId) {
      await axios.put(
        `http://localhost:5000/api/task/${editId}`,
        { title },
        { withCredentials: true },
      );
      setEditId("");
    } else {
      await axios.post(
        "http://localhost:5000/api/task",
        { title },
        { withCredentials: true },
      );
    }

    setTitle("");
    getTasks();
  };

  const removeTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/task/${id}`, {
      withCredentials: true,
    });
    getTasks();
  };

  const toggleTask = async (item) => {
    await axios.put(
      `http://localhost:5000/api/task/${item._id}`,
      { completed: !item.completed },
      { withCredentials: true },
    );
    getTasks();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-400">
      <div className="w-full max-w-md bg-slate-900 rounded-xl shadow-xl p-6 text-white">
        <h2 className="text-2xl font-semibold mb-5 text-center">Task App</h2>

      
        <form onSubmit={submitTask} className="flex gap-2 mb-6">
          <input
            className="flex-1 rounded-lg px-3 py-2 
             bg-slate-800 
             border border-slate-600
             text-white 
             placeholder-gray-400
             outline-none 
             focus:border-indigo-500 
             focus:ring-1 focus:ring-indigo-500"
            placeholder="Add a task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button className="bg-indigo-600 hover:bg-indigo-500 transition px-4 rounded-lg font-medium">
            {editId ? "Update" : "Add"}
          </button>
        </form>

       
        <div className="space-y-3">
          {tasks.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center bg-slate-700 px-3 py-2 rounded-lg"
            >
              <span
                onClick={() => toggleTask(item)}
                className={`cursor-pointer ${
                  item.completed ? "line-through text-gray-400" : "text-white"
                }`}
              >
                {item.title}
              </span>

              <div className="flex gap-3 text-sm">
                <button
                  onClick={() => {
                    setTitle(item.title);
                    setEditId(item._id);
                  }}
                  className="text-yellow-400 hover:text-yellow-300"
                >
                  Edit
                </button>

                <button
                  onClick={() => removeTask(item._id)}
                  className="text-red-400 hover:text-red-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
