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
        className="flex justify-center relative rounded-md cursor-pointer"
      >
        <div className="w-[45%] h-[40vh] ">
          <img className="w-full h-full" src={item.cover_image} alt="" />
        </div>
        <div className="fadout"></div>
        <div className="w-[55%] text-white pl-20 z-20 flex flex-col justify-between">
          <div>
            {item.gym_name && (
              <h1 className="text-lg font-bold pt-5 ">{item.gym_name}</h1>
            )}
            <p>
              {item.address1}, {item.address2}
            </p>
            {item.duration_text && (
              <div className="flex space-x-2 items-center my-3">
                <FaLocationArrow className="text-green-700" />
                <p>
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
            <button className=" px-4 py-3 rounded-sm bg-red-700 font-bold ">
              Book Now
            </button>
          </div>
        </div>
      </div>}
      
    </div>
  );
};

export default GymCard;
