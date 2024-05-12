import { filmsService } from "../services/films.service";
import { NextFunction, Request, Response } from "express";
import { notFoundResponse, successResponse } from "../utils/helpers";

class FilmsController {
  async getFilmsByRoomId(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { roomId } = req.params;

      const room = await filmsService.getFilmsByRoomId(Number(roomId));

      if (room) {
        return successResponse(res, room);
      } else {
        return notFoundResponse(res);
      }
    } catch (e) {
      return next(e);
    }
  }
}

export const filmsController = new FilmsController();
