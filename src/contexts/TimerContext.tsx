import React, { useRef, type ReactElement } from "react";

interface IState {
  counter: number;
  work: {
    time: {
      minutes: number;
      seconds: number;
    };
    phrase: string; // "Nesse ciclo foque por 25 minutos!"
    color: string;
  };
  short: {
    time: {
      minutes: number;
      seconds: number;
    };
    phrase: string; // "Nesse ciclo foque por 25 minutos!"
    color: string;
  };
  long: {
    time: {
      minutes: number;
      seconds: number;
    };
    phrase: string; // "Nesse ciclo foque por 25 minutos!"
    color: string;
  };
}

interface ITimerContext {
  state: IState;
  dispatch: React.Dispatch<IState>;
}

interface ITimerContextProvider {
  children: ReactElement;
}

export const TimerContext = React.createContext<ITimerContext | undefined>(
  undefined,
);

export const TimerContextProvider = ({ children }: ITimerContextProvider) => {
  const initialValue = useRef<ITimerContext>({
    state: {
      counter: 1,
      work: {
        time: {
          minutes: 25,
          seconds: 0,
        },
        phrase: "Nesse ciclo foque por 25 minutos!",
        color: "",
      },
      short: {
        time: {
          minutes: 5,
          seconds: 0,
        },
        phrase: "Descanse por 5 minutos!",
        color: "",
      },
      long: {
        time: {
          minutes: 15,
          seconds: 0,
        },
        phrase: "Nesse ciclo descanse por 15 minutos!",
        color: "",
      },
    },
    dispatch: () => {},
  });

  return <TimerContext.Provider value={initialValue.current}>{children}</TimerContext.Provider>;
};
