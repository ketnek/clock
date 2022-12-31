import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  status: 'Session',
  value: '25:00',
  timerEnds: false
}
export const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    increment: state => {
      state.value++;
    },
    decrement: state => {
      state.value--;
    },
    setDisplayValue: (state, action) => {
      state.value = action.payload;
    },
    setTimerStatus: (state, action) => {
      state.status = action.payload;
    },
    setTimerEnds: (state, action) => {
      state.timerEnds = action.payload
    }
  }
})

export const { increment, decrement, setDisplayValue, setTimerStatus, setTimerEnds } = displaySlice.actions;

export default displaySlice.reducer;