import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "./calendar";

const store = configureStore({
  reducer: {
    calendar: calendarReducer,
  },
});

export default store;
