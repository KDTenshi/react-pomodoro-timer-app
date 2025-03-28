import { FC, useEffect, useState } from "react";
import style from "./Timer.module.css";
import { getTimeString } from "../../../shared/utils/getTimeString";

interface TimerProps {
  showPopup: () => void;
  workTime: number;
  restTime: number;
}

type TimerStatus = "working" | "resting";

const Timer: FC<TimerProps> = ({ showPopup, workTime, restTime }) => {
  const [time, setTime] = useState(0);
  const [isTimerWorking, setIsTimerWorking] = useState(false);
  const [timerStatus, setTimerStatus] = useState<TimerStatus>("working");
  const audio = new Audio("/audio.wav");

  useEffect(() => {
    if (!isTimerWorking) return;

    const timer = setInterval(() => {
      setTime((prev) => (prev += 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimerWorking]);

  useEffect(() => {
    if (timerStatus === "working" && time === 60 * workTime) {
      setTimerStatus("resting");
      setTime(0);
      audio.play();
    }

    if (timerStatus === "resting" && time === 60 * restTime) {
      setTimerStatus("working");
      setTime(0);
      audio.play();
    }
  }, [time]);

  useEffect(() => {
    stopTimer();
  }, [workTime, restTime]);

  const stopTimer = () => {
    setIsTimerWorking(false);
    setTimerStatus("working");
    setTime(0);
  };

  return (
    <div className={style.Timer}>
      <button className={[style.Button, style.Settings].join(" ")} onClick={showPopup}>
        <span className="material-symbols-outlined">settings</span>
      </button>
      <h1 className={style.Title}>Pomodoro Timer</h1>
      <h2 className={style.Status}>{timerStatus}</h2>
      <p className={style.Time}>{getTimeString(time)}</p>
      <div className={style.Controls}>
        {!isTimerWorking && (
          <button className={style.Button} onClick={() => setIsTimerWorking(true)}>
            <span className="material-symbols-outlined">play_circle</span>
          </button>
        )}
        {isTimerWorking && (
          <button className={style.Button} onClick={() => setIsTimerWorking(false)}>
            <span className="material-symbols-outlined">pause_circle</span>
          </button>
        )}
        <button className={style.Button} onClick={stopTimer}>
          <span className="material-symbols-outlined">stop_circle</span>
        </button>
      </div>
    </div>
  );
};

export default Timer;
