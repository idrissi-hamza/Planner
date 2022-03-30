import React, { useEffect, useState } from "react";
import SmallCalendar from "./smallCalendar";
import { useSelector } from "react-redux";
import { getMonth } from "../util";
import dayjs from "dayjs";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const monthIndex = useSelector((state) => state.calendar.monthIndex);
  const change = useSelector((state) => state.calendar.change);
  const navBar = useSelector((state) => state.calendar.navBar);

  const [monthIndexSmCal, setMonthIndexSmCal] = useState(monthIndex);
  useEffect(() => {
    setMonthIndexSmCal(monthIndex);
  }, [monthIndex, change]);

  const prevMonthHandler = () => {
    setMonthIndexSmCal((prev) => prev - 1);
  };

  const nextMonthHandler = () => {
    setMonthIndexSmCal((prev) => prev + 1);
  };

  const month = getMonth(monthIndexSmCal, 42);

  return (
    <AnimatePresence>
      {navBar && (
        <motion.aside
          initial={{ opacity: 0, width: "300px", x: "-10vw" }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              // type: "spring",
              // damping: 8,
              // mass: 0.4,
            },
          }}
          exit={{
            opacity: 0,
          }}
          className="border-r   px-4 bg-gray-100  "
        >
          <div className=" mt-4 text-gray-500 flex  ">
            <div>
              <button
                className="material-icons-outlined  mr-2 "
                onClick={prevMonthHandler}
              >
                arrow_upward
              </button>

              <button
                className="material-icons-outlined  mr-3 "
                onClick={nextMonthHandler}
              >
                arrow_downward
                
              </button>
            </div>
            <span>
              {dayjs(new Date(dayjs().year(), monthIndexSmCal)).format(
                "MMMM YYYY"
              )}
            </span>
          </div>

          <SmallCalendar month={month} />
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export default Navbar;
