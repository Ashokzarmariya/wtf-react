import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { gymReducer } from "./Gym/Reducer";

const rootReducer = combineReducers({
 gym:gymReducer
})

export const store = legacy_createStore(
 rootReducer, applyMiddleware(thunk)
)