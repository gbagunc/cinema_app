import { roomsAPI } from "./../api/rooms";
import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./location/locationSlice";
import { filmsAPI } from "../api/films";
import { seatsAPI } from "../api/seats";
import modalSlice from "./modal/modalSlice";

export const store = configureStore({
  reducer: {
    location: locationSlice,
    modal: modalSlice,
    [roomsAPI.reducerPath]: roomsAPI.reducer,
    [filmsAPI.reducerPath]: filmsAPI.reducer,
    [seatsAPI.reducerPath]: seatsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      roomsAPI.middleware,
      filmsAPI.middleware,
      seatsAPI.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
