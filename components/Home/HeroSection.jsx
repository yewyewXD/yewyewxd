/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import styles from "../../styles/Home/hero.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <section className="py-20">
      <div className="container grid grid-cols-2">
        <div className="flex flex-col">
          <div className="flex flex-col relative">
            <big className="section-title">web3 react developer</big>
            <h1 className="my-5">Together, we decentralize</h1>
            <p className="text-light">
              Buy the new super rare piece of digital art and make your own
              collection more valuable!
            </p>
            <div className="mt-8 flex items-center">
              <a href="#projects" className="button-main">
                View Projects
              </a>
              <div className="ml-7 flex items-center underline cursor-pointer transition-opacity duration-300 hover:opacity-80">
                <FontAwesomeIcon icon={faDownload} className="w-3 mr-1" />
                <big>Resume</big>
              </div>
            </div>

            <img
              src="/images/general-star.png"
              className="absolute h-9 w-9 top-0 right-0"
              alt=""
            />

            <img
              src="/images/general-star.png"
              className="absolute h-7 w-7 bottom-0 right-24"
              alt=""
            />
          </div>

          <div className="mt-20">
            <h2>Top Rated</h2>
          </div>
        </div>

        <div className="flex justify-end">
          <div className={styles.Card}>
            <Image
              src="/images/hero-card.png"
              alt=""
              layout="fill"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
