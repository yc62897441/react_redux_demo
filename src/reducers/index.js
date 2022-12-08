import CounterReducer from "./Counter";
import NamerReducer from './Namer'
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: CounterReducer,
    namer: NamerReducer,
})

export default allReducers;