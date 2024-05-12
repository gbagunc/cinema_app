import React from "react";
import { SeatItem } from "../../components/SeatItem/SeatItem";
import styles from "./ReservationPage.module.scss";
import { SeatInfo } from "../../components/SeatInfo/SeatInfo";
import { ReservationForm } from "../../components/ReservationForm/ReservationForm";

import { Loader } from "../../components/Loader/Loader";
import { ISeatItem } from "../../utils/interfaces";
import { useReservationPage } from "./useReservationPage";

export const ReservationPage = () => {
  const { isFetching, seats, bookedNums, handleBookSeat, onSelectSeats } =
    useReservationPage();

  if (isFetching)
    return (
      <div className={styles.loading}>
        <Loader />
      </div>
    );

  return (
    <div className={styles.reservationContainer}>
      <div className={styles.seatContainer}>
        {seats?.map((item: ISeatItem) => {
          return (
            <SeatItem
              key={item.id}
              seatNum={item.id}
              booked={item.booked}
              onSelectSeat={handleBookSeat}
              bookedNums={bookedNums}
            />
          );
        })}
      </div>

      <ReservationForm
        bookedNums={bookedNums}
        handleSelectSeats={onSelectSeats}
      />

      <SeatInfo />
    </div>
  );
};
