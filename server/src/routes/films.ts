import { Router } from "express";
import { filmsController } from "../controllers/films.controller";

const filmsRoutes = Router();

filmsRoutes.get("/:roomId", filmsController.getFilmsByRoomId);

export default filmsRoutes;
