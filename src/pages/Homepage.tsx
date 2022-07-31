import { useContext } from "react";
import { HandPalm, Play } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { FormProvider, useForm } from "react-hook-form";

import { NewTimeForm } from "../components/NewTimeForm";
import { Countdown } from "../components/Countdown";
import { TimesContext } from "../libs/context/TimeContext";

import * as I from "./pages.style";

const newTimeFormValidationSchema = zod.object({
  task: zod.string().min(1, "Task is required"),
  minutesAmount: zod
    .number()
    .min(1, "The cycle must be at least 5 minutes")
    .max(60, "The cycle must be at least 60 minutes"),
});

type NewTimeFormData = zod.infer<typeof newTimeFormValidationSchema>;

export default function Homepage() {
  const { createNewTime, interruptCurrentTime, activeTime } =
    useContext(TimesContext);

  const newTimeForm = useForm<NewTimeFormData>({
    resolver: zodResolver(newTimeFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newTimeForm;
  function handleCreateNewTime(data: NewTimeFormData) {
    createNewTime(data);
    reset();
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  return <div>Homepage</div>;
}
