import React, { useState } from 'react';

export default function TaskList() {
  const [state, setState] = useState({
    input: "",
    tasks: [],
    error: false
  });

  const completedCount = state.tasks.filter(t => t.completed).length;

  const handleChange = (e) => {
    setState(prev => ({
      ...prev,
      input: e.target.value,
      error: false
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.input.trim()) {
      setState(prev => ({
        ...prev,
        error: true
      }));
      return;
    }
    setState(prev => ({
      ...prev,
      tasks: [...prev.tasks, { text: prev.input.trim(), completed: false }],
      input: "",
      error: false
    }));
  };

  const handleCheckbox = (idx) => {
    setState(prev => {
      const updated = prev.tasks.map((t, i) =>
        i === idx ? { ...t, completed: !t.completed } : t
      );
      const justCompleted = !prev.tasks[idx].completed;
      if (justCompleted) {
        alert("The task is completed!");
      }
      return { ...prev, tasks: updated };
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          value={state.input}
          onChange={handleChange}
          className={`flex-1 px-3 py-2 border rounded outline-none transition
            ${state.error ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'}
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
      {state.error && (
        <div className="text-red-500 text-sm mt-1">No input</div>
      )}
      <ul className="mt-6 space-y-2">
        {state.tasks.map((task, idx) => (
          <li
            key={idx}
            className="flex items-center bg-gray-50 px-3 py-2 rounded border border-gray-200"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheckbox(idx)}
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
          {completedCount} / {state.tasks.length} tasks
        </span>
      </div>
    </div>
  );
}