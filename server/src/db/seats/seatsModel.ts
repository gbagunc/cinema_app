import { Schema, model } from "mongoose";

export interface SeatEntity {
  scheduleId: number;
  seats: {
    id: number;
    booked: boolean;
  }[];
}

const seatsSchema = new Schema<SeatEntity>(
  {
    scheduleId: { required: true, type: Number },
    seats: [
      {
        id: { required: true, type: Number },
        booked: { required: true, type: Boolean },
      },
    ],
  },
  { timestamps: { createdAt: "dtsCreatedAt", updatedAt: "dtsUpdatedAt" } },
);

export const SeatsModel = model("seat", seatsSchema);
