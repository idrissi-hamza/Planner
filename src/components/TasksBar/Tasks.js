import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "../../store/tasks";

function Tasks() {
  const dispatch = useDispatch();
  const tasksList = useSelector((state) => state.tasks.tasksList);
  let starType = "-outlined";
  const clickHandler = (id) => {
    dispatch(tasksActions.toggleImportance(id));
  };
  const clickHandlerCompleted = (id) => {
    dispatch(tasksActions.toggleCompleted(id));
  };
  return (
    <div>
      {tasksList.map((task) => (
        <div key={task.id} className="flex justify-between ">
          <div className="flex items-center  space-x-3 cursor-pointer ">
            <div
              onClick={clickHandlerCompleted.bind(null, task.id)}
              className="w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer "
            >
              {task.completed && (
                <span className="material-icons-outlined text-lg">
                  done
                </span>
              )}
            </div>
            <p>{task.title}</p>
          </div>
          <span
            onClick={clickHandler.bind(null, task.id)}
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
