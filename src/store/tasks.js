import { createSlice } from "@reduxjs/toolkit";
import { calendarSlice } from "./calendar";

const initialState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push({
        title: action.payload.title,
        description: action.payload.description,
      });
    },
  },
});

export const tasksActions = tasksSlice.actions;

export default calendarSlice.reducer;
