import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import reviews from "../../json/reviews.json";
import Image from "next/image";

const ReviewSection = () => {
  return (
    <section id="reviews" className="pt-24">
      <div className="container grid grid-cols-12">
        <div className="col-span-5">
          <big className="section-title">testimonial</big>
          <h2 className="mt-2">
            Trusted by over 1M companies and users around the world
          </h2>
        </div>

        <div className="col-span-7">
          {reviews.map((review, index) => (
            <div className="mt-10 ml-5 flex flex-col" key={`review${index}`}>
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
                &quot;{review.message}&quot;
              </div>

              <div className="flex items-center justify-between mt-5">
                <div>
                  <div className="flex items-center">
                    <span className="mr-3">{review.name}</span>
                    <a
                      href={review.link}
                      rel="noreferrer noopener"
                      target="_blank"
                      className="flex items-center"
                    >
                      <Image
                        src={"/images/social-linkedin.png"}
                        className="cursor-pointer transition-opacity duration-300 hover:opacity-80"
                        alt=""
                        height={20}
                        width={20}
                      />
                    </a>
                  </div>
                  <big className="text-light">{review.role}</big>
                </div>

                <div>
                  <Image
                    src={`/images/flag/${review.country}.png`}
                    alt=""
                    height={40}
                    width={40}
                    quality={100}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
