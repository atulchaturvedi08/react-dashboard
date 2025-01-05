import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } w-64 bg-white shadow-lg md:block transition-all duration-300 ease-in-out`}
      >
        <div className="p-4 text-center text-xl font-bold text-gray-800 border-b">
          Material Tailwind React
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <Link
            to="/dashboard"
            className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h11M9 21v-6m12-4H10m0 0L3 3m0 0L1 21"
                />
              </svg>
            </span>
            <span>Dashboard</span>
          </Link>

          <Link
            to="/profile"
            className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4s-4 1.79-4 4 1.79 4 4 4zm0 2c-3.313 0-6 1.343-6 3v1h12v-1c0-1.657-2.687-3-6-3z"
                />
              </svg>
            </span>
            <span>Profile</span>
          </Link>

          <Link
            to="/tables"
            className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </span>
            <span>Tables</span>
          </Link>

          <Link
            to="/notifications"
            className="flex items-center space-x-3 text-white bg-black p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1 4h1v4h-1v-4zm0-10a9 9 0 100 18 9 9 0 000-18z"
                />
              </svg>
            </span>
            <span>Notifications</span>
          </Link>

          <div className="pt-4 border-t">
            <p className="text-sm font-medium text-gray-400 uppercase">
              Auth Pages
            </p>
            <Link
              to="/sign-in"
              className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors mt-2"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 9V3a1 1 0 011-1h2a1 1 0 011 1v6m-2 3h.01M6 21V7a1 1 0 011-1h10a1 1 0 011 1v14m-4-5h4m-4 0a2 2 0 004 0z"
                  />
                </svg>
              </span>
              <span>Sign In</span>
            </Link>
            <Link
              to="/sign-up"
              className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 9V3a1 1 0 011-1h2a1 1 0 011 1v6m-2 3h.01M6 21V7a1 1 0 011-1h10a1 1 0 011 1v14m-4-5h4m-4 0a2 2 0 004 0z"
                  />
                </svg>
              </span>
              <span>Sign Up</span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Toggle Button for Mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden absolute top-4 left-4 p-2 bg-gray-800 text-white rounded-md"
      >
        {sidebarOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Main Content */}
      <div className="flex-grow p-6">
        <h1 className="text-xl font-bold text-gray-800">Dashboard Content</h1>
        <p className="mt-2 text-gray-600">
          This is the main content area for the dashboard.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
