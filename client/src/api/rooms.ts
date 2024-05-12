import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./service";

export const roomsAPI = createApi({
  reducerPath: "rooms",
  baseQuery,
  tagTypes: ["Rooms"],
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => ({
        url: "/rooms",
      }),
      providesTags: ["Rooms"],
    }),
  }),
});

export const { useGetRoomsQuery } = roomsAPI;
