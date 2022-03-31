import React from "react";
import { useSelector } from "react-redux";

function Tasks() {
  const tasksList = useSelector((state) => state.tasks.tasksList);
  return (
    <div>
      {tasksList.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
    </div>
  );
}

export default Tasks;
