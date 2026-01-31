import Login from "./pages/Login";
import Register from "./pages/Register";
import Task from "./pages/Task";
import ProtectedRoute from "./ProtectedRoute";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>

   
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Navigate to="/task" />
          </ProtectedRoute>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/task"
        element={
          <ProtectedRoute>
            <Task />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;
