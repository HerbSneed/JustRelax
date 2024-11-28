import diverseMassage from "../assets/images/diverseMassage.jpg"
import "../styles/hero.css"
import { AddressBooking } from "../components/addressBooking";  


import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <section id="hero" className="w-full h-screen bg-white">
        <div>
          <img
            className="w-full absolute z-0 top-0 bottom-0 opacity-20 h-screen  object-cover"
            src={diverseMassage}
            alt="Relaxing Spa Image"
          />
        </div>

        <div className="w-full absolute px-5 flex flex-col h-full justify-center z-10 flex-col">
          <h1 className="text-left mt-7">Refresh Your Body and Mind</h1>
          <h2 className=" text-left mt-4">
            Experience the healing power of calm, tailored massage therapy
            brought to your home or workplace.
          </h2>

          <div className="mt-10">
            <AddressBooking />
          </div>

        </div>
      </section>
    </>
  );
}

export default Hero;
