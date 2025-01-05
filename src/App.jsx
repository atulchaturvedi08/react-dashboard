import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> */}
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/user/*" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
