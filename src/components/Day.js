import dayjs from "dayjs";
import React from "react";

function Day({ day, idx }) {
  const cssCLasses =
    day.format("DD/MM/YYYY") === dayjs().format("DD/MM/YYYY")
      ? "bg-blue-500 rounded-full"
      : "";

  return (
    <div className=" flex flex-col items-center    border-b border-l text-center mt-1 text-sm  ">
      {idx < 7 ? <p className="">{day.format("ddd")} </p> : ""}
      <p
        className={` ${cssCLasses} flex justify-center items-center   w-7 h-7`}
      >
        {day.format("DD")}
      </p>
    </div>
  );
}

export default Day;
