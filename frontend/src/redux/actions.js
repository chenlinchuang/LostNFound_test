import { FILL_BRIEF_INTRO, FILL_LOCATION, SELECT_TIME } from "./action-types";

export const fillTitle = (payload) => {
  return { type: FILL_BRIEF_INTRO, payload };
};

export const fillLocation = (payload) => {
  return { type: FILL_LOCATION, payload };
};

export const selectTime = (payload) => {
  return { type: SELECT_TIME, payload };
};
