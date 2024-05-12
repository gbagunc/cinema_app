import { Schema, model } from "mongoose";

export interface RoomEntity {
  id: number;
  name: string;
}

const roomsSchema = new Schema<RoomEntity>(
  {
    id: { required: true, type: Number },
    name: { required: true, type: String },
  },
  { timestamps: { createdAt: "dtsCreatedAt", updatedAt: "dtsUpdatedAt" } },
);

export const RoomsModel = model("rooms", roomsSchema);
