import { useContext } from "react";
import { useFormContext } from "react-hook-form";

import { TimesContext } from "../../libs/context/TimeContext";

import * as I from "./time.style";

export function NewTimeForm() {
  const { activeTime } = useContext(TimesContext);
  const { register } = useFormContext();

  return (
    <I.FormContainer>
      <label htmlFor="task">I will do</label>
      <I.TaskInput
        type="text"
        id="task"
        list="task-suggestions"
        placeholder="What do you want to do?"
        disabled={!!activeTime}
        {...register("task")}
      />
      <datalist id="task-suggestions">
        <option value="To do 1" />
        <option value="To do 2" />
        <option value="To do 3" />
        <option value="To do 4" />
      </datalist>
      <label htmlFor="minutesAmount">during</label>
      <I.MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeTime}
        {...register("minutesAmount", {
          valueAsNumber: true,
        })}
      />
      <span>minutes.</span>
    </I.FormContainer>
  );
}
