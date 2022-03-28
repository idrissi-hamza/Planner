import React from "react";
import SmallCalendar from "./smallCalendar";

function Navbar({ month }) {
  return (
    <div className="border-r-4 text-slate-900 w-64 px-4 ">
      <div className="flex justify-around text-gray-500 ">
        <span>Avirl 2022</span>
        <div><button
          className="material-icons-outlined  mr-2 "
          // onClick={prevMonthHandler}
        >
          chevron_left
        </button>

        <button
          className="material-icons-outlined  mr-3 "
          // onClick={nextMonthHandler}
        >
          chevron_right
        </button></div>
      </div>

      <SmallCalendar month={month} />
    </div>
  );
}

export default Navbar;
