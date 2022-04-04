import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {
    // day:[comle:true,id:kkj,..]
  },
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

    delete(state, action) {
      let ref = action.payload.ref;
      let id = action.payload.id;
      console.log(ref);
      state.list[ref] = state.list[ref].filter((task) => task.id !== id);
      if(state.list[ref].length===0){
        delete state.list[ref]
      }
      state.changed = !state.changed;
    },
  },
});

export const tasksActions = tasksSlice.actions;

export default tasksSlice.reducer;
