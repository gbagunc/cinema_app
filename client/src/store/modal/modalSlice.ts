import { createSlice } from "@reduxjs/toolkit";
import { IModalSlice } from "./interface";

export const initialState: IModalSlice = {
  opened: false,
  onSubmit: () => undefined,
  onCancel: () => undefined,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, { payload: { onSubmit, onCancel } }) => {
      state.opened = true;
      state.onSubmit = onSubmit;
      state.onCancel = onCancel;
    },
    closeModal: (state) => {
      state.opened = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
