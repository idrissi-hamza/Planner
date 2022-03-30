import dayjs from "dayjs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { calendarActions } from "../store/calendar";
function Day({ day }) {
  const dispatch = useDispatch();
  const pickDay = useSelector((state) => state.calendar.pickDay);

  let isToday = day.format("DD/MM/YYYY") === dayjs().format("DD/MM/YYYY");
  const tdyCss = isToday
    ? " border-t-4 border-t-blue-400  text-blue-800  font-semibold "
    : "";
  let pickCss;
  if (pickDay) {
        if (day.format("DD/MM/YYYY") ===dayjs( pickDay).format("DD/MM/YYYY")) {
      pickCss = "bg-blue-200  ";
    }
    
  }
  
  return (
    <div
      id={day}
      onClick={(e) => dispatch(calendarActions.pickDay(e.target.id))}
      className={` ${tdyCss} ${pickCss} focus:bg-blue-100   active:bg-blue-300 group  text-md text-slate-700 border-t border-r pl-2   transition ease-out duration-200 select-none cursor-pointer `}
    >
      {isToday ? day.format("MMM-DD") : day.format("DD")}
      
    </div>
  );
}

export default Day;
