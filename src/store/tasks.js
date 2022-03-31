import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksList: [
    { title: "wake up", id: 1, completed: true, important: true },
    { title: "do something", id: 2, completed: true, important: false },
  ],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasksList.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
        important: false,
      });
      
    },
   
  },
});

export const tasksActions = tasksSlice.actions;

export default tasksSlice.reducer;
