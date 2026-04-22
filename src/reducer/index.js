import { combineReducers } from "redux";
import { themeReducer } from "./themeReducer";
import { CounterReducer } from "./CounterReducer";

let rootReducer = combineReducers({
    themeReducer: themeReducer,
    CounterReducer: CounterReducer,
});

export default rootReducer;