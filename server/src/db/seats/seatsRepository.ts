import { SchedulesModel } from "../schedules/schedulesModel";
import { SeatsModel } from "./seatsModel";

class SeatsRepository {
  constructor() {}

  async createSeats() {
    const allSchedules = await SchedulesModel.find();
    const allSeats = await SeatsModel.find();

    if (!allSeats.length) {
      const newSeatsArray = allSchedules.map((schedule) => {
        const seats = [];
        for (let i = 1; i <= 30; i++) {
          seats.push({ id: i, booked: false });
        }
        return {
          scheduleId: schedule.id,
          seats: seats,
        };
      });
      await SeatsModel.insertMany(newSeatsArray);
    }
  }

  async getSeatsByScheduleId(scheduleId: number) {
    return SeatsModel.find({ scheduleId });
  }

  async updateSeats(scheduleId: number, seatsIds: number[]) {
    return SeatsModel.updateOne(
      { scheduleId },
      { "seats.$[elem].booked": true },
      { arrayFilters: [{ "elem.id": { $in: seatsIds } }] },
    );
  }
}

export const seatsRepository = new SeatsRepository();
