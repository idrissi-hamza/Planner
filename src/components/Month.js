import React from "react";
import Day from "./Day";
import { useSelector } from "react-redux";
import { getMonth, weekday } from "../util";
import { motion } from "framer-motion";

function Month() {
  const monthIndex = useSelector((state) => state.calendar.monthIndex);
  const month = getMonth(monthIndex, 35);

  return (
    <motion.div
      initial={{ opacity: 0, x: "10vw" }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.4,
                  },
      }}
      className="flex flex-col   w-full"
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
    </motion.div>
  );
}

export default Month;
