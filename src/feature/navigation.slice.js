import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    windowSize: {},
    title: 0,
    isScale: false,
    pageToGo: '',
  },
  reducers: {

    setWindowSize: (state, { payload }) => {
      state.windowSize = payload;
    },
    setTitlePosition: (state, { payload }) => {
      state.title = payload;
    },
    setPageToGo: (state, { payload }) => {
      state.pageToGo = payload;
    },
    setIsScale: (state, { payload }) => {
      state.isScale = payload;
    },
  },
});
export const {
  setWindowSize,
  setTitlePosition,
  setPageToGo,
  setIsScale,
} = navigationSlice.actions;
export default navigationSlice.reducer;
