import React, { useState, useMemo } from 'react';

const TaskList = () => {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(false);
  const completedCount = useMemo(
    () => tasks.filter(t => t.completed).length,
    [tasks]
  );

  const handleChange = e => {
    setInput(e.target.value);
    setError(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!input.trim()) {
      setError(true);
      return;
    }
    const newTask = {
      id: tasks.length + 1,
      text: input.trim(),
      completed: false
    };
    setTasks([...tasks, newTask]);
    setInput('');
    setError(false);
  };
  const handleCheckbox = taskId => {
    setTasks(prevTasks => {
      const updated = prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      const justCompleted = !prevTasks.find(task => task.id === taskId).completed;
      if (justCompleted) {
        alert('The task is completed!');
      }
      return updated;
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          className={`flex-1 px-3 py-2 border rounded outline-none transition
            ${error ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'}
          `}
          placeholder="Enter a task"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
      {error && (
        <div className="text-red-500 text-sm mt-1">No input</div>
      )}
      <ul className="mt-6 space-y-2">
        {tasks.map(task => (
          <li
            key={task.id}
            className="flex items-center bg-gray-50 px-3 py-2 rounded border border-gray-200"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheckbox(task.id)}
              className="mr-3 accent-blue-600 w-4 h-4"
            />
            <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : ''}`}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex justify-end mt-4">
        <span className="text-sm text-gray-600">
          {completedCount} / {tasks.length} tasks
        </span>
      </div>
    </div>
  );
};

export default TaskList;
