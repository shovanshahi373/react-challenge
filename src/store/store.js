import { createStore } from "redux";
import reducer from "../common/reducers";

const initialstate = {
  isDark: false,
  user: {},
};

export default createStore(reducer, initialstate);
