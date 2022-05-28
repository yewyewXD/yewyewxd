import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMessage,
  faLaptopCode,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";

const AboutSection = () => {
  const values = [
    {
      icon: faHeart,
      text: "Easily make every partner enjoy working with me :)",
    },
    {
      icon: faMessage,
      text: "Communicate transparently & fluently in English",
    },
    {
      icon: faLaptopCode,
      text: "Deliver consistent result at work",
    },
    {
      icon: faArrowTrendUp,
      text: "Always strive to get better",
    },
  ];

  return (
    <section className="pt-24">
      <div className="container grid grid-cols-2">
        <div className="pr-6">
          <div className="h-96 w-full bg-white"></div>
        </div>

        <div className="pl-10 flex justify-center flex-col">
          <big className="section-title">why choose me</big>
          <h2 className="mt-2 mb-4">100% Guaranteed satisfaction</h2>
          <div>
            {values.map((value, index) => (
              <div key={`aboutValue${index}`} className="flex">
                <FontAwesomeIcon
                  icon={value.icon}
                  className="w-5 text-main mr-2"
                />
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
