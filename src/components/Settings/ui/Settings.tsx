import React, { FC, useState } from "react";
import style from "./Settings.module.css";

interface SettingsProps {
  isShown: boolean;
  setIsShown: (isShown: boolean) => void;
  workTime: number;
  restTime: number;
  setWorkTime: (time: number) => void;
  setRestTime: (time: number) => void;
}

const Settings: FC<SettingsProps> = ({ isShown, setIsShown, workTime, setWorkTime, restTime, setRestTime }) => {
  const [workTimeValue, setWorkTimeValue] = useState(workTime);
  const [restTimeValue, setRestTimeValue] = useState(restTime);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setWorkTime(workTimeValue);
    setRestTime(restTimeValue);

    setIsShown(false);
  };

  const handleCancel = () => {
    setIsShown(false);
  };

  if (!isShown) return null;

  return (
    <div className={style.Popup}>
      <div className={style.Settings}>
        <h2 className={style.Title}>Set up your timer</h2>
        <form className={style.Form} onSubmit={handleSubmit}>
          <label htmlFor="work" className={style.Label}>
            Work time
          </label>
          <input
            type="text"
            name="work"
            id="work"
            className={style.Input}
            placeholder="Work time"
            value={workTimeValue}
            onChange={(e) => setWorkTimeValue(parseInt(e.target.value))}
          />
          <label htmlFor="rest" className={style.Label}>
            Rest time
          </label>
          <input
            type="text"
            name="rest"
            id="rest"
            className={style.Input}
            placeholder="Rest time"
            value={restTimeValue}
            onChange={(e) => setRestTimeValue(parseInt(e.target.value))}
          />
          <div className={style.Buttons}>
            <button type="submit" className={style.Button}>
              Save
            </button>
            <button type="button" className={style.Button} onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
