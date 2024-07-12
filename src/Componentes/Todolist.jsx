import React, { useState, useCallback } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = useCallback((newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }, [setTasks]);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTask(newTask);
    setNewTask('');
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTask} onChange={handleInputChange} />
        <button type="submit">Adicionar tarefa</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;