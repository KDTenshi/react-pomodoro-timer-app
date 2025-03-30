import React, { FC, useState } from "react";
import style from "./Settings.module.css";
import { useAppDispatch, useAppSelector } from "../../../app/store/appStore";
import { hidePopup } from "../../../shared/store/popupSlice";
import { setRestTime, setWorkTime } from "../../../shared/store/timerSlice";

const Settings: FC = () => {
  const isShown = useAppSelector((state) => state.popup.isShown);
  const { workTime, restTime } = useAppSelector((state) => state.timer);
  const dispatch = useAppDispatch();

  const [workTimeValue, setWorkTimeValue] = useState(workTime);
  const [restTimeValue, setRestTimeValue] = useState(restTime);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setWorkTime({ time: workTimeValue }));
    dispatch(setRestTime({ time: restTimeValue }));

    dispatch(hidePopup());
  };

  const handleCancel = () => {
    dispatch(hidePopup());
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
