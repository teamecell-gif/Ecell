'use client'

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";

const Flagship = () => {
  useEffect(() => {
    // Redirect to the external URL
    window.location.href = "https://flagship.ecellvnit.org";
  }, []);

  return (
    <div>
      {/* <Navbar />
      <div className="bg-[#0C0C0C] pt-10 pb-36">
        <div className="flex flex-col gap-3 items-center justify-center text-5xl xl:text-6xl font-semibold">
          <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">Flagship</span>
          <svg className="px-5" width="450" height="1" viewBox="0 0 580 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="580" y2="0.5" stroke="url(#paint0_linear_11_3)" />
            <defs>
              <linearGradient id="paint0_linear_11_3" x1="622.006" y1="1" x2="-40.7939" y2="0.999999" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="0.501042" stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex justify-center items-center h-screen text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Coming Soon!!!</div>
      </div>
      <div className="pt-10 bg-black">
        <Footer />
      </div> */}
    </div>
    
  );
};

export default Flagship;
