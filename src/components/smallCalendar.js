import React from "react";
import dayjs from "dayjs";
import { weekday } from "../util";
function SmallCalendar({ month }) {
  return (
    <div className="text-sm font-medium text-slate-700 grid grid-cols-7    ">
      {weekday.map((day, i) => (
        <div className="font-bold text-slate-500 pl-2   w-5 text-center  " key={i}>
          {day.slice(0, 1)}
        </div>
      ))}

      {month.map((day, i) => (
        <p
          className={`flex justify-center items-center h-8  hover:border-2 transition ease-out duration-300
            ${
              day.format("DD/MM/YYYY") === dayjs().format("DD/MM/YYYY")
                ? "bg-blue-500    text-blue-100 rounded-full hover:rounded-none "
                : "  hover:bg-blue-200  "
            }`}
          key={i}
        >
          {day.format("DD")}
        </p>
      ))}
    </div>
  );
}

export default SmallCalendar;
