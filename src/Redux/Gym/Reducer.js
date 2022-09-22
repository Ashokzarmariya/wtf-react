import { GET_GYM_BY_CITY, GET_PLACES, NEAREST_GYM, PLANS } from "./ActionType"

const initialState = {
 places: [],
 nearestGym: null,
 plans: null,
 gymByCity:null
}
export const gymReducer = (store = initialState, { type, payload }) => {
 if (type === GET_PLACES) {
  return {...store, places:payload}
 }
 else if (type === NEAREST_GYM) {
  return {...store, nearestGym:payload}
 }
 else if (type === PLANS) {
  return {...store, plans:payload}
 }
 else if (type === GET_GYM_BY_CITY) {
  return {...store, gymByCity:payload}
 }

 return store
}