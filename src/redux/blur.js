export const actionType = {
  SET_BLUR: "SET_BLUR",
};

export const initialState = {
  blurState: false,
};

const blur = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_BLUR:
      return !state;
    default:
      return state;
  }
};

export default blur;
