import React from "react";
import dayjs from "dayjs";

function SmallCalendar({ month }) {
  return (
    <div className="text-sm font-medium text-slate-700 grid grid-cols-7  gap-1  ">
      {month.map((day, i) =>
        i < 7 ? (
          <p className="font-bold text-slate-500    w-5 text-center " key={i}>
            {day.format("dd").slice(0, 1)}
          </p>
        ) : (
          ""
        )
      )}
      {month.map((day, i) => (
        <p
          className={
            day.format("DD/MM/YYYY") === dayjs().format("DD/MM/YYYY")
              ? "bg-blue-500 w-6 h-6 text-center rounded-full text-blue-100 "
              : "text-center"
          }
          key={i}
        >
          {day.format("DD")}
        </p>
      ))}
    </div>
  );
}

export default SmallCalendar;
