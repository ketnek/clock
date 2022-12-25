import { configureStore } from '@reduxjs/toolkit';

import sessionReducer from './sessionSlice';
import breakReducer from './breakSlice';
import displayReducer from './timerDisplaySlice';
import controlReducer from './controlSlice';



export const store = configureStore({
  reducer: {
    sessionTime: sessionReducer,
    breakTime: breakReducer,
    displayTime: displayReducer,
    inputTime: controlReducer
  }
});
