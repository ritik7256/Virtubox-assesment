// axios instance with withCredentials
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  axios from "axios"
function Task() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");

  const fetchAllTasks = async () => {
    const res = await axios.get(
      "https://todo-deploy-p5bm.onrender.com/api/todos"
    );
    setTodos(res.data);
  };

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const addTask = async () => {
    if (!input) return;
    const res = await axios.post(
      "https://todo-deploy-p5bm.onrender.com/api/todos",
      {
        title: input,
      }
    );
    setTask([...task, res.data]);
    setInput("");
  };

  const toggleComplete = async (id) => {
    const res = await axios.put(
      `https://todo-deploy-p5bm.onrender.com/todos/${id}`
    );
    setTask(task.map((task) => (task._id === id ? res.data : task)));
  };

  const deleteTask = async (id) => {
    await axios.delete(`https://todo-deploy-p5bm.onrender.com/api/todos/${id}`);
    setTask(todos.filter((task) => task._id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>
      <div className="flex justify-center gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border rounded px-3 py-1"
          placeholder="Add a new todo"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Add
        </button>
      </div>
      <div className="max-w-md mx-auto space-y-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onToggle={toggleComplete}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default Task;
