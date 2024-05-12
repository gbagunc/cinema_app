import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./service";

export const filmsAPI = createApi({
  reducerPath: "films",
  baseQuery,
  tagTypes: ["Films"],
  endpoints: (builder) => ({
    getFilmsByRoomId: builder.query({
      query: (roomId: string) => ({
        url: `/films/${roomId}`,
      }),
      providesTags: ["Films"],
    }),
  }),
});

export const { useGetFilmsByRoomIdQuery } = filmsAPI;
