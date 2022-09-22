import { GET_PLACES, GYM_DETAILS, NEAREST_GYM } from "./ActionType"

const initialState = {
 places: [],
 nearestGym: null,
 gymDetail:null
}
export const gymReducer = (store = initialState, { type, payload }) => {
 if (type === GET_PLACES) {
  return {...store, places:payload}
 }
 else if (type === NEAREST_GYM) {
  return {...store, nearestGym:payload}
 }
 else if (type === GYM_DETAILS) {
  return {...store, gymDetail:payload}
 }

 return store
}