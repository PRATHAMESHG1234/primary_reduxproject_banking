import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import changeBalance from "./state/reducers/BalanceReducer";


const store = createStore(
   changeBalance,
applyMiddleware(thunk)
);

export default store