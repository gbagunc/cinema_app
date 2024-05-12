import { Response } from "express";

export const successResponse = (res: Response, payload: unknown) => {
  return res.status(200).json({
    result: payload,
  });
};

export const notFoundResponse = (res: Response, message = "Not Found") => {
  return res.status(404).json({
    message,
  });
};

export const generateSeats = (scheduleId: number, roomId: number) => {
  const seats = [];
  // Ваша логика для создания мест
  for (let i = 1; i <= 30; i++) {
    seats.push({
      scheduleId,
      roomId,
      seatId: i,
      booked: false,
    });
  }
  return seats;
};
