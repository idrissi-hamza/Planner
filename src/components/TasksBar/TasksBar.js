import Form from "./Form";
import dayjs from "dayjs";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
const TasksBar = () => {
  const pickDay = useSelector((state) => state.calendar.pickDay);

  return (
    <div className="w-80  shrink-0 shadow-xl flex flex-col">
      <h1 className=" pl-4 pt-3 text-lg font-semibold text-slate-700  flex h-12 border">
        {dayjs(pickDay).format("dddd, MMMM D, YYYY")}{" "}
      </h1>
      <Form />
    </div>
    
    
  );
};

export default TasksBar;
