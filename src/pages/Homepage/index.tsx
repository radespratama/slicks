import { useContext } from "react";
import { HandPalm, Play } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";

import NewCycleForm from "../../components/NewCycleForm";
import Countdown from "../../components/Countdown";
import { CyclesContext } from "../../libs/context/CyclesContext";

import * as I from "./homepage.style";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Report the task"),
  minutesAmount: zod
    .number()
    .min(1, "The cycle must be at least 5 minutes")
    .max(60, "The cycle must be at least 60 minutes"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export default function Homepage() {
  const { createNewCycle, interruptCurrentCycle, activeCycle } =
    useContext(CyclesContext);
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <I.HomeContainer>
      <I.Form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        {activeCycle ? (
          <I.StopCountdownButton type="button" onClick={interruptCurrentCycle}>
            <HandPalm size={24} />
            Interrupt
          </I.StopCountdownButton>
        ) : (
          <I.StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Start
          </I.StartCountdownButton>
        )}
      </I.Form>
    </I.HomeContainer>
  );
}
