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
          <p className="text-lg max-w-[500px] mb-6 mt-32 leading-normal text-darkGrey">
            {
              "I'm a React full-stack developer with 4 years of work experience."
            }
          </p>
          <PrimaryBtn>See Projects</PrimaryBtn>
        </div>
      </section>
    </div>
  )
}
