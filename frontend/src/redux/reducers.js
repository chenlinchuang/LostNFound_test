import {
  FILL_BRIEF_INTRO,
  FILL_LOCATION,
  SELECT_TIME,
  SELECT_CATEGORY,
} from "./action-types";

const initialState = {
  briefIntro: "",
  time: new Date(),
  location: "",
  catagory: "",
  description: "",
  pic: undefined,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_BRIEF_INTRO:
      return { ...state, briefIntro: action.payload };
    case FILL_LOCATION:
      return { ...state, location: action.payload };
    case SELECT_TIME:
      return { ...state, time: action.payload };
    case SELECT_CATEGORY:
      return { ...state, category: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
