import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  status: 'Session',
  value: '25:00'
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
    }
  }
})

export const { increment, decrement, setDisplayValue, setTimerStatus } = displaySlice.actions;

export default displaySlice.reducer;