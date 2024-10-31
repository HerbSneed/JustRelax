import React, { useState } from "react";
import spaImage from "../assets/images/RelaxSpaImage01.jpg"

function Hero() {
  return (
    <>
      <div className="relative mx-auto">
        <div className="absolute w-full h-full">
          <h1 className="">
            Refresh Your Body and Mind with a Relaxing Massage
          </h1>
          <p className="">
            Transform any space into your personal sanctuary with our
            therapeutic and relaxation massages, delivered right to your home or
            office.
          </p>
        </div>

        <img
          className="w-full h-full object-cover"
          src={spaImage}
          alt="Relaxing Spa Image"
        />
      </div>
    </>
  );
}

export default Hero;
