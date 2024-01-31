import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {taskModel} from '../../models/TaskModel';

export interface TaskState {
  tasks: taskModel[];
  loading: boolean;
}

const initialState: TaskState = {
  tasks: [],
  loading: false
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTasksList: (state, action: PayloadAction<taskModel[]>) => {
      state.loading = false;
      state.tasks = action.payload
    },
    toggleLoading: (state, action) => {
        state.loading != state.loading;
    }
  },
});

// Action creators are generated for each case reducer function
export const {setTasksList, toggleLoading} = taskSlice.actions;

export default taskSlice.reducer;
