import { createSlice } from '@reduxjs/toolkit';
// import { statusFilters } from './constants';

const filterInitialState = { value: 'Oleg' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
