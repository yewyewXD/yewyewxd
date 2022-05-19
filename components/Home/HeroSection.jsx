import React, { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    const rocks = document.getElementById("rocks");
    const text = document.getElementById("text");
    const btn = document.getElementById("btn");

    function parallaxEffect() {
      const value = window.scrollY;
      rocks.style.top = value * -0.12 + "px";
      text.style.top = 50 + value * -0.1 + "%";
      btn.style.marginTop = value * 1.4 + "px";
    }

    window.addEventListener("scroll", parallaxEffect);

    () => window.removeEventListener("scroll", parallaxEffect);
  }, []);

  return (
    <>
      <section>
        <h2 id="text">
          <span>It&apos;s time for us to</span>
          <br />
          Decentralize
        </h2>
        <a href="#sec" id="btn">
          Explore
        </a>
        <img src="/images/rocks.png" id="rocks" />
        <img src="/images/water.png" id="water" />
      </section>

      <div className="sec" id="sec">
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
          <br />
          <br />
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
          <br />
          <br />
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
        </p>
      </div>
    </>
  );
};

export default HeroSection;
