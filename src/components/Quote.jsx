import React, { useState } from "react";
import oceanBliss from "../assets/images/oceanBliss.webp"
function Quote() {
  return (
    <>
      <div id="quote" className="relative mx-auto flex items center flex-col justify-center">
        

          <img className="object-cover" 
          src={oceanBliss} />
        </div>

    </>
  );
}

export default Quote;
