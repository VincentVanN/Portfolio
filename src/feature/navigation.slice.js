import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    windowSize: {},
    isOnTittle: { active: false, tittle: 0 },
  },
  reducers: {

    setWindowSize: (state, { payload }) => {
      state.windowSize = payload;
    },
    setIsOnTittle: (state, { payload }) => {
      state.isOnTittle = payload;
    },
  },
});
export const {
  setWindowSize,
  setIsOnTittle,
} = navigationSlice.actions;
export default navigationSlice.reducer;
