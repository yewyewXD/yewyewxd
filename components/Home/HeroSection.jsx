import React from "react";

const HeroSection = () => {
  return (
    <section className="HeroSection h-screen w-full relative flex justify-center items-center">
      <h2 className="absolute text-blue-900 text-center">
        Lets decentralize the world
        <br />
        <span className="text-4xl">Together</span>
      </h2>

      <button className="px-2 py-7 bg-white text-blue-900 rounded-3xl">
        Explore
      </button>
    </section>
  );
};

export default HeroSection;
