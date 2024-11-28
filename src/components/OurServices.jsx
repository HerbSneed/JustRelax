import BookNow from "./BookNow";
import '../styles/OurServices.css';
import oceanWaves from "../assets/images/oceanWave.jpg";
import { services } from "../hooks/hooks"; 

import { motion } from "framer-motion";

function OurServices() {
  return (
    <>
      <section id="services" className="relative w-full h-full">
        <div>
          <img
            className="w-full absolute z-0 top-0 bottom-0 opacity-60 h-full  object-cover"
            src={oceanWaves}
            alt="Relaxing Ocean Waves"
          />
        </div>
        <div className="absolute opacity-60 bg-primary w-full h-full"></div>

        <div className="flex flex-col pt-5">
          <h1 className="text-primary z-10 text-center mb-2">Services</h1>
        </div>

        <div className="flex flex-col w-full items-center mx-auto">
          <ul className="flex flex-col z-10 w-full items-center mx-auto gap-y-10">
            {services.map(({ name, description, price, id }) => (
              <li key={id}>
                <div className="shadow-xl bg-button bg-opacity-80 z-10 rounded-md flex mx-6 flex-col p-4 gap-y-4">
                  <h2 className="">{name}</h2>
                  <h3 className="">{description}</h3>
                  <hr className="opacity-30 border border-gray-100"></hr>
                  <p className="">{price}</p>
                  <BookNow />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col pb-5">
          <p className="z-10 text-center px-5 mt-3">
            Serving Eastern North Carolina
          </p>
          <p className="text-center px-5 z-10">Travel Fees May Apply</p>
        </div>
      </section>
    </>
  );
}

export default OurServices;
