import { mockFilms } from "../../config/mock-data";
import { FilmsModel } from "./filmsModel";

class FilmsRepository {
  constructor() {}

  async findById(id: number) {
    return FilmsModel.findById(id);
  }
  async getByIds(ids: number[]) {
    return FilmsModel.find({ id: { $in: ids } });
  }
  async createFilms() {
    const allFilms = await FilmsModel.find();

    if (!allFilms.length) {
      await FilmsModel.insertMany(mockFilms);
    }
  }
}

export const filmsRepository = new FilmsRepository();
