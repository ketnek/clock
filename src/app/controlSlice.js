import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  value: ''
}

export const controlSlice = createSlice({
  name: 'control',
  initialState,
  reducers: {
    decrementInputTime(state) {
      state.value--;
    },
    setInputTime(state, action) {
      state.value = action.payload;
    }
  }
})

export const { decrementInputTime, setInputTime } = controlSlice.actions;

export default controlSlice.reducer;