import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "../../store/tasks";


function Tasks() {
  const dispatch=useDispatch()
  const tasksList = useSelector((state) => state.tasks.tasksList);
  let starType = "-outlined";
  const clickHandler = (id) => {
    dispatch(tasksActions.toggleImportance(id))
  };
  return (
    <div>
      {tasksList.map((task) => (
        <div key={task.id} className="flex justify-between ">
          <p>{task.title}</p>
          <span
            onClick={clickHandler.bind(null,task.id)}
            className={`text-xl cursor-pointer text-blue-500 ${
              !task.important ? "material-icons-outlined" : "material-icons"
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
