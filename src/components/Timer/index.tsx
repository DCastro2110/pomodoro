// import React, { useRef } from "react";

import style from "./styles.module.css";

// import { useTimer } from "../../hooks/useTimer";
import { formatNumber } from "../../utils/formatNumber";

export const Timer = () => {
  //const { state: time, dispatch: setTime } = useTimer();
  // const timer = useRef<null | number>(null);

  const minutes = formatNumber(25);
  const seconds = formatNumber(0);

  /* const startTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }

    timer.current = setInterval(() => {
      setTime((prevState) => {
        let { category} = prevState;

        if (minutes === 0 && seconds === 0) {
          if (typeof timer?.current === "number") {
            clearInterval(timer.current);
          }

          return {
            minutes,
            seconds,
          };
        }

        seconds--;

        if (seconds === -1) {
          seconds = 59;
          minutes--;
        }

        return {
          seconds,
          minutes,
        };
      });
    }, 1000);
  }; */

  return (
    <div className={style.timeContainer}>
      <span className={style.time}>{`${minutes}:${seconds}`}</span>
    </div>
  );
};
