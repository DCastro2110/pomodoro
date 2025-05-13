import { useContext } from "react";
import { TimerContext, type ITimerContext } from "../contexts/TimerContext"

export const useTimer = () => {
  const { state: timerConfig, dispatch: setTimerConfig } = useContext(TimerContext) as ITimerContext

  return [timerConfig, setTimerConfig];
}
