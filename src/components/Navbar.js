import React, { useEffect, useState } from "react";
import SmallCalendar from "./smallCalendar";
import { useDispatch, useSelector } from "react-redux";
import { getMonth } from "../util";
import dayjs from "dayjs";
import { calendarActions } from "../store/calendar";

function Navbar() {
  const dispatch = useDispatch();
  const monthIndex = useSelector((state) => state.calendar.monthIndex);
  const change = useSelector((state) => state.calendar.change);

  const [monthIndexSmCal, setMonthIndexSmCal] = useState(monthIndex);
  useEffect(() => {
    setMonthIndexSmCal(monthIndex);
  }, [change]);

  const prevMonthHandler = () => {
    setMonthIndexSmCal((prev) => prev - 1);
  };

  const nextMonthHandler = () => {
    setMonthIndexSmCal((prev) => prev + 1);
  };

  const month = getMonth(monthIndexSmCal, 42);

  return (
    <div className="border-r-4 text-slate-900 w-64 px-4 ">
      <div className="flex justify-around text-gray-500 ">
        <span>
          {" "}
          {dayjs(new Date(dayjs().year(), monthIndexSmCal)).format("MMMM YYYY")}
        </span>
        <div>
          <button
            className="material-icons-outlined  mr-2 "
            onClick={prevMonthHandler}
          >
            chevron_left
          </button>

          <button
            className="material-icons-outlined  mr-3 "
            onClick={nextMonthHandler}
          >
            chevron_right
          </button>
        </div>
      </div>

      <SmallCalendar month={month} />
    </div>
  );
}

export default Navbar;
