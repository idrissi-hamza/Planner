import dayjs from "dayjs";
import React from "react";
function Day({ day, idx }) {
  let isToday = day.format("DD/MM/YYYY") === dayjs().format("DD/MM/YYYY");
  const tdyCss = isToday
    ? "  bg-blue-500 rounded-full  text-white group-hover:rounded-none "
    : "";

  return (
    <div
      className={`group hover:bg-slate-100 text-md text-slate-700 border-t border-r  flex    flex-1 hover:bg-blue-200 transition ease-out duration-200 `}
    >
      <p className={`${tdyCss} flex items-center justify-center w-8 h-8 `}>
        {day.format("DD")}
      </p>
    </div>
  );
}

export default Day;
