import constants from "../actions/constants";

const reducer = (state, action) => {
  switch (action.type) {
    case constants.TOGGLE_THEME:
      return {
        ...state,
        isDark: !state.isDark,
      };

    case constants.UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };

    case constants.SET_FROM_STORAGE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
