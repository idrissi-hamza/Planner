import dayjs from "dayjs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { calendarActions } from "../store/calendar";

function Header() {
  const monthIndex = useSelector((state) => state.calendar.monthIndex);
  const dispatch = useDispatch();
  const curMonthHandler = () => dispatch(calendarActions.today());
  const nextMonthHandler = () => dispatch(calendarActions.nextMonth());
  const prevMonthHandler = () => dispatch(calendarActions.prevMonth());
  const showNav = () => dispatch(calendarActions.toggleNav());

  return (
    <header className=" bg-slate-500 flex  items-center ">
      <div className="hover:bg-slate-400 text-gray-300 hover:text-gray-600 ml-3 w-11 h-11 flex justify-center items-center rounded-full transition ease-in-out duration-300">
        <button
          onClick={showNav}
          className="material-icons-round   text-4xl "
        >
          menu
        </button>
      </div>

      <h1 className="text-lg font-black  text-slate-300 m-3 px-4">Planner</h1>
      <button
        className="border px-3 py-1 mr-4  border-slate-700 rounded-md hover:bg-slate-600 text-slate-300 "
        onClick={curMonthHandler}
      >
        Today
      </button>
      <button
        className="material-icons-outlined text-gray-200 mr-2 "
        onClick={prevMonthHandler}
      >
        chevron_left
      </button>

      <button
        className="material-icons-outlined text-gray-200 mr-3 "
        onClick={nextMonthHandler}
      >
        chevron_right
      </button>
      <p className="text-slate-300 font-bold ">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </p>
    </header>
  );
}

export default Header;
