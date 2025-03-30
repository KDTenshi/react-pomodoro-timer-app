import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";

type TimerState = {
  time: number;
  workTime: number;
  restTime: number;
  isWorking: boolean;
  status: "working" | "resting";
};

const initialState: TimerState = {
  time: 0,
  workTime: 15,
  restTime: 5,
  isWorking: false,
  status: "working",
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setWorkTime: (state, action: PayloadAction<{ time: number }>) => {
      const { time } = action.payload;

      state.workTime = time;
    },
    setRestTime: (state, action: PayloadAction<{ time: number }>) => {
      const { time } = action.payload;

      state.restTime = time;
    },
    increaseTime: (state) => {
      state.time += 1;
    },
    resetTime: (state) => {
      state.time = 0;
    },
    startTimer: (state) => {
      state.isWorking = true;
    },
    pauseTimer: (state) => {
      state.isWorking = false;
    },
    stopTimer: (state) => {
      state.isWorking = false;
      state.time = 0;
      state.status = "working";
    },
    changeStatus: (state, action: PayloadAction<{ status: "working" | "resting" }>) => {
      const { status } = action.payload;

      state.status = status;
    },
  },
});

export const { setRestTime, setWorkTime, increaseTime, resetTime, startTimer, pauseTimer, stopTimer, changeStatus } =
  timerSlice.actions;
