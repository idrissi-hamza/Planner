import dayjs from "dayjs";
import React from "react";
import { useSelector } from "react-redux";
const TasksBar = () => {
  const pickDay = useSelector((state) => state.calendar.pickDay);
  return (
    <div className="w-80  shrink-0 shadow-xl flex flex-col">
      <h1 className=" pl-4 pt-3 text-lg font-semibold text-slate-700  flex h-12 border">
        {dayjs(pickDay).format("dddd, MMMM D, YYYY")}{" "}
      </h1>
      <div className=" p-4 pl-6 flex-1">
        <button className="flex gap-4 text-blue-600  font-semibold hover:bg-slate-200 " >
          <span class="material-icons-outlined">add_task</span>Add a Task
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="outline-none "
            type="text"
            placeholder="Add a task"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default TasksBar;
