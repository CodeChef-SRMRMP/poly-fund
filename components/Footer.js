<<<<<<< HEAD
import { GoLocation } from "react-icons/go";
import Image from "next/image";
    import React from "react";
    import {
      AiOutlinePhone,
      AiOutlineMail,
      AiOutlineCalendar,
      AiOutlineInstagram,
      AiOutlineFacebook,
      AiOutlineTwitter,
    } from "react-icons/ai";
    
=======
const Footer = () => {
  return <div></div>
}
>>>>>>> ccf30eee045c2a26bf564960b976777bfad6664f

export const Footer = () => {
      return (
        <div className="bg-[#1976d2] text-white pt-10">
          <div className="text-white w-screen  flex flex-col space-y-5 lg:space-y-0 text-center lg:text-left lg:flex-row justify-evenly items-center lg:items-stretch">
            <div className="space-y-2">
              <h1 className="text-xl font-bold">CONTACT US</h1>
              <div className="flex space-x-2">
                <AiOutlinePhone className="text-primary w-5 h-5" />
                <p>+91 9868757238</p>
              </div>
              <div className="flex space-x-2">
                <AiOutlineMail className="text-primary w-5 h-5" />
                <p>sarthak2002tyagi@gmail@gmail.com</p>
              </div>
            </div>
            <div className="space-y-2 hidden md:block">
              <h1 className="text-xl font-bold">OUR SERVICES</h1>
              <p>Fund Raisal </p>
              <p>Donation</p>
              <p>Redeem Tokens</p>
            </div>
            <div className="space-y-2 hidden md:block">
              <h1 className="text-xl font-bold">ABOUT US</h1>
              <p>About</p>
              <p>Contact Us</p>
              <p>Provide Feedback</p>
            </div>
          </div>
          <div className="w-[90%] rounded-md mx-auto h-1 bg-primary mt-5" />
          <div className="flex flex-col lg:flex-row text-center lg:text-left items-center space-y-2 lg:space-y-0 justify-evenly p-5">
            <p className="text-lg font-bold">
              © 2019, Poly-Fund. All Rights Reserved.
            </p>
            <div className="flex space-x-3">
              <AiOutlineInstagram className="md:hover:scale-75 md:cursor-pointer duration-300 ease-out w-8 h-8 text-primary" />
              <AiOutlineFacebook className="md:hover:scale-75 md:cursor-pointer duration-300 ease-out w-8 h-8 text-primary" />
              <AiOutlineTwitter className="md:hover:scale-75 md:cursor-pointer duration-300 ease-out w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
      );
    };
    
  
  
  export default Footer;