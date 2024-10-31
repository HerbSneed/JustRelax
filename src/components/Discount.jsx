import React, { useState } from "react";

function Discount() {
  return (
    <>
      <div className="bg-primary flex flex-col p-5 items-center justify-center">
        <h1>- Now to December 31st -</h1>
        <p>Get 10% Off With Code <span>"JUST RELAX 2004"</span>at checkout</p>
        <button className="bg-accent w-[100px] mx-auto">Book Now</button>
      </div>
    </>
  )
}

export default Discount;
