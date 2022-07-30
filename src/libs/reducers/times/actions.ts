import { Time } from "./reducer";

export enum ActionTypes {
  CREATE_NEW_TIME = "CREATE_NEW_TIME",
  INTERRUPT_CURRENT_TIME = "INTERRUPT_CURRENT_TIME",
  MARK_CURRENT_TIME_AS_FINISHED = "MARK_CURRENT_TIME_AS_FINISHED",
}

export function createNewTimeAction(newTime: Time) {
  return {
    type: ActionTypes.CREATE_NEW_TIME,
    payload: {
      newTime,
    },
  };
}

export function markCurrentTimeAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_TIME_AS_FINISHED,
  };
}

export function interruptCurrentTimeAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_TIME,
  };
}
