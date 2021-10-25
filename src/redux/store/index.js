import { configureStore } from "@reduxjs/toolkit";
import currentDataInfo from "../slice/currentDaySlice";
export const store = configureStore({
  reducer: {
    currentData: currentDataInfo,
  },
});
