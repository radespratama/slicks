import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../libs/context/CyclesContext";

import * as I from "./cycle.style";

export default function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <I.FormContainer>
      <label htmlFor="task">I will work on</label>
      <I.TaskInput
        type="text"
        id="task"
        placeholder="Give your project name"
        disabled={!!activeCycle}
        {...register("task")}
        autoComplete="off"
      />

      <label htmlFor="minutesAmount">During</label>
      <I.MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        autoComplete="off"
        {...register("minutesAmount", {
          valueAsNumber: true,
        })}
      />

      <span>minutes.</span>
    </I.FormContainer>
  );
}
