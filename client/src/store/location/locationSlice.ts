import { createSlice } from "@reduxjs/toolkit";

import { ILocationSlice } from "./interface";

export const initialState: ILocationSlice = {
  location: "",
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    updateLocation: (state, { payload }) => {
      state.location = payload.location;
    },
  },
});

export const { updateLocation } = locationSlice.actions;

export default locationSlice.reducer;
