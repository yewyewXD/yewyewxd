import React from "react";
import Head from "next/head";
import HeroSection from "../components/Home/HeroSection";
import ReviewSection from "../components/Home/ReviewSection";
import ProjectSection from "../components/Home/ProjectSection";
import CTASection from "../components/Home/CTASection";

const HomePage = ({ openCalendly }) => {
  return (
    <>
      <Head>
        <title>{"Web3 React Developer - yewyewXD"}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <HeroSection />
      <ReviewSection />
      <ProjectSection />
      <CTASection openCalendly={openCalendly} />
    </>
  );
};

export default HomePage;
