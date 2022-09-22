import { GET_GYM_BY_CITY, GET_PLACES, NEAREST_GYM, PLANS } from "./ActionType";

export const nearestGym = () => async(dispatch) => {
  const res = await fetch(`https://api.wtfup.me/gym/nearestgym?lat=30.325488815850512&amp&long=78.0042384802231`)
  const data = await res.json();
  console.log("nearest gym",data)

  dispatch({type:NEAREST_GYM, payload:data})
}

export const getPlaces = () => async(dispatch) => {
// https://devapi.wtfup.me/gym/places
  const res = await fetch(`https://api.wtfup.me/gym/places`)
  const data = await res.json();
  console.log("places",data.data)
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

  dispatch({type:PLANS, payload:data.data})

}

export const getGymByCity = (city) => async(dispatch) => {
  const res = await fetch(`https://api.wtfup.me/gym/nearestgym?lat=30.325488815850512&amp&long=78.0042384802231&city=${city}`)
  const data = await res.json();
  console.log("gym by city", data.data)

  dispatch({type:GET_GYM_BY_CITY, payload:data.data})
}

// https://api.wtfup.me/gym/nearestgym?lat=30.325488815850512&amp&long=78.0042384802231&city=Noida