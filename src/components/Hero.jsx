import diverseMassage from "../assets/images/diverseMassage.jpg"
import "../styles/hero.css"

function Hero() {
  return (
    <>
      <section id="hero" className="w-full h-screen">
        <div>
          <img
            className="w-full absolute z-0 top-0 bottom-0 opacity-60 h-screen  object-cover"
            src={diverseMassage}
            alt="Relaxing Spa Image"
          />
        </div>

        <div className="w-full absolute px-5 flex flex-col h-full justify-center z-10 flex-col">
          <h1 className="text-center">Just Relax</h1>
          <h2 className="text-center mt-7">Refresh Your Body and Mind</h2>
          <h3 className=" text-center mt-4">
            Transform any space into your personal sanctuary
          </h3>

          <button 
          className="mt-6 py-[6px] bg-click hover:bg-buttonFocus w-[120px] rounded-md mx-auto">
            Book Now
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
