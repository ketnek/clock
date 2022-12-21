import { configureStore } from '@reduxjs/toolkit';

import sessionReducer from './sessionSlice';
import breakReducer from './breakSlice';



export const store = configureStore({
  reducer: {
    sessionTime: sessionReducer,
    breakTime: breakReducer
  }
});
