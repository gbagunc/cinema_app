import React from "react";
import styles from "./HallPage.module.scss";
import { FilmItem } from "../../components/FilmItem/FilmItem";
import { Loader } from "../../components/Loader/Loader";
import { IFilmItem } from "../../utils/interfaces";
import { useHallPage } from "./useHallPage";

export const HallPage = () => {
  const { data, isFetching, handleNavigateToFilm } = useHallPage();

  if (isFetching)
    return (
      <div className={styles.loadingContainer}>
        <Loader />
      </div>
    );

  return (
    <div className={styles.hallContainer}>
      {data?.result?.map((film: IFilmItem) => {
        return (
          <FilmItem
            key={film.id}
            filmItem={film}
            onNavigateFilm={handleNavigateToFilm}
          />
        );
      })}
    </div>
  );
};
