import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import "../styles/header.css";
import HeroBook from "../components/HeroBook"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerBg, setHeaderBg] = useState("transparent");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const headerElement = document.getElementById("header");
      const missionSection = document.getElementById("missionStatement");
      const benefitsSection = document.getElementById("benefits");
      const testimonialsSection = document.getElementById("testimonials");
      const servicesSection = document.getElementById("services");
      const contactSection = document.getElementById("contact");

      // Get the offset height of the header
      const offsetScroll = headerElement ? headerElement.offsetHeight : 0;

      // Calculate positions for each section
      const missionPosition = missionSection
        ? missionSection.offsetTop - offsetScroll
        : null;
      const benefitsPosition = benefitsSection
        ? benefitsSection.offsetTop - offsetScroll
        : null;
      const testimonialsPosition = testimonialsSection
        ? testimonialsSection.offsetTop - offsetScroll
        : null;
      const servicesPosition = servicesSection
        ? servicesSection.offsetTop - offsetScroll
        : null;
      const contactPosition = contactSection
        ? contactSection.offsetTop - offsetScroll
        : null;

      if (window.scrollY >= missionPosition) {
        setHeaderBg("primary");
      } else if (window.scrollY >= benefitsPosition) {
        setHeaderBg("primary");
      } else if (window.scrollY >= testimonialsPosition) {
        setHeaderBg("primary");
      } else if (window.scrollY >= servicesPosition) {
        setHeaderBg("primary");
      } else if (window.scrollY >= contactPosition) {
        setHeaderBg("primary");
      } else {
        setHeaderBg("button");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Offset scroll function
  const offsetScroll = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = document.getElementById("header").offsetHeight;
      const position =
        element.getBoundingClientRect().top + window.pageYOffset - offset + 10;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header
      id="header"
      className={`fixed left-0 py-1.5 md:py-3.5 right-0 z-50 flex top-0 justify-between items-center ${
        headerBg === "primary" ? "bg-primary" : "bg-button"
      }`}
    >
      <nav className="w-screen">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <HashLink to="/#home">
            <h1 className="header text-white mt-2 ml-5 lg:ml-10 drop-shadow-lg z-50 font-[blackword]">
              JR
            </h1>
          </HashLink>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex z-50 mr-3 items-center justify-center w-10 h-10 text-sm  focus:outline-none md:hidden"
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
                style={{
                  filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4))",
                }}
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
                style={{
                  filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4))",
                }}
              >
                <path
                  stroke="white"
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
                  className="block text-left pl-3 hover:text-blue-500"
                  to="/#home"
                  onClick={() => handleNavigation("/#home")}
                >
                  Home
                </HashLink>
              </li>

              <li className="text-left pl-3 py-2 pr-3 lg:pr-6 w-full">
                <a
                  className="block text-left pl-3 hover:text-blue-500"
                  to="/about"
                  onClick={() => handleNavigation("/about")}
                >
                  About Me
                </a>
              </li>

              <li className="py-2 px-3 w-full">
                <HashLink
                  className="block text-left pl-3 hover:text-blue-500"
                  to="/#missionStatement"
                  onClick={(e) => offsetScroll(e, "missionStatement")}
                >
                  My Mission
                </HashLink>
              </li>
              <li className="py-2 px-3 w-full">
                <HashLink
                  className="block text-left pl-3 hover:text-blue-500"
                  to="/#benefits"
                  onClick={(e) => offsetScroll(e, "benefits")}
                >
                  Benifits of Massage
                </HashLink>
              </li>
              <li className="py-2 px-3 w-full">
                <HashLink
                  className="block text-left pl-3 hover:text-blue-500"
                  to="/#services"
                  onClick={(e) => offsetScroll(e, "services")}
                >
                  Services
                </HashLink>
              </li>
              <li className="py-2 px-3 w-full">
                <HashLink
                  className="block text-left pl-3 hover:text-blue-500"
                  to="/#contact"
                  onClick={(e) => offsetScroll(e, "contact")}
                >
                  Contact Me
                </HashLink>
              </li>
            </ul>
          </div>

          <ul className="navLinks hidden md:flex lg:text-xl items-center drop-shadow-lg justify-end bg-opacity-50 font-semibold w-8/12 gap-4 2xl:gap-6 mr-3 lg:mr-8 md:mr-6 text-white">
            <li className="text-left pl-3 py-2 pr-3 lg:pr-6 w-full">
              <HashLink
                className="block text-left pl-3 hover:text-blue-500"
                to="/#home"
                onClick={() => handleNavigation("/#home")}
              >
                Home
              </HashLink>
            </li>
            <li className="py-2 px-3 w-full">
              <HashLink
                className="block text-left pl-3 hover:text-blue-500"
                to="/#missionStatement"
                onClick={(e) => offsetScroll(e, "missionStatment")}
              >
                My Mission
              </HashLink>
            </li>
            <li className="py-2 px-3 w-full">
              <HashLink
                className="block text-left pl-3 hover:text-blue-500"
                to="/#benefits"
                onClick={(e) => offsetScroll(e, "benefits")}
              >
                The Venue
              </HashLink>
            </li>
            <li className="py-2 px-3 w-full">
              <HashLink
                className="block text-left pl-3 hover:text-blue-500"
                to="/#services"
                onClick={(e) => offsetScroll(e, "services")}
              >
                Testimonials
              </HashLink>
            </li>
            <li className="py-2 px-3 w-full">
              <HashLink
                className="block text-left pl-3 hover:text-blue-500"
                to="/#contact"
                onClick={(e) => offsetScroll(e, "contact")}
              >
                Contact Us
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
