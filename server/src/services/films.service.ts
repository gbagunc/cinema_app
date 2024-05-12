import { filmsRepository } from "../db/films/filmsRepository";
import { schedulesRepository } from "../db/schedules/schedulesRepository";

class FilmsService {
  async getFilmsByRoomId(roomId: number) {
    const schedulesFilms = await schedulesRepository.getFilmsByRoomId(roomId);

    const films = await filmsRepository.getByIds(
      schedulesFilms.map((item) => item.filmId),
    );

    const mapData = schedulesFilms.map((item, index) => {
      const { date, id: scheduleId } = item;
      const { id, title, img } = films[index];

      return { id, title, img, schedule: { date, scheduleId } };
    });

    return mapData;
  }
}

export const filmsService = new FilmsService();
