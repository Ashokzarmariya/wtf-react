/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState } from "react";
import Banner from "../Banner/Banner";
import GymCard from "./GymCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getGymByCity,
  getGymByPlaces,
  getPlaces,
  gymDetails,
  nearestGym,
} from "../../Redux/Gym/Action";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { AiOutlineSearch } from "react-icons/ai";

const Gyms = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { gym } = useSelector((store) => store);
  const [gyms, setGyms] = useState([]);
  const [singleGym, setSingleGym] = useState(null);
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState();
  const [location, setLocation] = useState();

  console.log("gyms", gym.nearestGym);
  const handleNearestGym = () => {
    dispatch(nearestGym());

    setGyms([]);
  };

  useEffect(() => {
    dispatch(getPlaces());
    dispatch(nearestGym());
  }, []);

  useEffect(() => {
    setPlaces(gym.places);
  }, [gym.places]);

  const handleGymDetail = (gymId) => {
    dispatch(gymDetails(gymId));
    console.log("working");
  };

  const handleLocation = (city) => {
    const temp = gym.places?.filter((item) => item.city === city);
    console.log("handleLocation", temp);
    setLocation(temp[0].addressComponent);
  };

  useEffect(() => {
    if (gym.places) {
      let temp = [];
      for (let i = 0; i < gym.places.length; i++) {
        temp.push(...gym.places[i].addressComponent);
      }
      setGyms(temp);
      setLoading(false);
    }
  }, [gym.places]);

  useEffect(() => {
    dispatch(getGymByCity(selectedCity));
  }, [selectedCity]);

  const handleSelectedCity = (city) => {
    setSelectedCity(city);
    handleLocation(city);
    setIsOpen(false);
  };

  return (
    <div
      onClick={() => {
        isOpen && setIsOpen(false);
      }}
    >
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
          <div className="text-white flex justify-between items-center">
            <h1 className="text-4xl font-bold">Filters</h1>
            <button
              onClick={() => {
                setSelectedCity(null);
                setLocation(null);
                setSingleGym(null);
              }}
              className={`${selectedCity ? "visible" : "invisible"} px-5 py-1 rounded-sm font-bold text-lg bg-red-700`}>Reset</button>
          </div>
          

          <div className="mt-10">
            <h2 className="tex-3xl font-bold text-white">Location</h2>
            <div className="relative">
              <input
                className="my-5 pl-9 py-3 rounded-md text-2xg border-2 bg-gray-700 border-gray-500 text-white"
                type="text"
                placeholder="Enter location"
              />
              <AiOutlineSearch className="absolute bottom-9 left-3 text-xl text-white" />
            </div>
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
          {location && (
            <div>
              <div>
                <h2 className="text-white text-lg font-semibold">Locations</h2>
              </div>
              <div className="bg-[#424242]   my-5 rounded-sm border-2 border-gray-500  w-[90%]">
                {gym.gymByCity?.map((item, index) => (
                  <p
                    onClick={() => setSingleGym(item)}
                    className={`${
                      index ? "border-t" : ""
                    } text-white  p-4 cursor-pointer`}
                  >
                    {item.address1}, {item.address2}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="gymScroll w-full px-3 lg:w-[70vw] mb-28 space-y-2 max-h-screen overflow-y-scroll">
          {singleGym ? (
            <GymCard
              item={singleGym}
              terms={gym.nearestGym.terms}
            />
          ) : selectedCity ? (
            gym.gymByCity?.map((item) => (
              <GymCard
                item={item}
                terms={gym.nearestGym.terms}
              />
            ))
          ) : (
            gym.nearestGym?.data.map((item) => (
              <GymCard
                key={item.user_id}
                item={item}
                terms={gym.nearestGym.terms}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Gyms;
