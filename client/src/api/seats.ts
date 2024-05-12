import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./service";

export const seatsAPI = createApi({
  reducerPath: "seats",
  baseQuery,
  tagTypes: ["Seats"],
  endpoints: (builder) => ({
    getSeatsByScheduleId: builder.query({
      query: (scheduleId: string) => ({
        url: `/seats/${scheduleId}`,
      }),
      providesTags: ["Seats"],
    }),
    reserveSeatsByScheduleId: builder.mutation({
      query: (body) => {
        return {
          url: "/seats/reserveSeats",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Seats"],
    }),
  }),
});

export const {
  useGetSeatsByScheduleIdQuery,
  useReserveSeatsByScheduleIdMutation,
} = seatsAPI;
