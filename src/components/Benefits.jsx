import oceanBliss from "../assets/images/oceanBliss.webp";

import energy from "../assets/icons/energy.svg";
import circulation from "../assets/icons/circulation.svg";
import flexible from "../assets/icons/flexible.svg";
import immune from "../assets/icons/immune.svg";
import mood from "../assets/icons/mood.svg";
import posture from "../assets/icons/posture.svg";
import sleep from "../assets/icons/sleep.svg";
import stress from "../assets/icons/stress.svg";  


function Benefits() {
  return (
    <div id="benefits" className=" py-8 relative mx-auto">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={oceanBliss}
        alt="Ocean Bliss Background"
      />
      <div className="relative z-10 px-8">
        <ul className="flex flex-col items-center justify-start gap-y-8">
          <h1 className="text-center text-white mb-5">
            Benefits of Massage Therapy
          </h1>

          <li className="flex flex-col items-center gap-y-1">
            <img className="w-20 h-20" src={stress} />
            <h2 className="text-white">Stress Relief</h2>
            <p className="text-center text-white">
              Reduces stress and anxiety, promoting relaxation and a sense of
              well-being.
            </p>
          </li>

          <li className="flex flex-col items-center gap-y-1">
            <img className="w-20 h-20" src={circulation} />
            <h2 className="text-white">Improved Circulation</h2>
            <p className="text-center text-white">
              Enhances blood flow, boosting oxygen and nutrient delivery to
              tissues.
            </p>
          </li>
          <li className="flex flex-col items-center gap-y-1">
            <img className="w-20 h-20" src={flexible} />
            <h2 className="text-white">Increased Flexibility</h2>
            <p className="text-center text-white">
              Increases flexibility and range of motion in joints, helping to
              prevent injuries.
            </p>
          </li>
          <li className="flex flex-col items-center gap-y-1">
            <img className="w-20 h-20" src={sleep} />
            <h2 className="text-white">Enhanced Sleep Quality</h2>
            <p className="text-center text-white">
              Promotes deeper sleep by relaxing the body and mind.
            </p>
          </li>
          <li className="flex flex-col items-center gap-y-1">
            <img className="w-20 h-20" src={mood} />
            <h2 className="text-white">Mood Improvement</h2>
            <p className="text-center text-white">
              Stimulates the release of endorphins and serotonin, improving
              mood.
            </p>
          </li>
          <li className="flex flex-col items-center gap-y-1">
            <img className="w-20 h-20" src={immune} />
            <h2 className="text-white">Immune System Boost</h2>
            <p className="text-center text-white">
              Enhances immune response, helping the body fight off illnesses.
            </p>
          </li>

          <li className="flex flex-col items-center gap-y-1">
            <img className="w-20 h-20" src={posture} />
            <h2 className="text-white">Postural Improvement</h2>
            <p className="text-center text-white">
              Helps correct muscle imbalances and improves posture.
            </p>
          </li>

          <li className="flex flex-col items-center gap-y-1">
            <img className="w-20 h-20" src={energy} />

            <h2 className="text-white">Increased Energy</h2>
            <p className="text-center text-white">
              Leaves you feeling more energized and revitalized.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Benefits;
