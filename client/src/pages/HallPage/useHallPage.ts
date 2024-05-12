import { useGetFilmsByRoomIdQuery } from "../../api/films";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateLocation } from "../../store/location/locationSlice";

export const useHallPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { data, isFetching } = useGetFilmsByRoomIdQuery(location.state.hallId, {
    skip: !location.state.hallId,
  });

  const handleNavigateToFilm = (scheduleId: number) => {
    navigate(`/reservation?id=${scheduleId}`);
    dispatch(updateLocation({ location: "reservation" }));
  };

  return { data, isFetching, handleNavigateToFilm };
};
