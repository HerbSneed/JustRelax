import '../styles/about.css';
import thai from "../assets/images/JR_Thai.webp";

const About = () => {

  return (
    <>
      <section id="about" className="">
        <h1>About Me</h1>
        <img src={thai} alt="Thai Massage" />

        <div className="pb-5">
        <div className="border-2 border-primary mx-5 mt-5 rounded-md ">
          <p className="">
            Health, wellness, and fitness have always been my passions. This
            journey led me to become a certified and licensed massage therapist.
            My career began in 2000 as a personal trainer, and by 2001, I earned
            certification in Older Adult Fitness. Designing safe and effective
            fitness programs that focused on building strength, enhancing
            flexibility, and creating space naturally fueled my curiosity for
            more ways to improve lives.
          </p>
        </div>

        <div className="border-2 border-primary mx-5 mt-5 rounded-md ">
          <p className="mt-5">
            In 2004, I graduated from the Center for Massage and Natural Health
            in Asheville, NC. The following year, I combined massage therapy
            with personal training in my studio. This unique synergy of
            training, stretching, and massage brought transformative results:
            clients not only looked and felt better but also became more attuned
            to their bodies.
          </p>
        </div>

        <div className="border-2 border-primary mx-5 mt-5 rounded-md ">
        <p>
          Over the years, I’ve expanded my expertise by studying various
          modalities, including Thai Yoga, Ashiatsu, Sports Massage, and trigger
          point therapy.
        </p>
        </div>

        <div className="border-2 border-primary mx-5 mt-5 rounded-md ">
        <p>
          As an intuitive bodyworker and healer, my goal is to bring awareness
          and create space for relaxation and healing to unfold naturally. With
          JustRelax, I'm here to help you reconnect with your body and find the
          balance you deserve.
        </p>
        </div>
      </div>
      </section>
    </>
  );
};

export default About;
