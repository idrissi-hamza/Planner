import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  tasks: [
    { title: "wake up", id: 1, completed: true, important: true },
    { title: "do something", id: 2, completed: true, important: false },
  ],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: new Date(), title: action.payload });
    },
  },
});

export const tasksActions = tasksSlice.actions;

export default tasksSlice.reducer;
