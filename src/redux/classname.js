export const actionType2 = {
  SET_CLASS: "SET_CLASS",
};

export const initialState = {
  class: "",
};

const classname = (state = initialState, action) => {
  switch (action.type) {
    case actionType2.SET_CLASS:
      return { ...state, class: action.class };
    default:
      return state;
  }
};

export default classname;
