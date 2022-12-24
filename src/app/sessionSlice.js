import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: 'Session',
  value: 25
};

const sessionSlice = createSlice({
  name: 'session',
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

export const { increment, decrement, reset } = sessionSlice.actions;

export default sessionSlice.reducer;