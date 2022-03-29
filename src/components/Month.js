import dayjs from "dayjs";
import React, { useState } from "react";
import Day from "./Day";
import { useSelector } from "react-redux";
import { getMonth, weekday } from "../util";
import { motion } from "framer-motion";

function Month() {
  const navBar = useSelector((state) => state.calendar.navBar);
  const monthIndex = useSelector((state) => state.calendar.monthIndex);
  const month = getMonth(monthIndex, 35);

  return (
    <div
      
      className="flex flex-col h-screen  w-full"
    >
      <div className="flex h-12 ">
        {weekday.map((day, i) => (
          <div
            className="flex flex-1 items-end pl-2 pb-1 text-gray-700"
            key={i}
          >
            {day.slice(0, 3)}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7   flex-1 ">
        {month.map((day, i) => (
          <Day key={i} day={day} idx={i} />
        ))}
      </div>
    </div>
    
  );
}

export default Month;

// animate={{
//   scale: sideBar || modal ? 0.8 : 1,
//   opacity: sideBar || modal ? 0.5 : 1
// }}
// transition={{ type: "spring", bounce: 0, duration: 0.4 }}
