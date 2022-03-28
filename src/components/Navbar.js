import React, { useEffect, useState } from "react";
import SmallCalendar from "./smallCalendar";
import { useDispatch, useSelector } from "react-redux";
import { getMonth } from "../util";
import dayjs from "dayjs";
import { calendarActions } from "../store/calendar";

function Navbar() {
  const dispatch = useDispatch();
  const monthIndex = useSelector((state) => state.calendar.monthIndex);
  const init = useSelector((state) => state.calendar.init);

  const [monthIndexSmCal, setMonthIndexSmCal] = useState(monthIndex);
  const month = getMonth(monthIndexSmCal, 42);
  useEffect(() => {
    setMonthIndexSmCal(monthIndex);
  }, [monthIndex, init]);

  const prevMonthHandler = () => {
    dispatch(calendarActions.changeMonth());

    setMonthIndexSmCal((prev) => prev - 1);
  };
  const nextMonthHandler = () => {
    dispatch(calendarActions.changeMonth());

    setMonthIndexSmCal((prev) => prev + 1);
  };
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
