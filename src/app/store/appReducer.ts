import { combineReducers } from "@reduxjs/toolkit";
import { popupSlice } from "../../shared/store/popupSlice";
import { timerSlice } from "../../shared/store/timerSlice";

export const appReducer = combineReducers({
  [popupSlice.reducerPath]: popupSlice.reducer,
  [timerSlice.reducerPath]: timerSlice.reducer,
});
