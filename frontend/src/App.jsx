
import { useState } from 'react';
// import './App.css'
import Login from './pages/Login'
import { Routes, Route } from "react-router-dom";
import Register from './pages/Register';

import Task from './pages/Task';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
        <Routes>
            <Route path="/" element= {<Login/>}/>
             <Route path="/login" element= {<Login/>}/>
            <Route path="/register" element={<Register />} />
            <Route path="/task" element={<Task />} />
        </Routes>
     
    </>
  )
}

export default App;
