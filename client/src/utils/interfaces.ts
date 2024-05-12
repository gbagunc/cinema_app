export interface IRoomNavigationResponse {
  id: number;
  name: string;
}

export interface IFilmItem {
  id: number;
  title: string;
  img: string;
  schedule: {
    scheduleId: number;
    date: number;
  };
}
export interface IFilmsResponse {
  result: IFilmItem[];
}

export interface ISeatItem {
  id: number;
  booked: boolean;
}
export interface ISeatsResponse {
  result: {
    scheduleId: number;
    seats: ISeatItem[];
  };
}
