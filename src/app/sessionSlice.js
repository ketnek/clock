import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: 25
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    increment(state) {
      state.value < 60 && state.value++;
    },

    decrement(state) {
      state.value > 1 && state.value--;
    },

    resetSession(state) {
      state.value = initialState.value;
    }
  }
});

export const { increment, decrement, resetSession } = sessionSlice.actions;

export default sessionSlice.reducer;