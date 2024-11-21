import '../styles/MissionStatement.css';
import oceanWaves from '../assets/images/oceanWave.jpg';

function MissionStatement() {
  return (
    <>
      <section id="missionStatement" className="relative w-full h-full">
        <div>
          <img
            className="w-full absolute z-0 top-0 bottom-0 opacity-60 h-full  object-cover"
            src={oceanWaves}
            alt="Relaxing Ocean Waves"
          />
        </div>

        <div className="absolute opacity-60 bg-primary w-full h-full"></div>

        <div className="w-full py-10 px-5 z-50 flex flex-col justify-center z-10 flex-col">
          <h1 className="text-black z-10 text-left">
            At Just Relax, we aim to create your own oasis through therapeutic
            and relaxation massages, conveniently brought to your home or
            office.
          </h1>

          <p className="text-left z-10 mt-1">
            Take a moment to relax and let the tranquil vibes of JustRelax guide
            you to a state of peace. My mission is to provide healing and
            restorative massage services with a holistic touch. I’m here to help
            you achieve balance, wellness, and a sense of serenity tailored just
            for you.
          </p>
        </div>
      </section>
    </>
  );
}

export default MissionStatement;
