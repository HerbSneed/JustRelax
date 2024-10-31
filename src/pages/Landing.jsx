import useScrollToTop from "../hooks/hooks";
import Hero from "../components/Hero";
import BusinessInfo from "../components/BusinessInfo";
import ChatBot from "../components/ChatBot";
import ContactUs from "../components/ContactUs";
import Discount from "../components/Discount";
import OurServices from "../components/OurServices";
import Quote from "../components/Quote";
import Testimonials from "../components/Testimonials";


const Landing = () => {
  useScrollToTop();



  return (
    <>
      <Discount />
      <Hero />
      <Testimonials />
      <OurServices />
      <Quote />
      <BusinessInfo />
    </>
  );
}

export default Synopsis;
