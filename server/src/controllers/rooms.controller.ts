import { NextFunction, Request, Response } from "express";
import { roomsService } from "../services/rooms.service";
import { successResponse } from "../utils/helpers";

class RoomsController {
  async getList(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const rooms = await roomsService.getList();
      return successResponse(res, rooms);
    } catch (e) {
      return next(e);
    }
  }
}

export const roomsController = new RoomsController();
