import React, { useState } from 'react';

const AllTasks = () => {
  // Example tasks data (you can replace this with dynamic data from an API)
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false },
    { id: 4, title: 'Task 4', completed: true },
  ]);

  // Filter tasks based on status
  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">All Tasks</h1>

      {/* Filter options */}
      <div className="mb-4">
        <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setTasks(tasks)}>All Tasks</button>
        <button
          className="mr-2 px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => setTasks(completedTasks)}
        >
          Completed Tasks
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => setTasks(pendingTasks)}
        >
          Pending Tasks
        </button>
      </div>

      {/* Tasks List */}
      <div className="space-y-4">
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
              <span
                className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500' : 'text-black'}`}
              >
                {task.title}
              </span>
              <span
                className={`px-3 py-1 text-white rounded-full ${task.completed ? 'bg-green-500' : 'bg-red-500'}`}
              >
                {task.completed ? 'Completed' : 'Pending'}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllTasks;
