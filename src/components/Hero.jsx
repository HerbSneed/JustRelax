import React, { useState } from "react";
import spaImage from "../assets/images/RelaxSpaImage01.jpg"
import diverseMassage from "../assets/images/diverseMassage.jpg"

function Hero() {
  return (
    <>
      <div id="hero" className="relative bg-white mx-auto h-96">
        <div className="absolute w-full h-full flex z-50 flex-col px-8">
          <h1 className="mt-6">Just Relax</h1>
          <h2 className="text-center mt-8">Refresh Your Body and Mind</h2>
          <h3 className="mt-6">Transform any space into your personal sanctuary</h3>

          <button className="mt-6 py-[6px] bg-click w-[120px] rounded-md mx-auto">Book Now</button>
        </div>

        <img
          className="w-full opacity-60 h-full object-cover"
          src={diverseMassage}
          alt="Relaxing Spa Image"
        />
      </div>
    </>
  );
}

export default Hero;
