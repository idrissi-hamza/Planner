import React, { useEffect, useState } from "react";
import SmallCalendar from "./smallCalendar";
import { useSelector } from "react-redux";
import { getMonth } from "../util";
import dayjs from "dayjs";

function Navbar() {
  const monthIndex = useSelector((state) => state.calendar.monthIndex);
  const change = useSelector((state) => state.calendar.change);

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
    <aside className="border-r   w-64 px-4 bg-gray-100   ">
      <div className=" mt-4 text-gray-500 flex  ">
        <div>
          <button
            className="material-icons-outlined  mr-2 "
            onClick={prevMonthHandler}
          >
            arrow_downward
          </button>

          <button
            className="material-icons-outlined  mr-3 "
            onClick={nextMonthHandler}
          >
            arrow_upward
          </button>
        </div>
        <span>
          {" "}
          {dayjs(new Date(dayjs().year(), monthIndexSmCal)).format("MMMM YYYY")}
        </span>
      </div>

      <SmallCalendar month={month} />
    </aside>
  );
}

export default Navbar;
