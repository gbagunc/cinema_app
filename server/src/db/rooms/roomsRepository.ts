import { mockRooms } from "../../config/mock-data";
import { RoomsModel } from "./roomsModel";

class RoomsRepository {
  constructor() {}

  async getList() {
    return RoomsModel.find({});
  }
  async createRooms() {
    const allRooms = await RoomsModel.find();

    if (!allRooms.length) {
      await RoomsModel.insertMany(mockRooms);
    }
  }
}

export const roomsRepository = new RoomsRepository();
