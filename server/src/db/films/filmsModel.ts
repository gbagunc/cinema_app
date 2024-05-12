import { Schema, model } from "mongoose";

export interface FilmEntity {
  id: number;
  title: string;
  img: string;
}

const filmsSchema = new Schema<FilmEntity>(
  {
    id: { required: true, type: Number },
    title: { required: true, type: String },
    img: { required: true, type: String },
  },
  { timestamps: { createdAt: "dtsCreatedAt", updatedAt: "dtsUpdatedAt" } },
);

export const FilmsModel = model("film", filmsSchema);
