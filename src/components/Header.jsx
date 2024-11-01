import { useState,  } from "react";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [headerBg, setHeaderBg] = useState("transparent");
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header id="header" className="left-0 right-0  top-0 bg-primary justify-between items-center ">
        <nav className="w-screen">
          <div className="flex flex-wrap items-center justify-between mx-auto">
            <HashLink to="/#home">
              <h1 className="header drop-shadow-lg ml-3 z-50 font-[blackword]">
                JR
              </h1>
            </HashLink>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-collapse-toggle="navbar-hamburger"
              type="button"
              className="inline-flex z-50  items-center justify-center  w-10 h-10 text-sm focus:outline-none md:hidden"
              aria-controls="navbar-hamburger"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="#D49E7F"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              )}
            </button>

            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:hidden w-full mt-2`}
              id="navbar-hamburger"
            >
              <ul className="flex flex-col z-0 px-0 absolute top-0 py-20 w-full text-white font-semibold bg-opacity-50 h-screen bg-black">
                <li className="text-left pl-3 py-2 pr-3 lg:pr-6 w-full">
                  <HashLink
                    className="block text-left  pl-3 hover:text-blue-500"
                    to="/#home"
                    onClick={() => handleNavigation("/#home")}
                  >
                    Home
                  </HashLink>
                </li>
                <li className="py-2 px-3 w-full">
                  <HashLink
                    className="block text-left pl-3 hover:text-blue-500"
                    to="/#about"
                    onClick={() => handleNavigation("/#about")}
                  >
                    About
                  </HashLink>
                </li>
                <li className=" py-2 px-3 w-full">
                  <HashLink
                    className="block text-left pl-3 hover:text-blue-500"
                    to="/#theVenue"
                    onClick={() => handleNavigation("/#bookOnline")}
                  >
                    Book Online
                  </HashLink>
                </li>
                <li className=" py-2 px-3 w-full">
                  <HashLink
                    className="block text-left pl-3 hover:text-blue-500"
                    to="/#testimonials"
                    onClick={() => handleNavigation("/#testimonials")}
                  >
                    Testimonials
                  </HashLink>
                </li>

                <li className=" py-2 px-3 w-full">
                  <HashLink
                    className="block text-left pl-3 hover:text-blue-500"
                    to="/#contact"
                    onClick={() => handleNavigation("/#contact")}
                  >
                    Contact
                  </HashLink>
                </li>

                <li className=" py-2 px-3 w-full">
                  <HashLink
                    className="block text-left pl-3 hover:text-blue-500"
                    to="/#contact"
                    onClick={() => handleNavigation("/#FAQ")}
                  >
                    FAQ
                  </HashLink>
                </li>
              </ul>
            </div>

            <ul className=" navLinks hidden md:flex lg:text-xl items-center drop-shadow-lg justify-end bg-opacity-50 font-semibold w-8/12 gap-4 2xl:gap-6  mr-3 lg:mr-16 md:mr-6 text-white">
              <li className="hover:text-yellow-200">
                <HashLink to="/#home">Home</HashLink>
              </li>
              <li className=" hover:text-yellow-200">
                <HashLink to="/#bookOnline">Book Online</HashLink>
              </li>
              <li className=" hover:text-yellow-200">
                <HashLink to="/#about">The About</HashLink>
              </li>
              <li className=" hover:text-yellow-200">
                <HashLink to="/#testimonials">Testimonials</HashLink>
              </li>
              <li className=" hover:text-yellow-200">
                <HashLink to="/#contact">Contact Us</HashLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
