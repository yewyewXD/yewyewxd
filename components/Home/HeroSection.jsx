import React from "react";
import Image from "next/image";
import styles from "../../styles/Home/hero.module.scss";

const HeroSection = () => {
  return (
    <section className="py-20">
      <div className="container grid grid-cols-2">
        <div className="flex flex-col">
          <big className="section-title">web3 react developer</big>
          <h1 className="my-5">Together, we decentralize</h1>
          <p className="text-light">
            Buy the new super rare piece of digital art and make your own
            collection more valuable!
          </p>

          <div className="mt-5 flex">
            <button>View Projects</button>
            <button>Resume</button>
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
