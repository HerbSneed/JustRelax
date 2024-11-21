import '../styles/about.css';
import thai from "../assets/images/JR_Thai.webp";

const About = () => {

  return (
    <>
      <div id="about">
        <h1>About Us</h1>
        <img src={thai} alt="Thai Massage" />
        <p>
          Health, wellness, and fitness have always been my passions. This journey led me to become a certified and licensed massage therapist. My career began in 2000 as a personal trainer, and by 2001, I earned certification in Older Adult Fitness. Designing safe and effective
          fitness programs that focused on building strength, enhancing flexibility, and creating space naturally fueled my curiosity for more ways to improve lives.
          <br />
          <br /> 
          In 2004, I graduated from the Center for
          Massage and Natural Health in Asheville, NC. The following year, I combined massage therapy with personal training in my studio. This unique synergy of training, stretching, and massage brought transformative results: clients not only looked and felt better but also became more attuned to their bodies.
          <br />
          <br /> 
          Over the years, I’ve expanded my expertise by studying various modalities, including Thai Yoga, Ashiatsu, Sports Massage, and trigger point therapy.
          <br />
          <br /> 
          As an intuitive bodyworker and healer, my goal is to bring awareness and create space for relaxation and healing to unfold naturally. With JustRelax, I'm here to help you reconnect with your body and find the
          balance you deserve.
        </p>
      </div>
    </>
  );
};

export default About;
