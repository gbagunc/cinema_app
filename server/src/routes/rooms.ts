import { roomsController } from "./../controllers/rooms.controller";
import { Router } from "express";

const roomsRoutes = Router();

roomsRoutes.get("/", roomsController.getList);

export default roomsRoutes;
