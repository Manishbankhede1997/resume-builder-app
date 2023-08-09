import { TYPE } from "./Actions";
const initialstate = {
  templeteId: "",
};

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case TYPE.TemplateId:
      return { ...state, templeteId: action.payload };
    default:
      return state;
  }
};
