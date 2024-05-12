import { PORT } from "./config/constants";
import express from "express";

import cors from "cors";
import http from "http";

import router from "./routes";
import connectDB from "./db/connection";
import { seatsRepository } from "./db/seats/seatsRepository";
import { roomsRepository } from "./db/rooms/roomsRepository";
import { filmsRepository } from "./db/films/filmsRepository";
import { schedulesRepository } from "./db/schedules/schedulesRepository";

const app = express();
app.use(cors({ origin: "*" }));

const StartServer = () => {
  roomsRepository.createRooms();
  filmsRepository.createFilms();
  schedulesRepository.createSchedules();
  seatsRepository.createSeats();

  app.use(express.json());

  connectDB();
  app.use("/api", router);

  http
    .createServer(app)
    .listen(PORT, "0.0.0.0", () =>
      console.info(`Server is running on port ${PORT}`),
    );
};
StartServer();
