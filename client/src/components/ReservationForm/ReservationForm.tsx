import React from "react";
import styles from "./ReservationForm.module.scss";

interface IReservationFormProps {
  bookedNums: number[];
  handleSelectSeats: () => void;
}
export const ReservationForm = ({
  bookedNums,
  handleSelectSeats,
}: IReservationFormProps) => {
  const hasAnyBook = !!bookedNums.length;

  return (
    <div className={styles.reservationFormContainer}>
      {hasAnyBook ? (
        <span>{`Your booked seats: ${[...bookedNums]}`}</span>
      ) : (
        <span>You don't book any seats</span>
      )}
      {hasAnyBook ? (
        <button className={styles.bookBtn} onClick={handleSelectSeats}>
          Book seats
        </button>
      ) : null}
    </div>
  );
};
