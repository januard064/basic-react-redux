import { createStore } from "redux";
import { combineReducers } from "redux";

import counterReducer from "../counter/counter-reducer";
import arrayReducer from "../array/array-reducer";
import fakeStoreReducer from "../fake-store/fake-store-reducer";


const rootReducer = combineReducers({
    counterReducer,
    arrayReducer,
    fakeStoreReducer
})

export const store = createStore(rootReducer)