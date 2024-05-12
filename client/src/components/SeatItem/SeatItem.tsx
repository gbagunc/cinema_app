import React from "react";
import styles from "./SeatItem.module.scss";

interface ISeatItemProps {
  seatNum: number;
  booked: boolean;
  onSelectSeat: (id: number) => void;
  bookedNums: number[];
}
export const SeatItem = ({
  seatNum,
  booked,
  onSelectSeat,
  bookedNums,
}: ISeatItemProps) => {
  return (
    <div
      className={`${styles.seatBlock} 
      ${bookedNums.includes(seatNum) ? styles.activeNum : ""} 
      ${booked ? styles.booked : ""}`}
      onClick={() => onSelectSeat(seatNum)}
    >
      <span>{seatNum}</span>
    </div>
  );
};
