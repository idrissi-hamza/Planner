import dayjs from "dayjs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { calendarActions } from "../store/calendar";

function Header() {
  const monthIndex = useSelector((state) => state.calendar.monthIndex);
  const dispatch = useDispatch();
  const curMonthHandler = () => dispatch(calendarActions.curMonth());
  const nextMonthHandler = () => dispatch(calendarActions.nextMonth());
  const prevMonthHandler = () => dispatch(calendarActions.prevMonth());
  return (
    <header className=" bg-slate-500 flex  items-center ">
      <span className="material-icons-round text-gray-200 text-4xl ml-3">
        menu
      </span>

      <h1 className="text-lg font-black  text-slate-300 m-3 px-4">Planner</h1>
      <button
        className="border px-3 py-1 mr-4  border-slate-700 rounded-md hover:bg-slate-600 text-slate-300 "
        onClick={curMonthHandler}
      >
        Today
      </button>
      <button
        className="material-icons-outlined text-gray-200  "
        onClick={prevMonthHandler}
      >
        chevron_left
      </button>
      <p></p>
      <button
        className="material-icons-outlined text-gray-200 "
        onClick={nextMonthHandler}
      >
        chevron_right
      </button>
      <p>{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</p>
    </header>
  );
}

export default Header;
