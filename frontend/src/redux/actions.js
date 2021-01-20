import {
  FILL_BRIEF_INTRO,
  FILL_LOCATION,
  SELECT_TIME,
  SELECT_CATEGORY,
  FILL_DESCRIPTION,
  FILL_CONTACT,
  SELECT_PICTURE,
} from "./action-types";

export const fillTitle = (payload) => {
  return { type: FILL_BRIEF_INTRO, payload };
};

export const fillLocation = (payload) => {
  return { type: FILL_LOCATION, payload };
};

export const selectTime = (payload) => {
  return { type: SELECT_TIME, payload };
};

export const selectCategory = (payload) => {
  return { type: SELECT_CATEGORY, payload };
};

export const fillDescription = (payload) => {
  return { type: FILL_DESCRIPTION, payload };
};

export const fillContact = (payload) => {
  return { type: FILL_CONTACT, payload };
};

export const selectPicture = (payload) => {
  return { type: SELECT_PICTURE, payload };
};
