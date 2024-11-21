import Hero from "../components/Hero";
import BusinessInfo from "../components/Image";
import ChatBot from "../components/ChatBot";
import ContactUs from "../components/ContactUs";
import OurServices from "../components/OurServices";
import Quote from "../components/Quote";
import Testimonials from "../components/Testimonials";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MissionStatement from "../components/MissionStatement";
import Benefits from "../components/Benefits";
import { useScrollToTop } from "../hooks/hooks.jsx";


const Landing = () => {
  useScrollToTop();

  return (
    <>
      <div>
        <Header />
        <Hero />
        <MissionStatement />
        {/* <Quote /> */}
        <Benefits />
        <Testimonials />
        <OurServices />

        <BusinessInfo />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default Landing;
