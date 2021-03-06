/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import styles from "../../styles/pages/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  const techs = [
    "nextjs",
    "reactjs",
    "nodejs",
    "javascript",
    "sass",
    "mongodb",
    "moralisweb3",
    "ethersjs",
  ];

  return (
    <section className="HeroSection pt-32">
      <div className="container grid grid-cols-2 border-b pb-24">
        <div className="flex flex-col">
          <div className="flex flex-col relative">
            <big className="section-title">web3 react developer</big>
            <h1 className="my-5">Together, we decentralize</h1>
            <p className="text-light">
              Money is not my priority. Only open to building useful, impactful,
              or world-changing projects, preferably on web 3.0
            </p>
            <div className="mt-8 flex items-center">
              <a href="#projects" className="button-main">
                View Projects
              </a>
              <div className="ml-7 flex items-center underline hoverOpacity">
                <FontAwesomeIcon icon={faDownload} className="w-3 mr-1" />
                <a href="/docs/resume.pdf" target="_blank">
                  <big>Resume</big>
                </a>
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

          <a
            href="https://www.upwork.com/freelancers/~01186da3d6211b3ce4"
            rel="noopener noreferrer"
            target="_blank"
            className="mt-20 flex items-center hoverOpacity"
          >
            <div className="flex items-center border-r pr-7">
              <Image
                src="/images/brand/upwork.png"
                alt=""
                className="rounded-full"
                height={40}
                width={40}
              />
              <big className="text-light ml-3 font-semibold">TOP RATED</big>
            </div>

            <div className="flex items-center pl-9">
              <h2 className="font-default">4.9</h2>
              <div className="text-light ml-4 flex items-center">
                <FontAwesomeIcon icon={faStar} className="w-3 mr-1" />
                <small className="font-semibold">AVG RATING</small>
              </div>
            </div>
          </a>
        </div>

        <div className="flex justify-end">
          <div className={styles.HeroCard}>
            <Image
              src="/images/hero-card.png"
              alt=""
              layout="fill"
              quality={100}
            />
          </div>
        </div>
      </div>

      <div className="container py-10 flex justify-evenly opacity-70">
        {techs.map((tech) => (
          <div className="" key={`icon-${tech}`}>
            <Image
              src={`/images/tech/${tech}.png`}
              alt=""
              height={75}
              width={75}
              quality={60}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
