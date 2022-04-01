import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksList: [
    { title: "wake up", id: "ts1", completed: true, important: true },
    { title: "do something", id: "ts2", completed: false, important: false },
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
    toggle: (state, action) => {
      let id = action.payload.id;
      let ids = state.tasksList.map((task) => task.id);
      let idx = ids.findIndex((el) => el === id);
      state.tasksList[idx][action.payload.type] = !state.tasksList[idx][action.payload.type];
      console.log(action.payload.type);
    },
    
  },
});

export const tasksActions = tasksSlice.actions;

export default tasksSlice.reducer;
