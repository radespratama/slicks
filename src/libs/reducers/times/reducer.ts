import { ActionTypes } from "./actions";
import { produce } from "immer";

export interface Time {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

export interface TimesState {
  times: Time[];
  activeTimeId: string | null;
}

export function timesReducer(state: TimesState, action: any) {
  switch (action.type) {
    case ActionTypes.CREATE_NEW_TIME:
      return produce(state, (draft) => {
        draft.times.push(action.payload.newTime);
        draft.activeTimeId = action.payload.newTime.id;
      });

    case ActionTypes.INTERRUPT_CURRENT_TIME: {
      const currentTimeIndex = state.times.findIndex((time) => {
        return time.id === state.activeTimeId;
      });
      if (currentTimeIndex < 0) {
        return state;
      }
      return produce(state, (draft) => {
        draft.activeTimeId = null;
        draft.times[currentTimeIndex].interruptedDate = new Date();
      });
    }
    case ActionTypes.MARK_CURRENT_TIME_AS_FINISHED: {
      const currentTimeIndex = state.times.findIndex((time) => {
        return time.id === state.activeTimeId;
      });
      if (currentTimeIndex < 0) {
        return state;
      }
      return produce(state, () => {
        state.activeTimeId = null;
        state.times[currentTimeIndex].finishedDate = new Date();
      });
    }
    default:
      return state;
  }
}
