import { createContext, useState, type ReactElement } from "react";

interface ITimerProviderProps {
  children: ReactElement;
}

export interface IState {
  minutes: number;
  seconds: number;
}

interface ITimerContext {
  state: IState;
  dispatch: React.Dispatch<{
    minutes: number;
    seconds: number;
  }>;
}

export const TimerContext = createContext<ITimerContext>({
  state: {
    minutes: 0,
    seconds: 0,
  },
  dispatch: () => undefined,
});

export const TimerProvider = ({ children }: ITimerProviderProps) => {
  const [time, setTime] = useState({
    seconds: 10,
    minutes: 0,
  });

  return (
    <TimerContext.Provider value={{ state: time, dispatch: setTime }}>
      {children}
    </TimerContext.Provider>
  );
};
