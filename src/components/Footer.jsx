import React from 'react';
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { LiaFacebookMessenger } from "react-icons/lia";

const Footer = () => {
  return (
    <div>
        <div className="bg-green-300">
            <h2 className="text-3xl font-thin">FOLLOW US</h2>
        <div className="p-14">
        <div className="flex justify-between items-start">
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <LiaFacebookMessenger className="text-3xl" />
        </a>
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <FaInstagram className="text-3xl" /></a>
    <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <FaTwitter className="text-3xl" /></a>
    <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <BsTwitterX className="text-3xl" /></a>
    
    </div>
    </div>
    </div>
    </div>
  )
}

export default Footer