import React from "react";
import dayjs from "dayjs";
import { weekday } from "../util";
import { calendarActions } from "../store/calendar";
import { useDispatch } from "react-redux";
function SmallCalendar({ month }) {
  const dispatch = useDispatch();
  return (
    <div className="text-sm font-medium text-slate-700 grid grid-cols-7    ">
      {weekday.map((day, i) => (
        <div
          className="font-bold text-slate-500 pl-2   w-5 text-center  "
          key={i}
        >
          {day.slice(0, 1)}
        </div>
      ))}

      {month.map((day, i) => (
        <div
          id={day}
          className={`flex justify-center items-center h-8 w-8 hover:border-2 transition ease-out duration-300 select-none cursor-pointer
            ${
              day.format("DD/MM/YYYY") === dayjs().format("DD/MM/YYYY")
                ? "bg-blue-500   font-semibold text-base text-blue-100  "
                : "  hover:bg-blue-200 hover:font-semibold hover:text-base  transition ease-out duration-400  "
            }`}
          key={i}
          onClick={(e) => dispatch(calendarActions.pickDay(e.target.id))}
        >
          {day.format("DD")}
        </div>
      ))}
    </div>
  );
}

export default SmallCalendar;
