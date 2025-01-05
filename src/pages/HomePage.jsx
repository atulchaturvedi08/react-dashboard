import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-600 text-white p-4 shadow-md flex justify-between items-center">
        {/* Title */}
        <h1 className="text-2xl font-bold">Office Management System</h1>

        {/* Login Buttons */}
        <div className="flex space-x-4">
          {/* Admin Login */}
          <button
            onClick={() => navigate("/admin")}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Admin Login
          </button>

          {/* User Login */}
          <button
            onClick={() => navigate("/user")}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            User Login
          </button>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex flex-grow">
        {/* Sidebar */}
        {/* <aside className="w-1/4 bg-white shadow-md">
          <nav className="flex flex-col p-4 space-y-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="px-4 py-2 text-left text-gray-700 hover:bg-blue-100 rounded-lg"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate("/employees")}
              className="px-4 py-2 text-left text-gray-700 hover:bg-blue-100 rounded-lg"
            >
              Employee Management
            </button>
            <button
              onClick={() => navigate("/tasks")}
              className="px-4 py-2 text-left text-gray-700 hover:bg-blue-100 rounded-lg"
            >
              Task Management
            </button>
            <button
              onClick={() => navigate("/meetings")}
              className="px-4 py-2 text-left text-gray-700 hover:bg-blue-100 rounded-lg"
            >
              Meetings
            </button>
            <button
              onClick={() => navigate("/reports")}
              className="px-4 py-2 text-left text-gray-700 hover:bg-blue-100 rounded-lg"
            >
              Reports
            </button>
          </nav>
        </aside> */}

        {/* Main Section */}
        <section className="flex-grow p-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Welcome to the Office Management System</h2>
            <p className="text-gray-600">
              Streamline your office operations with modules for managing employees, tasks, meetings, and more. 
              Use the sidebar to navigate through the system.
            </p>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600">Employee Management</h3>
              <p className="text-gray-700 mt-2">
                Manage employee records, roles, attendance, and performance reviews.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-600">Task Management</h3>
              <p className="text-gray-700 mt-2">
                Assign, monitor, and track progress on tasks across teams.
              </p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-yellow-600">Meetings</h3>
              <p className="text-gray-700 mt-2">
                Schedule and manage meetings with agenda and minutes.
              </p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-red-600">Reports</h3>
              <p className="text-gray-700 mt-2">
                Generate detailed reports on office activities and performance.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-3">
        <p>© 2025 Office Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
