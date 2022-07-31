import { useEffect, useContext } from "react";
import { differenceInSeconds } from "date-fns/esm";
import { TimesContext } from "../../libs/context/TimeContext";

import * as I from "./count.style";

export function Countdown() {
  const {
    amountSecondPassed,
    setSecondPassed,
    activeTime,
    markCurrentTimeAsFinished,
  } = useContext(TimesContext);

  const totalSeconds = activeTime ? activeTime.minutesAmount * 60 : 0;
  const currentSeconds = activeTime ? totalSeconds - amountSecondPassed : 0;
  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    if (activeTime) {
      document.title = `Slick - ${activeTime.task} | ${minutes}:${seconds}`;
    } else {
      document.title = "Slick - Pomodoro App";
    }
  }, [activeTime, minutes, seconds]);

  useEffect(() => {
    let interval: any;
    if (activeTime) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeTime.startDate)
        );

        if (secondsDifference >= totalSeconds) {
          markCurrentTimeAsFinished();
          clearInterval(interval);
        } else {
          setSecondPassed(secondsDifference);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [activeTime, totalSeconds, markCurrentTimeAsFinished, setSecondPassed]);

  return (
    <I.CountdownContainer>
      <I.CountdownValue>{minutes[0]}</I.CountdownValue>
      <I.CountdownValue>{minutes[1]}</I.CountdownValue>
      <I.Seperator>:</I.Seperator>
      <I.CountdownValue>{seconds[0]}</I.CountdownValue>
      <I.CountdownValue>{seconds[1]}</I.CountdownValue>
    </I.CountdownContainer>
  );
}
