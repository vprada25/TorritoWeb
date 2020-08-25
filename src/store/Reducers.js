import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import reducerUser from "../services/user/userReducer";
import shoppingCarReducer from '../services/shoppingCar/reducer'

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    user: reducerUser,
    shoppingCar: shoppingCarReducer
  });

const rootReducer = (history) => {
  return (state, action) => {
    return appReducer(history)(state, action);
  };
};
export default rootReducer;
