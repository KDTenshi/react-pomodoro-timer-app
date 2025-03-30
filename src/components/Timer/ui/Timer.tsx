import { FC, useEffect } from "react";
import style from "./Timer.module.css";
import { getTimeString } from "../../../shared/utils/getTimeString";
import { useAppDispatch, useAppSelector } from "../../../app/store/appStore";
import { showPopup } from "../../../shared/store/popupSlice";
import {
  changeStatus,
  increaseTime,
  pauseTimer,
  resetTime,
  startTimer,
  stopTimer,
} from "../../../shared/store/timerSlice";

const Timer: FC = () => {
  const { time, workTime, restTime, isWorking, status } = useAppSelector((state) => state.timer);
  const dispatch = useAppDispatch();
  const audio = new Audio("/audio.wav");

  useEffect(() => {
    if (!isWorking) return;

    const timer = setInterval(() => {
      dispatch(increaseTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [isWorking]);

  useEffect(() => {
    if (status === "working" && time === 60 * workTime) {
      dispatch(changeStatus({ status: "resting" }));
      dispatch(resetTime());
      audio.play();
    }

    if (status === "resting" && time === 60 * restTime) {
      dispatch(changeStatus({ status: "working" }));
      dispatch(resetTime());
      audio.play();
    }
  }, [time]);

  useEffect(() => {
    stopTimer();
  }, [workTime, restTime]);

  return (
    <div className={style.Timer}>
      <button className={[style.Button, style.Settings].join(" ")} onClick={() => dispatch(showPopup())}>
        <span className="material-symbols-outlined">settings</span>
      </button>
      <h1 className={style.Title}>Pomodoro Timer</h1>
      <h2 className={style.Status}>{status}</h2>
      <p className={style.Time}>{getTimeString(time)}</p>
      <div className={style.Controls}>
        {!isWorking && (
          <button className={style.Button} onClick={() => dispatch(startTimer())}>
            <span className="material-symbols-outlined">play_circle</span>
          </button>
        )}
        {isWorking && (
          <button className={style.Button} onClick={() => dispatch(pauseTimer())}>
            <span className="material-symbols-outlined">pause_circle</span>
          </button>
        )}
        <button className={style.Button} onClick={() => dispatch(stopTimer())}>
          <span className="material-symbols-outlined">stop_circle</span>
        </button>
      </div>
    </div>
  );
};

export default Timer;
