import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  monthIndex: dayjs().month(),
  change: false,
  navBar: true,
  pickDay: null,
};

export const calendarSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    nextMonth: (state) => {
      state.monthIndex++;
      state.change = !state.change;
    },
    prevMonth(state) {
      state.monthIndex--;
      state.change = !state.change;
    },
    today(state) {
      state.monthIndex = dayjs().month();
      state.change = !state.change;
    },
    toggleNav(state) {
      state.navBar = !state.navBar;
    },
    pickDay(state, action) {
      state.pickDay = +action.payload;
    },
  },
});

export const calendarActions = calendarSlice.actions;

export default calendarSlice.reducer;
