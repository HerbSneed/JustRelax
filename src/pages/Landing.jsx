import Hero from "../components/Hero";
import BusinessInfo from "../components/BusinessInfo";
import ChatBot from "../components/ChatBot";
import ContactUs from "../components/ContactUs";
import Discount from "../components/Discount";
import OurServices from "../components/OurServices";
import Quote from "../components/Quote";
import Testimonials from "../components/Testimonials";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Landing = () => {

  return (
    <>
      <div>
        <Header />
        <Discount />
        <Hero />
        <Testimonials />
        <OurServices />
        <Quote />
        <BusinessInfo />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default Landing;
