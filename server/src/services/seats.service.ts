import { seatsRepository } from "../db/seats/seatsRepository";

class SeatsService {
  async getSeatsByScheduleId(scheduleId: number) {
    const seatsById = await seatsRepository.getSeatsByScheduleId(scheduleId);

    const mapData = seatsById.map((item) => {
      return {
        scheduleId: item.scheduleId,
        seats: item.seats,
      };
    });
    return mapData;
  }

  async reserveSeats(scheduleId: number, seatsIds: number[]) {
    return await seatsRepository.updateSeats(scheduleId, seatsIds);
  }
}

export const seatsService = new SeatsService();
