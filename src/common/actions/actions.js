import constants from "./constants";

export const toggleThemeAction = () => {
  return {
    type: constants.TOGGLE_THEME,
  };
};

export const updateUserAction = (value) => {
  return {
    type: constants.UPDATE_USER,
    payload: value,
  };
};

export const setGlobalAction = (value) => {
  return {
    type: constants.SET_FROM_STORAGE,
    payload: value,
  };
};
