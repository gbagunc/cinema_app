import { seatsService } from "./../services/seats.service";
import { NextFunction, Request, Response } from "express";
import { notFoundResponse, successResponse } from "../utils/helpers";

class SeatsController {
  async getSeatsByScheduleId(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { scheduleId } = req.params;
      const seats = await seatsService.getSeatsByScheduleId(Number(scheduleId));

      if (seats) {
        return successResponse(res, seats);
      } else {
        return notFoundResponse(res);
      }
    } catch (error) {
      return next(error);
    }
  }

  async reserveSeats(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { scheduleId, seatsIds } = req.body;

      if (scheduleId && seatsIds.length) {
        await seatsService.reserveSeats(Number(scheduleId), seatsIds);

        return res.json({ success: true });
      } else {
        return notFoundResponse(res);
      }
    } catch (error) {
      return next(error);
    }
  }
}

export const seatsController = new SeatsController();
