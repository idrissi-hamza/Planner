import React from "react";
import { useSelector } from "react-redux";

function Tasks() {
  const tasksList = useSelector((state) => state.tasks.tasksList);
  let starType = "-outlined";
  const clickHandler = () => {
    return (starType = "");
  };
  return (
    <div>
      {tasksList.map((task) => (
        <div key={task.id} className="flex justify-between ">
          <p>{task.title}</p>
          <span
            onClick={clickHandler}
            className={`text-xl cursor-pointer text-blue-500 ${
              task.important ? "material-icons-outlined" : "material-icons"
            } `}
          >
            grade
          </span>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
