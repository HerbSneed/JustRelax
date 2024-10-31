// import React from "react";
import facebook from "../assets/icons/facebook_icon.webp";
import email from "../assets/icons/email-icon.webp";

function Footer() {
  return (
    <footer
      id="footer-section"
      className="flex flex-col justify-center items-center w-full py-2 bg-base-200"
    >
      <h2 className="font-gloria text-3xl sm:text-4xl">SOCIALS</h2>

      <div className="flex flex-row w-2/12 sm:w-2/12 md:w-[110px] lg:w-[110px] xl:w-[110px] 2xl:w-[110px] justify-center mt-0 ml-1 space-x-1 ">

        <a
          href="https://www.facebook.com/profile.php?id=61550263295423"
          target="_blank"
          rel="noreferrer"
        >
          <img  src={facebook} alt="Facebook" className="" />
        </a>

        <a href="mailto:pierreneltv@gmail.com" target="_blank" rel="noreferrer">
          <img src={email} alt="email icon" />
        </a>
      </div>

      <div className="w-full flex flex-row items-center -ml-4 -mt-5 sm:-mt-4 lg:-mt-6 xl:-mt-7 2xl:-mt-9 justify-center">
        <p className="ml-1 mt-6 lg:mt-7 2xl:mt-9  text-base-content font-semibold 2xl:text-xl">
          ©™ A Peggy Joyce&apos;s Boy Production
        </p>
      </div>
    </footer>
  );
}
export default Footer;
