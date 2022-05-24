/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    const rocks = document.getElementById("rocks");
    const text = document.getElementById("HeroCap");
    const btn = document.getElementById("HeroBtn");

    function parallaxEffect() {
      const value = window.scrollY;
      rocks.style.top = value * -0.12 + "px";
      text.style.top = 50 + value * -0.1 + "%";
      btn.style.marginTop = value * 1.4 + "px";
      console.log(50 + value * -0.1 + "%");
    }

    window.addEventListener("scroll", parallaxEffect);

    () => window.removeEventListener("scroll", parallaxEffect);
  }, []);

  return (
    <>
      <section className="HeroSection relative all-center overflow-hidden">
        <h2 id="HeroCap">
          <span>It&apos;s time for us to</span>
          <br />
          Decentralize
        </h2>
        <a id="HeroBtn">Explore</a>
        <img src="/images/rocks.png" id="rocks" alt="" loading="lazy" />
        <img src="/images/water.png" id="water" alt="" loading="lazy" />
      </section>

      <div className="sec">
        <h2>Parallax Scrolling Effects</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero iste
          laboriosam iusto sapiente voluptatum a, incidunt culpa quae.
          Necessitatibus vero exercitationem accusantium nemo culpa ipsa tempora
          quia? Aliquam, nemo doloribus. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Id quidem dolore atque maiores laudantium, corporis
          quam quisquam vero repellat ad nobis asperiores incidunt veritatis
          neque eum delectus consequuntur quibusdam eaque. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Impedit cumque molestiae fugit
          ratione aliquam suscipit, perspiciatis in quod molestias quisquam
          doloribus at tempore. Minima aperiam molestias in nobis eaque ipsam.
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero iste
          laboriosam iusto sapiente voluptatum a, incidunt culpa quae.
          Necessitatibus vero exercitationem accusantium nemo culpa ipsa tempora
          quia? Aliquam, nemo doloribus. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Id quidem dolore atque maiores laudantium, corporis
          quam quisquam vero repellat ad nobis asperiores incidunt veritatis
          neque eum delectus consequuntur quibusdam eaque.
        </p>
      </div>
    </>
  );
};

export default HeroSection;
