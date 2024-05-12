import React from "react";
import styles from "./Modal.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Modal = () => {
  const { onSubmit, onCancel } = useSelector((state: RootState) => state.modal);

  return (
    <div className={styles.modalContainer}>
      <h2 className={styles.modalText}>Are you sure?</h2>
      <div className={styles.modalBtnBlock}>
        <button className={styles.modalBtn} onClick={onSubmit}>
          Yes
        </button>
        <button className={styles.modalBtn} onClick={onCancel}>
          No
        </button>
      </div>
    </div>
  );
};
