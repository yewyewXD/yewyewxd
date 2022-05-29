import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewSection = () => {
  return (
    <section id="reviews" className="pt-24">
      <div className="container flex">
        <div className="w-5/12">
          <big className="section-title">testimonial</big>
          <h2 className="mt-2">
            Trusted by over 1M companies and users around the world
          </h2>
        </div>

        <div className="ml-5 flex flex-col">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((num) => (
              <FontAwesomeIcon
                icon={faStar}
                key={`reviewStar${num}`}
                className="w-4 mr-1"
                style={{ color: "#ffaf2b" }}
              />
            ))}
          </div>

          <div className="bigger text-dark mt-8">
            “Great! Compared to everything else I’ve ever used, this is the best
            technology.”
          </div>

          <div className="flex items-center justify-between mt-5">
            <div>
              <div>Nick Green</div>
              <big className="text-light">Developer</big>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
