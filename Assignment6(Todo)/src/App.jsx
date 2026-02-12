import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Todos from "./pages/Todos";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </Router>
  )
}

export default App
