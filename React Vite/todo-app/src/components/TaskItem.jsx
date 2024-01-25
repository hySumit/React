// TaskItem.js
import React from "react";

const TaskItem = ({ item, handleDelete, handleToggle }) => {
  return (
    <div className="task-item">
      <h1>
        Task:{" "}
        <span style={{ color: item.completed ? "green" : "red" }}>
          {item.task}
        </span>{" "}
      </h1>
      <button onClick={handleToggle}>
        {item.completed ? "Not Done" : "Done"}
      </button>
      <h3>
        Task Assigned to:{" "}
        <span style={{ color: "#152c3d" }}>{item.taskAssignedTo}</span>{" "}
      </h3>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
