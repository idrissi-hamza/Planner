import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  monthIndex: dayjs().month(),
  change: false,
  navBar: true,
  pickDay: Date.now(),
  // pickMonth:dayjs().month() //if a day from another month is clicked the big calendar should  show the choosen  month
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

      state.pickDay = Date.now();

    },
    toggleNav(state) {
      state.navBar = !state.navBar;
    },
    pickDay(state, action) {
      state.pickDay = +action.payload;
      state.monthIndex = dayjs(+action.payload).month();
    },
    selectDay(state, action) {
      state.pickDay = +action.payload;
      // state.monthIndex = dayjs(+action.payload).month();
    },
  },
});

export const calendarActions = calendarSlice.actions;

export default calendarSlice.reducer;
