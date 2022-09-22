import { GET_PLACES, GYM_DETAILS, NEAREST_GYM } from "./ActionType";

export const nearestGym = () => async(dispatch) => {
  const res = await fetch(`https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&amp&long=78.0042384802231`)
  const data = await res.json();
  console.log(data.data)
  dispatch({type:NEAREST_GYM, payload:data.data})
}

export const getGymByPlaces = () => async(dispatch) => {
// https://devapi.wtfup.me/gym/places
  const res = await fetch(`https://api.wtfup.me/gym/places`)
  const data = await res.json();
  console.log("getGyms by places",data.data)
  dispatch({type:GET_PLACES, payload:data.data})

}

export const gymDetails = (gymId) => async(dispatch) => {

  const res = await fetch(`https://api.wtfup.me/gym/plan`, {
    method: "POST",
   headers: {
     "Content-Type": "application/json",
   },
   body: JSON.stringify({"gym_id":gymId}),
  })
  const data = await res.json();
  console.log("gym detail",data,"----", gymId)
  dispatch({type:GYM_DETAILS, payload:data})

}