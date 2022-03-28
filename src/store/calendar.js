import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = { monthIndex: dayjs().month(), init: false };

export const calendarSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    changeMonth: (state) => {
      state.init = false;
    },
    nextMonth: (state) => {
      state.monthIndex++;
    },
    prevMonth(state) {
      state.monthIndex--;
    },
    curMonth(state) {
      state.monthIndex = initialState.monthIndex;
      state.init = true;
    },
  },
});

export const calendarActions = calendarSlice.actions;

export default calendarSlice.reducer;
