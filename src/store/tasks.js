import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {
    0: [{ title: "first task" }],
    // ref1:[{comle:true,id:kkj,..},{...}]
  },
  changed: false, // we track toggle and delete so we can trigger update data

  // status: {ref1:{total:0,pending:0,importantAndPending:0},ref2:{...}},
  status: {},
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    reset(state) {
      return initialState;
    },
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

      //update status list
      if (state.status[ref]) {
        state.status[ref].total++;
        state.status[ref].pending++;
      } else {
        state.status[ref] = {
          total: 1,
          pending: 1,
          importantAndPending: 0,
        };
      }
      // state.changed = !state.changed;
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

      //update status ontoggle
      let numOfPending = state.list[ref].filter(
        (task) => task.completed === false
      ).length;
      state.status[ref].pending = numOfPending;

      let numOfImportantAndPending = state.list[ref].filter(
        (task) => task.completed === false && task.important === true
      ).length;
      state.status[ref].importantAndPending = numOfImportantAndPending;
    },
    updateData(state, action) {
      state.list = action.payload.list;
      state.status = action.payload.status;
    },

    delete(state, action) {
      let ref = action.payload.ref;
      let id = action.payload.id;

      state.list[ref] = state.list[ref].filter((task) => task.id !== id);

      state.status[ref].total--;

      let numOfPending = state.list[ref].filter(
        (task) => task.completed === false
      ).length;
      state.status[ref].pending = numOfPending;

      let numOfImportantAndPending = state.list[ref].filter(
        (task) => task.completed === false && task.important === true
      ).length;
      state.status[ref].importantAndPending = numOfImportantAndPending;

      state.changed = !state.changed;
    },
  },
});

export const tasksActions = tasksSlice.actions;

export default tasksSlice.reducer;
