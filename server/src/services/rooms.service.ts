import { roomsRepository } from "../db/rooms/roomsRepository";

class RoomsService {
  async getList() {
    return roomsRepository.getList();
  }
}

export const roomsService = new RoomsService();
