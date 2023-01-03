import { configureStore } from '@reduxjs/toolkit';

import sessionReducer from './sessionSlice';
import breakReducer from './breakSlice';
import contolReducer from './controlPanelSlice';


export const store = configureStore({
  reducer: {
    sessionTime: sessionReducer,
    breakTime: breakReducer,
    timer: contolReducer
  }
});
