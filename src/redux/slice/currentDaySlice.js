import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const currentDataInfo = createSlice({
  name: "currentDataInfo",
  initialState,
  reducers: {
    setCurrentDayData: (state, { payload: data }) => {
      state.data = data;
    },
  },
});

export const { setCurrentDayData } = currentDataInfo.actions;

export default currentDataInfo.reducer;
