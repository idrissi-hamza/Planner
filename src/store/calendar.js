import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = { monthIndex: dayjs().month() };

export const calendarSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    nextMonth: (state) => {
      state.monthIndex++;
    },
    prevMonth(state) {
      state.monthIndex--;
    },
    curMonth(state) {
      state.monthIndex = dayjs().month();
    },
  },
});

export const calendarActions = calendarSlice.actions;

export default calendarSlice.reducer;
