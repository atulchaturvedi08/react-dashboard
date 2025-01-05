import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/AdminPanel/Dashboard";
import LoginPage from "../components/AdminPanel/LoginPage";
import RegisterPage from "../components/AdminPanel/RegisterPage";
import ManageUsers from "../components/AdminPanel/ManageUsers";
import Settings from "../components/AdminPanel/Settings";

const AdminPage = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/Register" element={<RegisterPage />} />
    <Route path="/" element={<Dashboard />} />
    <Route path="/manage-users" element={<ManageUsers />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
);

export default AdminPage;
