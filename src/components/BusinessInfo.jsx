import React, { useState } from 'react';

function BusinessInfo() {
  return (
    <>
      <div id="businessinfo" className="bg-primary flex flex-col justify-center items-center text-center py-8">
        <h1 className="">Business Info</h1>
        <div className="py-3">
          <h2>Hours</h2>
          <p>Available Upon Request</p>
        </div>

        <div className="py-3">
          <h2>Service Area</h2>
          <p>Wilmington, Leland, & Surrounding Areas</p>
        </div>

        <div className="py-3">
          <h2>Contact</h2>
          <p>Phone: (910) 555-5555</p>
          <p>Email: bookerG@justrelax.com</p>
        </div>
      </div>
    </>
  );
}

export default BusinessInfo;
