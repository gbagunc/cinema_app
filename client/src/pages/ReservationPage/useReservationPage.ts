import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  useGetSeatsByScheduleIdQuery,
  useReserveSeatsByScheduleIdMutation,
} from "../../api/seats";
import { closeModal, openModal } from "../../store/modal/modalSlice";

export const useReservationPage = () => {
  const [searchParams] = useSearchParams();
  const scheduleId = searchParams.get("id");

  const dispatch = useDispatch();

  const [bookedNums, setBookedNums] = useState<number[]>([]);

  const { data, isFetching } = useGetSeatsByScheduleIdQuery(
    String(scheduleId),
    {
      skip: !scheduleId,
    },
  );
  const seats = data?.result?.[0]?.seats;

  const [reserveSeats] = useReserveSeatsByScheduleIdMutation();

  const handleBookSeat = (id: number) => {
    if (bookedNums.includes(id)) {
      setBookedNums((prev) => prev.filter((item) => item !== id));
    } else {
      setBookedNums((prev) => [...prev, id]);
    }
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const onSelectSeats = () => {
    dispatch(
      openModal({
        onSubmit: () =>
          reserveSeats({ scheduleId, seatsIds: bookedNums }).then(() =>
            dispatch(closeModal()),
          ),
        onCancel: () => handleCloseModal(),
      }),
    );
  };

  useEffect(() => {
    return () => handleCloseModal();
  }, []);

  return { isFetching, seats, bookedNums, handleBookSeat, onSelectSeats };
};
