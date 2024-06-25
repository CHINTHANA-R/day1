import React from 'react';
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { LiaFacebookMessenger } from "react-icons/lia";


const Header = () => {
  return (
    <div className="p-5">
  <div className="flex justify-end items-end bg-white space-x-4">
    <LiaFacebookMessenger className="text-3xl" />
    <FaInstagram className="text-3xl" />
    <FaTwitter className="text-3xl" />
    <BsTwitterX className="text-3xl" />

  </div>
</div>
    
  )
}

export default Header