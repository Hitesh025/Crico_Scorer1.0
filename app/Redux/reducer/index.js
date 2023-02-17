import { combineReducers } from "redux";
// import internetReducer from "./internetReducer";
import userInfoReducer from "./userReducer";
// import  CartReducer  from "./cartReducer";
import playerInfoReducer from "./playerReducer";

export default combineReducers({
    // internetReducer,
    userInfoReducer,
    playerInfoReducer,
})