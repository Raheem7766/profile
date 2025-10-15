import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto mt-[6rem] mb-20 text-center lg:text-left">
      {/* Book Appointment Button */}
      <div className="flex justify-center mb-8">
        <Link to="/contact-form">
          <button className="border-2 border-[#7127BA] rounded-[16px] bg-gradient-to-r from-[#25104a] via-[#2b0b3a] to-[#483670] text-white text-[16px] font-semibold py-[12px] px-8 hover:bg-gradient-to-r hover:from-[#7127BA] hover:to-[#9857D3] hover:border-[#9857D3] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7127BA]/30">
            Book Appointment
          </button>
        </Link>
      </div>

      {/* Heading */}
      <h2 className="text-[24px] sm:text-[28px] lg:text-[30px] font-medium text-white mb-3">
        Contact
      </h2>

      {/* Paragraph */}
      <p className="text-white text-[15px] sm:text-[16px] font-normal lg:w-[66%] mx-auto lg:mx-0 leading-relaxed">
        I'm currently looking to join a cross-functional team that values improving people's lives
        through accessible design. Or have a project in mind? Let's connect.
      </p>

      {/* Email */}
      <p className="text-[#FFFFFF] mt-6 text-[15px] sm:text-[16px]">
        ibrhaimmemon930@gmail.com
      </p>

      {/* Social Icons */}
      <div className="flex justify-center lg:justify-start text-white gap-5 mt-6 text-[22px]">
        <FaInstagram className="hover:text-[#E1306C] transition-all duration-300 cursor-pointer" />
        <FaDribbble className="hover:text-[#EA4C89] transition-all duration-300 cursor-pointer" />
        <FaGoogle className="hover:text-[#DB4437] transition-all duration-300 cursor-pointer" />
      </div>
    </div>
  );
}
