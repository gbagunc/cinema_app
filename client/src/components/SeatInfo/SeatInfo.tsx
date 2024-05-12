import React from "react";
import styles from "./SeatInfo.module.scss";

export const SeatInfo = () => {
  return (
    <div className={styles.seatInfoBlock}>
      <div className={styles.seatInfoItem}>
        <div className={styles.available} />
        <span>Available</span>
      </div>
      <div className={styles.seatInfoItem}>
        <div className={styles.booked} />
        <span>Booked</span>
      </div>
      <div className={styles.seatInfoItem}>
        <div className={styles.reserved} />
        <span>Reserved</span>
      </div>
    </div>
  );
};
