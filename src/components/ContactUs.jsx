import '../styles/ContactUs.css';
import thai from '../assets/images/JR_Thai.webp';

const ContactUs = () => {
  return (
    <>
      <section id="contact" className=" relative bg-background">
        <div>
          <img
            className="w-full absolute z-0 top-0 bottom-0 opacity-60 h-full  object-cover"
            src={thai}
            alt="Relaxing Ocean Waves"
          />
        </div>

        <div className="absolute  left-0 right-0 h-full pointer-events-none opacity-85 bg-gradient-to-b from-primary/100 to-white"></div>

        <div className="flex pt-5">
          <h1 className="z-10 font-bold text-center mb-0 text-primary">
            Book Your Next Massage
          </h1>
        </div>

        <form className="w-full mx-auto p-4 bg-white sm:rounded-lg sm:shadow-md">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-buttonFocus peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute  text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-buttonFocus peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute  text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="phone"
              id="phone"
              className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-buttonFocus peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute  text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="address"
              id="address"
              className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-buttonFocus peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="address"
              className="peer-focus:font-medium absolute  text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Address
            </label>
          </div>

          <div className="relative z-0 w-full mb-16 group">
            <input
              type="text"
              name="subject"
              id="subject"
              className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-buttonFocus peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="subject"
              className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Subject
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-8 scale-100 top-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="block mt-3 py-2.5 h-44 px-3 w-full text-sm text-gray-900 bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-buttonFocus peer"
              placeholder=" "
              required
            />
          </div>
          <div className="flex">
            <button
              type="submit"
              className="z-10 text-white bg-blue-700  hover:ring-1 hover:outline-none hover:ring-blue-700 hover:bg-buttonFocus font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactUs;
