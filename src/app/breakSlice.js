import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0.25
};

const breakSlice = createSlice({
  name: 'break',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },

    decrement(state) {
      state.value--;
    },

    reset(state) {
      state.value = initialState.value;
    }
  }
});

export const { increment, decrement, reset } = breakSlice.actions;

export default breakSlice.reducer;