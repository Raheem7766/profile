import React from "react";
import Gradient from "../assets/Gradient.png";
import Work1 from "../assets/Work1.png";
import Work2 from "../assets/Work2.png";
import Work3 from "../assets/Work3.png";
import Work4 from "../assets/Work4.png";

export default function Experience() {
  const works = [Work1, Work2, Work3, Work4];

  return (
    <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto mt-[6rem] md:mt-[8rem] relative">
      <h2 className="text-[26px] md:text-[30px] font-medium text-white mb-6">
        Work Experience
      </h2>

      <div className="relative flex flex-col items-center justify-center">
        {/* Background Gradient */}
        <img
          src={Gradient}
          alt=""
          className="h-[45rem] absolute top-[10rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 opacity-60"
        />

        {/* Work Cards */}
        <div className="w-full flex flex-wrap justify-between gap-5 md:gap-6">
          {works.map((work, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] h-auto bg-[#2C1250] rounded-[10px] border-4 border-[#2C1250] border-t-[#693B93] flex flex-col sm:flex-row items-center sm:items-start gap-5 p-6 hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Image */}
              <div className="flex justify-center sm:justify-start w-full sm:w-auto">
                <img src={work} alt={`Work ${index + 1}`} className="w-[80%] sm:w-auto" />
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <h3 className="text-white text-[22px] md:text-[26px] font-normal mb-1">
                  CIB on the Mobile
                </h3>
                <p className="text-white text-[13px] md:text-[12px] font-normal mb-3 max-w-[300px]">
                  Take your client onboard seamlessly with our amazing digital onboarding tool.
                </p>
                <button className="border-2 border-[#693B93] rounded-[6px] bg-[#2C1250] text-white text-[10px] py-[6px] px-5">
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
