import { Router } from "express";
import filmsRoutes from "./films";
import roomsRoutes from "./rooms";
import seatsRoutes from "./seats";

const router = Router();

router.use("/films", filmsRoutes);
router.use("/rooms", roomsRoutes);
router.use("/seats", seatsRoutes);

export default router;
