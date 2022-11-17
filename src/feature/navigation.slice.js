import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    windowSize: {},
    title: 0,
    isScale: false,
    pageToGo: '',
    formMessage: [],
    showModal: false,
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
    setFormMessage: (state, { payload }) => {
      state.formMessage = payload;
    },
    deleteFormMessage: (state) => {
      state.formMessage = [];
    },
    setShowModal: (state, { payload }) => {
      state.showModal = payload;
    },
  },
});
export const {
  setWindowSize,
  setTitlePosition,
  setPageToGo,
  setIsScale,
  setFormMessage,
  deleteFormMessage,
  setShowModal,
} = navigationSlice.actions;
export default navigationSlice.reducer;
