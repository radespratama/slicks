import { useContext, useEffect } from "react";
import { differenceInSeconds } from "date-fns/esm";
import { CyclesContext } from "../../libs/context/CyclesContext";

import * as I from "./count.style";

export default function Countdown() {
  const {
    amountSecondsPassed,
    setSecondsPassed,
    activeCycle,
    markCurrentCycleAsFinished,
  } = useContext(CyclesContext);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    if (activeCycle) {
      document.title = `${activeCycle.task} | ${minutes}:${seconds}`;
    } else {
      document.title = "Slicks - Pomodoro App";
    }
  }, [activeCycle, minutes, seconds]);

  useEffect(() => {
    let interval: any;
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate)
        );

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished();
          clearInterval(interval);
        } else {
          setSecondsPassed(secondsDifference);
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, totalSeconds, markCurrentCycleAsFinished, setSecondsPassed]);

  return (
    <I.CountdownContainer>
      <I.SpanText>{minutes[0]}</I.SpanText>
      <I.SpanText>{minutes[1]}</I.SpanText>
      <I.Seperator>:</I.Seperator>
      <I.SpanText>{seconds[0]}</I.SpanText>
      <I.SpanText>{seconds[1]}</I.SpanText>
    </I.CountdownContainer>
  );
}
