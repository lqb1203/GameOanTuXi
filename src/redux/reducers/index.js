import { combineReducers } from "redux";
import userReducer from "./user";
import BaiTapOanTuXiReducer from "./BaiTapOanTuXiReducer";

const rootReducer = combineReducers({
  //combine child reducer
  userReducer,
  BaiTapOanTuXiReducer, //userReducer: userReducer
});

export default rootReducer;
