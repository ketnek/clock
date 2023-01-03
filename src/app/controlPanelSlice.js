import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: 0,
  status: 'Session',
  timerEnds: false
}

const controlSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTime: (state, action) => {
      state.value = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setTimerEnds: (state, action) => {
      state.timerEnds = action.payload;
    }
  }
})

export const { setTime, setStatus, setTimerEnds } = controlSlice.actions;

export default controlSlice.reducer;
