import { combineReducers } from "redux";
import amountReduserHandle from './amountReduserHandle';

const reducers = combineReducers({
    amount: amountReduserHandle
})

export default reducers;