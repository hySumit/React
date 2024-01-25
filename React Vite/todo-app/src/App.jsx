import React, { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "",
    completed: false,
    taskAssignedTo: "",
  });

  function handleChange(event) {
    const triggerName = event.target.name;
    const triggeredValue =
      triggerName === "completed" ? event.target.checked : event.target.value;

    setFormState({
      ...formState,
      [event.target.name]: triggeredValue,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTasks([...tasks, formState]);

    setFormState({
      task: "",
      completed: false,
      taskAssignedTo: "",
    });
  }

  function handleDelete(index) {
    let updatearr = [...tasks];
    updatearr.splice(index, 1);
    setTasks(updatearr);
  }

  function handleToggle(index) {
    let updatearr = [...tasks];
    updatearr[index].completed = !updatearr[index].completed;
    setTasks(updatearr);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          name="task"
          type="text"
          placeholder="Add Task"
          onChange={handleChange}
          value={formState.task}
          required
        />
        <label>
          Completed:
          <input
            name="completed"
            type="checkbox"
            onChange={handleChange}
            checked={formState.completed}
          />
        </label>
        <select
          name="taskAssignedTo"
          onChange={handleChange}
          value={formState.taskAssignedTo}
          required
        >
          <option value="">Select Assignee</option>
          <option value="Bruce">Bruce</option>
          <option value="Barry">Barry</option>
          <option value="Clark">Clark</option>
          <option value="Oliver">Oliver</option>
          <option value="Jina">Jina</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
      <hr />
      <div className="task-container">
        {tasks.map((item, index) => (
          <TaskItem
            key={index}
            item={item}
            handleDelete={() => handleDelete(index)}
            handleToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
