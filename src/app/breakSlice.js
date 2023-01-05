import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 5
};

const breakSlice = createSlice({
  name: 'break',
  initialState,
  reducers: {
    increment(state) {
      state.value < 60 && state.value++;
    },

    decrement(state) {
      state.value > 1 && state.value--;
    },

    resetBreak(state) {
      state.value = initialState.value;
    }
  }
});

export const { increment, decrement, resetBreak } = breakSlice.actions;

export default breakSlice.reducer;