import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PrimaryBtn from './components/PrimaryBtn'
import Canvas from './components/threejs/Canvas'
import HeroText from './components/threejs/HeroText'

export default function Home() {
  return (
    <div>
      <Navbar />

      <section className="h-screen flex flex-col items-center justify-center">
        <Canvas>
          <HeroText />
        </Canvas>

        <div className="container flex flex-col justify-center items-center text-center absolute">
          <p className="text-lg max-w-[500px] mb-6 mt-32 leading-normal text-darkGrey select-none">
            {
              "I'm a React full-stack developer with 4 years of work experience."
            }
          </p>
          <PrimaryBtn>See Projects</PrimaryBtn>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="p-16 bg-gray-200 rounded-3xl">
            <div className="text-4xl font-bold mb-1 tracking-tight leading-snug">
              Spuun
            </div>
            <div className="text-sm text-darkGrey mb-3 font-semibold tracking-widest">
              FULLSTACK & MOBILE DEVELOPER<span className="mx-2">·</span>2022
            </div>
            <div className="text-lg text-darkGrey mb-6">
              Making something super cool in Thailand.
            </div>
            <button className="text-lg py-4 px-6 text-darkGrey rounded-xl bg-white">
              Read the Case Study
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
