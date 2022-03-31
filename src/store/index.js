import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "./calendar";
import tasksReducer from "./tasks";

const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    tasks: tasksReducer,
  },
});

export default store;
