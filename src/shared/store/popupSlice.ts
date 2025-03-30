import { createSlice } from "@reduxjs/toolkit/react";

type PopupState = {
  isShown: boolean;
};

const initialState: PopupState = {
  isShown: false,
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    showPopup: (state) => {
      state.isShown = true;
    },
    hidePopup: (state) => {
      state.isShown = false;
    },
  },
});

export const { showPopup, hidePopup } = popupSlice.actions;
