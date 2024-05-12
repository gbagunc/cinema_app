import React from "react";
import styles from "./RoomItem.module.scss";
import { useLocation } from "react-router-dom";

interface IRoomItemProps {
  id: number;
  name: string;
  handleNavigate: (hallId: number) => void;
}

const RoomItem = ({ id, handleNavigate }: IRoomItemProps) => {
  const location = useLocation();

  const isActive = location?.state?.hallId === id;

  return (
    <ul
      key={id}
      className={`${styles.roomItemWrapper} ${isActive ? styles.active : ""}`}
      onClick={() => handleNavigate(id)}
    >
      <li>{`Hall №${id}`}</li>
    </ul>
  );
};

export default React.memo(RoomItem);
