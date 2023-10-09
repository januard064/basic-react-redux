import { createStore } from "redux";
import { combineReducers } from "redux";

import counterReducer from "../counter/counter-reducer";
import arrayReducer from "../array/array-reducer";


const rootReducer = combineReducers({
    counterReducer,
    arrayReducer
})

export const store = createStore(rootReducer)