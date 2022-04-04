import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "../../store/tasks";

function Tasks() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.tasks.list);
  const pickDay = useSelector((state) => state.calendar.pickDay);

  if(!list){
    dispatch(tasksActions.reset())
  }
  const tasksOfPickDay = list[pickDay] || [];

  const toggleHandler = ({ ref, id, type }) => {
    dispatch(tasksActions.toggle({ ref, id, type }));
  };

  const deleteHandler = ({ ref, id }) => {
    dispatch(tasksActions.delete({ ref, id }));
  };

  return (
    <div className=" overflow-y-auto h-80 scrollbar-thin flex flex-col overflow-x-hidden   ">
      {tasksOfPickDay.map((task) => (
        <div
          key={task.id}
          className="group flex justify-start first:mt-4  px-4 pt-2 border-b hover:bg-slate-50 hover:border-l-4 border-l-blue-500  "
        >
          {/* =============completed ==============*/}
          <div
            onClick={toggleHandler.bind(null, {
              ref: pickDay,
              id: task.id,
              type: "completed",
            })}
            className=" mr-auto flex  items-center  space-x-3 cursor-pointer mb-2 "
          >
            <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer ">
              {task.completed && (
                <span className="material-icons-outlined text-lg">done</span>
              )}
            </div>
            <p
              className={`select-none  ${task.completed ? "line-through" : ""}`}
            >
              {task.title}
            </p>
          </div>

          {/* =============delete icon==============*/}
          <div className=" select-none flex ">
            <span
              onClick={deleteHandler.bind(null, {
                ref: pickDay,
                id: task.id,
              })}
              className={`group-hover:flex hidden hover:bg-slate-200 mb-2 mr-1 p-1 aspect-square  items-center justify-center   text-xl cursor-pointer text-red-500 material-icons-outlined`}
            >
              delete
            </span>
          </div>

          {/* =============delete icon==============*/}
          <div className="relative hover-trigger select-none flex ">
            <span
              onClick={toggleHandler.bind(null, {
                ref: pickDay,
                id: task.id,
                type: "important",
              })}
              className={` hover:bg-slate-200 mb-2 mr-1 p-1 aspect-square flex items-center justify-center   text-xl cursor-pointer text-blue-500 ${
                !task.important ? "material-icons-outlined" : "material-icons"
              } `}
            >
              grade
            </span>
            <div className="absolute bg-lime-200    h-8 px-1 z-10 w-36 hover-target text-lime-600 transition ease-in duration-500 delay-1000  flex -left-32  -top-6       ">
              {task.important ? "Delete Importance" : "Mark as Important!"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
