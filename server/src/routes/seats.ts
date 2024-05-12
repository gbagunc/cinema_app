import { seatsController } from "./../controllers/seats.controller";
import { Router } from "express";

const seatsRoutes = Router();

seatsRoutes.get("/:scheduleId", seatsController.getSeatsByScheduleId);
seatsRoutes.post("/reserveSeats", seatsController.reserveSeats);

export default seatsRoutes;
