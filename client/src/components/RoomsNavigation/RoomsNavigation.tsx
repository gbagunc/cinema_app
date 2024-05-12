import React from "react";
import RoomItem from "../RoomItem/RoomItem";
import styles from "./RoomsNavigation.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateLocation } from "../../store/location/locationSlice";
import { useGetRoomsQuery } from "../../api/rooms";
import { IRoomNavigationResponse } from "../../utils/interfaces";

const RoomsNavigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data } = useGetRoomsQuery({});

  const onNavigateHall = (pathId: number) => {
    navigate("hall", { state: { hallId: pathId } });
    dispatch(updateLocation({ location: "hall" }));
  };

  return (
    <div className={styles.roomsNavigationContainer}>
      {data?.result?.map((room: IRoomNavigationResponse) => {
        return (
          <RoomItem
            key={room.id}
            id={room.id}
            name={room.name}
            handleNavigate={onNavigateHall}
          />
        );
      })}
    </div>
  );
};

export default React.memo(RoomsNavigation);
