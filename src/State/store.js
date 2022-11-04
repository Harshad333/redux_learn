import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Redusers from "./Redusers";


export const store = createStore(Redusers,{},applyMiddleware(thunk))