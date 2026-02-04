import axios from "axios";
import { useEffect, useState } from "react";

//form
//submit and show data

function Body() {
  const [taskValue, setTaskValue] = useState("");
  const [tasks, setTasks] = useState([]);

  // add task button
  // delete task button
  // show list of task

  /*

task > delete butt

*/

  const removeTask = (value) => {
    let updatedTasks = [];
    for (let task of tasks) {
      if (task == value) continue;
      else updatedTasks.push(task);
    }
    setTasks(updatedTasks);
    return "";
  };

  useEffect(() => {
    setTasks([...tasks, "hello"]);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          📝 My Todo List
        </h1>

        {/* Input Section */}
        <div className="flex gap-2 mb-5">
          <input
            name="taskValue"
            value={taskValue}
            onChange={(e) => setTaskValue(e.target.value)}
            placeholder="Enter a new task..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            onClick={() => {
              if (!taskValue.trim()) return;
              setTasks([...tasks, taskValue]);
              setTaskValue("");
            }}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
          >
            Add
          </button>
        </div>

        {/* Tasks List */}
        <div className="space-y-3">
          {tasks.length === 0 && (
            <p className="text-center text-gray-400">No tasks yet 🚀</p>
          )}

          {tasks.map((t, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-2 hover:bg-gray-200 transition"
            >
              <p className="text-gray-700 break-words">{t}</p>

              <button
                onClick={() => removeTask(t)}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
