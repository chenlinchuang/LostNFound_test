import {
  FILL_BRIEF_INTRO,
  FILL_LOCATION,
  SELECT_TIME,
  SELECT_CATEGORY,
  FILL_DESCRIPTION,
  FILL_CONTACT,
  SELECT_PICTURE,
} from "./action-types";

const initialState = {
  briefIntro: "",
  time: new Date(),
  location: "",
  catagory: "",
  description: "",
  contact: "",
  pic: undefined,
};

const foundReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_BRIEF_INTRO:
      return { ...state, briefIntro: action.payload };
    case FILL_LOCATION:
      return { ...state, location: action.payload };
    case SELECT_TIME:
      return { ...state, time: action.payload };
    case SELECT_CATEGORY:
      return { ...state, category: action.payload };
    case FILL_DESCRIPTION:
      return { ...state, description: action.payload };
    case FILL_CONTACT:
      return { ...state, contact: action.payload };
    case SELECT_PICTURE:
      return { ...state, pic: action.payload };
    default:
      return state;
  }
};

export default foundReducer;
