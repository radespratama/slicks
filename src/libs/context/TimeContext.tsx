import { differenceInSeconds } from "date-fns";
import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  createNewTimeAction,
  interruptCurrentTimeAction,
  markCurrentTimeAsFinishedAction,
} from "../reducers/times/actions";
import { Time, TimesState, timesReducer } from "../reducers/times/reducer";

interface CreateTimeData {
  task: string;
  minutesAmount: number;
}

interface TimesContextData {
  times: Time[];
  activeTime: Time | undefined;
  activeTimeId: string | null;
  markCurrentTimeAsFinished: () => void;
  amountSecondPassed: number;
  setSecondPassed: (seconds: number) => void;
  createNewTime: (data: CreateTimeData) => void;
  interruptCurrentTime: () => void;
}

interface TimesContextProviderProps {
  children: ReactNode;
}

export const TimesContext = createContext({} as TimesContextData);

const initialValue: TimesState = { times: [], activeTimeId: null };

function init(initialValue: TimesState) {
  const storedStateAsJSON = localStorage.getItem("@slick:times-state-1.0.0");
  if (storedStateAsJSON) {
    return JSON.parse(storedStateAsJSON);
  } else {
    return initialValue;
  }
}

export function TimesContextProvider({ children }: TimesContextProviderProps) {
  const [timesState, dispatch] = useReducer(timesReducer, initialValue, init);
  const { times, activeTimeId } = timesState;
  const activeTime = times.find((time) => time.id === activeTimeId);

  const [amountSecondPassed, setAmountSecondPassed] = useState(() => {
    if (activeTime) {
      return differenceInSeconds(new Date(), new Date(activeTime.startDate));
    } else {
      return 0;
    }
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(timesState);
    if (timesState.times.length !== 0) {
      localStorage.setItem("@slick:times-state-1.0.0", stateJSON);
    }
  }, [timesState]);

  function setSecondPassed(second: number) {
    setAmountSecondPassed(second);
  }

  function markCurrentTimeAsFinished() {
    dispatch(markCurrentTimeAsFinishedAction());
  }

  function createNewTime(data: CreateTimeData) {
    const id = String(new Date().getTime());
    const newTime: Time = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };
    dispatch(createNewTimeAction(newTime));
    setAmountSecondPassed(0);
  }

  function interruptCurrentTime() {
    dispatch(interruptCurrentTimeAction());
  }

  return (
    <TimesContext.Provider
      value={{
        times,
        activeTime,
        activeTimeId,
        markCurrentTimeAsFinished,
        amountSecondPassed,
        setSecondPassed,
        createNewTime,
        interruptCurrentTime,
      }}
    >
      {children}
    </TimesContext.Provider>
  );
}
