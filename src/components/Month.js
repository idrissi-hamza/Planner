import dayjs from "dayjs";
import React, { useState } from "react";
import Day from "./Day";

function Month({ month }) {
  return (
    <div className="grid grid-cols-7  m-3 border-t border-r flex-1 ">
      {month.map((day, i) => (
        <Day key={i} day={day} idx={i} />
      ))}
    </div>
  );
}

export default Month;
