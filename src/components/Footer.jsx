import '../styles/footer.css';
import phone from "../assets/icons/phone_call_icon.png";
import email from "../assets/icons/email_icon.png";  

function Footer() {
  return (
    <>
      <section id="footer" className="bg-backGround px-1 pb-3">
        <div className="flex flex-row justify-between px-2 w-full ">
          <div className=" order-2 w-6/12 mt-1">
            <div className="flex flex-row -mx-1.5 mt-2 gap-x-1 justify-end">
              <a
                href="tel:+1-619-227-6563"
                target="_blank"
                rel="noreferrer"
                className="mx-0"
              >
                <img className="w-6 sm:w-7" src={phone} alt="GitHub Icon" />
              </a>

              <a
                href="mailto:garriejr@gmail.com"
                target="_blank"
                className="mx-2"
                rel="noreferrer"
              >
                <img className="w-6 sm:w-7" src={email} alt="Email Icon" />
              </a>
            </div>
          </div>

          <div className="mt-2 w-full flex flex-col text-left items-start order-1 ">
            <h1 className="">Just Relax Mobile Massage</h1>
            <p className="text-black">Serving Eastern North Carolina</p>
          </div>
        </div>

        <hr className="my-1"></hr>

        <div className="">
          <p className="text-center text-black mt-2">
            Copyright 2024. Just Relax Mobile Massage
          </p>

          <p>
            Made by{" "}
            <span className="">
              <a href="mailto:info@twistedtechsolutions">
                Twisted Tech Solutions
              </a>
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
export default Footer;
