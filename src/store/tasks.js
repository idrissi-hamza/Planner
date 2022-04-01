import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksList: [
    { title: "wake up", id: "ts1", completed: true, important: true },
    { title: "do something", id: "ts2", completed: true, important: false },
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
    toggleImportance: (state, action) => {
      let id = action.payload;
      let ids = state.tasksList.map((task) => task.id);
      let idx = ids.findIndex((el) => el === id);
      state.tasksList[idx].important = !state.tasksList[idx].important;
      console.log(action.payload);
    },
  },
});

export const tasksActions = tasksSlice.actions;

export default tasksSlice.reducer;
