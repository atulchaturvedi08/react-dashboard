import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/UserPanel/Dashboard";
import LoginPage from "../components/UserPanel/LoginPage";
import RegisterPage from "../components/UserPanel/RegisterPage";
import Profile from "../components/UserPanel/Profile";
import AllTasks from '../components/UserPanel/AllTasks'

const UserPage = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/registerPage" element={<RegisterPage />} />
    <Route path="/Dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/AllTasks" element={<AllTasks />} />
  </Routes>
);

export default UserPage;
