import React from "react";
import "./Gym.css";
import { FaLocationArrow } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GymCard = ({ item,terms }) => {
  const navigate = useNavigate();

  return (
    <div>
      {item && <div
        onClick={() => {
          navigate(`gym_details/${item.gym_name}`);
          localStorage.setItem("gym_id", item.user_id);
          localStorage.setItem("singleGym", JSON.stringify(item));
          localStorage.setItem('terms',JSON.stringify(terms))
        }}
        className="flex flex-col lg:flex-row justify-center relative rounded-md cursor-pointer"
      >
        <div className="w-[100%] lg:w-[45%] h-[40vh] ">
          <img className="w-full h-full opacity-50 lg:opacity-100" src={item.cover_image} alt="" />
        </div>
        <div className="fadout hidden lg:block"></div>
        <div className="w-full lg:w-[55%] text-white lg:pl-20 z-20 flex flex-col lg:justify-between px-2 absolute bottom-2 lg:static lg:px-0 ">
          <div>
            {item.gym_name && (
              <h1 className=" lg:text-lg font-semibold lg:font-bold pt-5 ">{item.gym_name}</h1>
            )}
            <p className="text-sm lg:text:md">
              {item.address1}, {item.address2}
            </p>
            {item.duration_text && (
              <div className="flex space-x-2 items-center my-3">
                <FaLocationArrow className="text-green-700" />
                <p className="text-sm lg:text:md">
                  {item.duration_text} away | {item.distance_text}
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-between py-2">
            <p
              className={`${
                item.plan_price ? "visible" : "invisible"
              } visible text-yellow-400`}
            >
              {" "}
              {`₹ ${item.plan_price} for ${item.plan_duration / 30} Months`}
            </p>
            <button className="px-2 lg:px-4 py-1 lg:py-3 rounded-sm bg-red-700 text-sm lg:text-md lg:font-bold ">
              Book Now
            </button>
          </div>
        </div>
      </div>}
      
    </div>
  );
};

export default GymCard;
