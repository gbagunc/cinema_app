import { Schema, model } from "mongoose";

export interface ScheduleEntity {
  id: number;
  date: Date;
  filmId: number;
  roomId: number;
}

const schedulesSchema = new Schema<ScheduleEntity>(
  {
    id: { required: true, type: Number },
    date: { required: true, type: Date },
    filmId: { required: true, type: Number },
    roomId: { required: true, type: Number },
  },
  { timestamps: { createdAt: "dtsCreatedAt", updatedAt: "dtsUpdatedAt" } },
);

export const SchedulesModel = model("schedule", schedulesSchema);
