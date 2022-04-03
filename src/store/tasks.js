import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {},
    //   { title: "wake up", id: "ts1", completed: true, important: true },
    //   pickday1:[{ title: "do something", id: "ts2", completed: false, important: false },{ title: "wake up", id: "ts1", completed: true, important: true }],

  changed: false,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.changed = !state.changed;

      const task = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
        important: false,
      };
      const ref = action.payload.ref;

      state.list[ref] ? state.list[ref].push(task) : (state.list[ref] = [task]);
    },
    toggle: (state, action) => {
      let ref = action.payload.ref;
      let id = action.payload.id;
      let type = action.payload.type;

      let tasksOfPickDay = state.list[ref];

      let idx = tasksOfPickDay
        .map((task) => task.id)
        .findIndex((el) => el === id);

      tasksOfPickDay[idx][type] = !tasksOfPickDay[idx][type];
      state.changed = !state.changed;
    },
    updateData(state, action) {
      state.list = action.payload.list;
    },
  },
});

export const tasksActions = tasksSlice.actions;

export default tasksSlice.reducer;
