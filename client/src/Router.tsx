import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HallPage } from "./pages/HallPage/HallPage";
import { ReservationPage } from "./pages/ReservationPage/ReservationPage";
import RoomsNavigation from "./components/RoomsNavigation/RoomsNavigation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateLocation } from "./store/location/locationSlice";
import { RootState } from "./store/store";
import { Modal } from "./components/Modal/Modal";

const Router = () => {
  const dispatch = useDispatch();
  const inReservation = useSelector((state: RootState) => state.location);
  const opened = useSelector((state: RootState) => state.modal.opened);

  const handleBackToHalls = () => {
    window.history.back();
    dispatch(updateLocation({ location: "hall" }));
  };

  useEffect(() => {
    dispatch(
      updateLocation({ location: window.location.pathname.substring(1) }),
    );
  }, [window.location.pathname]);

  return (
    <BrowserRouter>
      {opened ? <Modal /> : null}
      {inReservation.location === "reservation" ? (
        <button className="backToBtn" onClick={handleBackToHalls}>
          Back to halls
        </button>
      ) : (
        <RoomsNavigation />
      )}
      <Routes>
        <Route key={"/hall"} path={"/hall"} element={<HallPage />} />
        <Route
          key={"/reservation"}
          path={"/reservation"}
          element={<ReservationPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
