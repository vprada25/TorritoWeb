import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import reducerUser from "../services/user/userReducer";


const appReducer = history =>
  combineReducers({
    router: connectRouter(history),
   user:reducerUser
  });

const rootReducer = history => {
  return (state, action) => {
    return appReducer(history)(state, action);
  };
};
export default rootReducer;
