import React from "react";
import { MdLocationOn } from 'react-icons/md'
import { IoIosCall } from 'react-icons/io'
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between space text-white">
      <div className="flex flex-col items-center space-y-10">
        <img src="https://wtfup.me/apple-icon-72x72.png" alt="" />
        <div className="flex space-x-5">
          
          <span className="p-3 bg-white rounded-full">
            <AiOutlineInstagram className="text-red-700" />

          </span>
          
          <span className="p-3 bg-white rounded-full">
            <FaFacebookF className="text-blue-900" />

          </span>
          <span className="p-3 bg-white rounded-full">
<GrLinkedinOption className="text-blue-900"/>
          </span>
          
        </div>
      </div>
      <div className="space-y-5">
        <h1 className="text-lg font-bold">Quick Links</h1>

        <div className="space-y-3">
          <p className="font-semibold text-gray-600 text-lg">About</p>
          <p className="font-semibold text-gray-600 text-lg">FAQS</p>
          <p className="font-semibold text-gray-600 text-lg">Privacy Policy</p>
          <p className="font-semibold text-gray-600 text-lg">WTF nn News</p>
          <p className="font-semibold text-gray-600 text-lg">
            Terms And Conditions
          </p>
          <p className="font-semibold text-gray-600 text-lg">
            Terms And Cancellation
          </p>
        </div>
      </div>
      <div className="space-y-5">
        <h1 className="text-lg font-bold ">Explore</h1>
        <div className="space-y-3 text-gray-500 text-lg">
          <p className="font-semibold ">Arinas</p>
          <p className="font-semibold ">Studios</p>
          <p className="font-semibold ">Nutrition</p>
        </div>
      </div>
      <div className="space-y-5">
        {" "}
        <h1 className="text-lg font-bold">Contact</h1>
        <div className="space-y-3 text-gray-500 font-semibold">
      <div className="flex space-x-5 items-start">
       <MdLocationOn className="tex-xl text-white"/>
            <p className="w-56">
              Ro: S 1502, Amrapali Silicon city, Sector 76, Noida, Uttar
              Pradesh, India
            </p>
          </div>

      <div className="flex space-x-5">
      <MdLocationOn className="tex-xl text-white"/>
            <p className="w-56">
              Ho: C-86 B, Ground Floor, Sector 8, Noida, Uttar Pradesh, India
            </p>
          </div>
      <div className="flex space-x-5">
      <IoIosCall className="tex-xl text-white"/>
            <p>+919090639005</p>
          </div>
      <div className="flex space-x-5 items-center">
      <AiOutlineMail className="tex-xl text-white"/>
            <p>support@wtfup.me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
