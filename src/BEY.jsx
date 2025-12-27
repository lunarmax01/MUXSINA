import React from "react";
import NAVBAR from "./BEY/Navbar";
import HeroSection from "./BEY/HeroSection";
import MemoriesSection from "./BEY/MemoriesSection";
import GraphSection from "./BEY/GraphSection";
import Footer from "./BEY/footer";

const BEY = () => {
  return (
    // ❗ h-screen o‘rniga min-h-screen
    <div className="relative w-screen min-h-screen pb-[30px] overflow-x-hidden ">
      
      {/* Background */}
<div className="fixed inset-0 w-full h-full bg-black -z-10 pointer-events-none">

  {/* Static top-left */}
  <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl">
    <div className="absolute inset-0 rounded-full border-8 border-transparent bg-gradient-to-r from-blue-700 via-green-400 to-blue-700 p-[2px]">
      <div className="w-full h-full rounded-full bg-green-600 blur-3xl"></div>
    </div>
  </div>

  {/* Static bottom-right */}
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl">
    <div className="absolute inset-0 rounded-full border-8 border-transparent bg-gradient-to-r from-blue-700 via-green-400 to-blue-700 p-[2px]">
      <div className="w-full h-full rounded-full bg-green-600 blur-3xl"></div>
    </div>
  </div>

  {/* Animated circles */}
  <div className="absolute w-[400px] h-[400px] rounded-full blur-3xl animate-move1">
    <div className="absolute inset-0 rounded-full border-8 border-transparent bg-gradient-to-r from-blue-700 via-green-400 to-blue-700 p-[2px]">
      <div className="w-full h-full rounded-full bg-green-600 blur-3xl"></div>
    </div>
  </div>

  <div className="absolute w-[400px] h-[400px] rounded-full blur-3xl animate-move2">
    <div className="absolute inset-0 rounded-full border-8 border-transparent bg-gradient-to-r from-blue-700 via-green-400 to-blue-700 p-[2px]">
      <div className="w-full h-full rounded-full bg-green-600 blur-3xl"></div>
    </div>
  </div>
</div>

      {/* CONTENT */}
      <div className="relative z-10 w-full">
        <NAVBAR />
        <HeroSection />
        <MemoriesSection />
        <GraphSection/>
        <Footer/>
      </div>
    </div>
  );
};

export default BEY;
