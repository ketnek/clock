import { createSlice } from "@reduxjs/toolkit";

export const displaySlice = createSlice({
  name: 'display',
  initialState: {
    value: '25:00'
  },
  reducers: {
    increment: state => {
      state.value++;
    },
    decrement: state => {
      state.value--;
    },
    setDisplayValue: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { increment, decrement, setDisplayValue } = displaySlice.actions;

export default displaySlice.reducer;