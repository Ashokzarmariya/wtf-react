import React from "react";
import { useState } from "react";
import Banner from "../Banner/Banner";
import GymCard from "./GymCard";
import { useDispatch, useSelector } from "react-redux";
import { getGymByPlaces, gymDetails, nearestGym } from "../../Redux/Gym/Action";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";

const Gyms = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { gym } = useSelector((store) => store);
  const [gyms, setGyms] = useState([]);
 const [selectedCityGym, setSelectedCityGym] = useState(null);
 const [loading, setLoading] = useState(true);

  console.log("all gym", gyms);
  const handleNearestGym = () => {
    dispatch(nearestGym());
   setSelectedCityGym(null);
   setGyms([])
  };

  useEffect(() => {
    dispatch(getGymByPlaces());
  }, []);

  useEffect(() => {}, [gym.places]);

  const handleGymDetail = (gymId) => {
    dispatch(gymDetails(gymId));
    console.log("working");
  };

  useEffect(() => {
   
   if (gym.places) {
    let temp=[]
    for (let i = 0; i < gym.places.length; i++){
     temp.push(...gym.places[i].addressComponent)
     
    }
    setGyms(temp)
    setLoading(false)
   }
  }, [gym.places]);

  const handleSelectedCity = (city) => {
    setSelectedCity("New Delhi");
    setIsOpen(false);

    if (gym.places) {
      const x = gym.places.filter((item) => item.city === city);
      console.log(
        x[0].addressComponent[0],
        selectedCity,
        "selected city",
        gyms
      );
     if (x) {
      setSelectedCityGym(x[0].addressComponent);
      setGyms(null)
     }
    }

    console.log(gym.places, "selectedCityGym", selectedCityGym);
  };

  return (
   <div>
 
      <div>
        <Banner />
      </div>

      <div className="px-10 py-10">
        <input
          className="outline-none py-4 border-2 rounded-md w-full pl-10 bg-black text-white border-white"
          type="text"
          placeholder="search gym name hear..."
        />
      </div>
      <div className="px-10 lg:flex justify-center">
        <div className="w-full px-3 lg:px-0 lg:w-[30vw] ">
          <h1 className="text-4xl font-bold text-white">Filters</h1>

          <div className="mt-10">
            <h2 className="tex-3xl font-bold text-white">Nearest Gym</h2>
            <button
              onClick={handleNearestGym}
              className="my-5 px-4 py-3 rounded-md text-2xg border-2 bg-gray-700 border-gray-500 text-gray-400 font-bold"
            >
              GYM NEAREST ME
            </button>
          </div>

          <div>
            <h2 className="tex-3xl font-bold text-white">Cities</h2>
            <p
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="my-5 px-4 py-3 rounded-md text-2xg border-2 bg-gray-700 border-gray-500 text-gray-400 font-bold w-[90%] cursor-pointer"
            >
              {`${selectedCity ? selectedCity : "Select City"}`}
            </p>

            {isOpen && (
              <div className="bg-[#424242] text-gray-200  w-[90%] space-y-2 rounded-sm">
                <p
                  onClick={() => {
                    handleSelectedCity("Delhi");
                  }}
                  className="p-3 hover:bg-[#2d2d2d] w-full cursor-pointer"
                >
                  Delhi
                </p>
                <p
                  onClick={() => {
                    handleSelectedCity("New Delhi");
                  }}
                  className="p-3 hover:bg-[#2d2d2d] w-full cursor-pointer"
                >
                  New Delhi
                </p>
                <p
                  onClick={() => {
                    handleSelectedCity("Ghaziabad");
                  }}
                  className="p-3 hover:bg-[#2d2d2d] w-full cursor-pointer"
                >
                  Ghaziabad
                </p>
                <p
                  onClick={() => {
                    handleSelectedCity("Noida");
                  }}
                  className="p-3 hover:bg-[#2d2d2d] w-full cursor-pointer"
                >
                  Noida
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="w-full px-3 lg:w-[70vw] mb-28 space-y-2 max-h-screen overflow-y-scroll">
          {selectedCityGym?.map((item) => (
            <GymCard
              handleGymDetail={() => handleGymDetail(item.user_id)}
              distance_text={item.distance_text}
              duration_text={item.duration_text}
              adress1={item.address1}
              adress2={item.address2}
              gymName={item.gym_name}
              gymImg={"https://source.unsplash.com/random/?gym"}
            />
          ))}
          { !selectedCityGym &&
            gym.nearestGym &&
            gym.nearestGym?.map((item) => (
              <GymCard
                handleGymDetail={() => handleGymDetail(item.user_id)}
                distance_text={item.distance_text}
                duration_text={item.duration_text}
                adress1={item.address1}
                adress2={item.address2}
                gymName={item.gym_name}
                gymImg={"https://source.unsplash.com/random/?gym"}
              />
            ))}

          {  gyms?.map((item) => (
              <GymCard
                handleGymDetail={() => handleGymDetail(item.user_id)}
                distance_text={item.distance_text}
                duration_text={item.duration_text}
                adress1={item.address1}
                adress2={item.address2}
                gymName={item.gym_name}
                gymImg={"https://source.unsplash.com/random/?gym"}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Gyms;
