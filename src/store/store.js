import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from '../feature/navigation.slice';

export default configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});
