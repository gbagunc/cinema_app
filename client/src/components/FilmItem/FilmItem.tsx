import React from "react";
import styles from "./FilmItem.module.scss";
import { IFilmItem } from "../../utils/interfaces";
import { formatTimestamp } from "../../utils/helpers";

interface IFilmItemProps {
  filmItem: IFilmItem;
  onNavigateFilm: (scheduleId: number) => void;
}
export const FilmItem = ({ filmItem, onNavigateFilm }: IFilmItemProps) => {
  return (
    <div key={filmItem.id} className={styles.filmItemWrapper}>
      <div
        className={styles.posterBlock}
        onClick={() => onNavigateFilm(filmItem.schedule.scheduleId)}
      >
        <img src={filmItem.img} />
      </div>
      <div className={styles.filmTitle}>
        <h2>{filmItem.title}</h2>
      </div>
      <div className={styles.dateBlock}>
        <span>{`${formatTimestamp(filmItem.schedule.date)}`}</span>
      </div>
    </div>
  );
};
