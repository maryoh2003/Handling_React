import { combineReducers } from "redux";
import counter from "./counter";

const rootReduser = combineReducers({
  counter
});

export default rootReduser;
