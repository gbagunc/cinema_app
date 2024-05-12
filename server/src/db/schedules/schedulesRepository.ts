import { mockSchedules } from "../../config/mock-data";
import { SchedulesModel } from "./schedulesModel";

class SchedulesRepository {
  constructor() {}

  async getFilmsByRoomId(roomId: number) {
    return SchedulesModel.find({ roomId });
  }
  async findById(id: number) {
    return SchedulesModel.find({ id });
  }
  async createSchedules() {
    const allSchedules = await SchedulesModel.find();

    if (!allSchedules.length) {
      await SchedulesModel.insertMany(mockSchedules);
    }
  }
}

export const schedulesRepository = new SchedulesRepository();
