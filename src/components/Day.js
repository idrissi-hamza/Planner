import dayjs from "dayjs";
import React from "react";
function Day({ day, idx }) {
  let isToday = day.format("DD/MM/YYYY") === dayjs().format("DD/MM/YYYY");
  const tdyCss = isToday
    ? "  bg-blue-400 rounded-full group-hover:rounded-none "
    : "";

  return (
    <div
      className={`group hover:bg-slate-100 text-sm border-t border-r  flex    flex-1 hover:bg-slate-100 transition ease-out duration-300 `}
    >
      <p className={`${tdyCss} flex items-center justify-center w-8 h-8 `}>
        {day.format("DD")}
      </p>
    </div>
  );
}

export default Day;
