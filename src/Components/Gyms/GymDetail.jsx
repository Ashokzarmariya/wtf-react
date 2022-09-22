/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { gymDetails } from "../../Redux/Gym/Action";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import Service from "../Service/Service";
import Plan from "./Plan";
import './Plan.css'

let hasMap = new Map();
let btn = new Map();
const GymDetail = () => {
  const dispatch = useDispatch();
  const gymId = localStorage.getItem("gym_id");
  const gym = JSON.parse(localStorage.getItem("singleGym"));
  const terms = JSON.parse(localStorage.getItem("terms"));
 const navigate = useNavigate();

 const { plans } = useSelector((store) => store.gym);


 

  useEffect(() => {
    dispatch(gymDetails(gymId));
  }, [gymId]);
 
 // making dynamic bg color of plan card
 useEffect(() => {
  let count=1
  for (let i = 0; i < plans?.length; i++){
   
   if (count === 1) {
    hasMap.set(i, "first")
    btn.set(i,"firstButton")
   }
   else if (count === 2) {
    hasMap.set(i, 'second');
    btn.set(i, "secondButton");
   }
   else if (count === 3) {
    hasMap.set(i, 'third');
    btn.set(i,"thirdButton")
   }
   else {
    hasMap.set(i, "fourth")
    btn.set(i,"fourthButton")
   }
   
   if (count < 4)
    count++
   else count=1
  }
  console.log("--", hasMap.get(5))
  console.log("plan")
 },[plans])

  return (
    <div className="text-white">
      <div className="">
        <Carousel data={gym.gallery} />
        <div
          onClick={() => navigate(-1)}
          className="absolute top-10 text-xl font-bold flex items-center space-x-2 cursor-pointer"
        >
          <IoChevronBackOutline />
          <p className="">Back</p>
        </div>
      </div>
      <div className="px-10 py-14">
        <div className="flex justify-between">
          <h1 className="text-5xl font-bold">{gym.gym_name}</h1>
          <div className="text-white text-2xl flex flex-col items-center bg-[#c50000] py-3 px-8">
            <div className="flex space-x-4">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>

            <p>115</p>
          </div>
        </div>
        <div className="flex space-x-1 items-center text-2xl">
          <IoLocationOutline />
          <h2>
            {" "}
            {gym.address1}, {gym.address2}
          </h2>
        </div>
        <div className="flex py-10">
          {/* left side */}
          <div className="w-[50%] pr-5">
            <h3 className="text-3xl font-semibold">Description</h3>
            <p className="py-5 text-lg">{gym.description}</p>
            <div className="py-10">
              <h3 className="text-3xl font-semibold py-3">Facillities</h3>
              <div className="flex space-x-2 flex-wrap ">
                {gym.benefits.map((item) => (
                  <p>{item.name}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-semibold py-3">
                Why to choose WTF?
              </h3>

              <div className="flex flex-wrap ">
                {terms.map((item) =>
                  item.name ? <Service name={item.name} img={item.icon} /> : ""
                )}
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="w-[50%] bg-[#2e2e2e] rounded-lg">
            <h1 className="text-3xl font-bold text-center py-5">
              Choose Membership
            </h1>
            <div className="p-10 space-y-3">
              {plans?.map((item, index) => 
              {
               // if (count <= 4)
               //  setCount(count + 1);
               // else setCount(1);
               return <Plan
                key={item.plan_uid}
                  plan_price={item.plan_price}
                  name={item.plan_name}
                  bgClass={hasMap.get(index)}
                planNumber={index + 1}
                btnClass={btn.get(index)}
                />}
              )}

            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymDetail;
