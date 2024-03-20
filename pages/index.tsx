import Link from 'next/link'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Canvas from '@/components/threejs/Canvas'
import HeroText from '@/components/threejs/HeroText'
import { primaryButton } from '@/constants/className'

export default function Home() {
  return (
    <div>
      <Navbar />

      <section className="xl:h-[80vh] h-screen flex flex-col items-center justify-center">
        <Canvas>
          <HeroText />
        </Canvas>

        <div className="container flex flex-col justify-center items-center text-center absolute">
          <p className="text-lg max-w-[500px] mb-6 mt-32 leading-normal text-gray-700 pointer-events-none">
            {'NextJS Fullstack Developer with 4 Years of Experience.'}
          </p>
          <Link className={primaryButton} href="#projects">
            See Projects
          </Link>
        </div>
      </section>

      <section id="projects">
        <div className="flex flex-col justify-center items-center">
          <Link
            href="/spuun"
            className="lg:w-[900px] lg:h-[440px] block p-16 bg-secondary rounded-3xl mb-24 transition-all duration-300 md:hover:scale-105 md:hover:shadow-lg hover:bg-gray-100"
          >
            <div className="text-4xl font-bold mb-1 tracking-tight leading-snug">
              Spuun
            </div>
            <div className="text-sm text-gray-700 mb-3 font-semibold tracking-widest">
              FULLSTACK & MOBILE DEVELOPER<span className="mx-2">•</span>2022
            </div>
            <div className="text-lg text-gray-700 mb-6">
              Making something super cool in Thailand.
            </div>
            <button className="text-lg py-4 px-6 text-gray-700 rounded-xl bg-white">
              Read the Case Study
            </button>
          </Link>

          <Link
            href="/tcmfinder"
            className="lg:w-[900px] lg:h-[440px] block p-16 bg-secondary rounded-3xl mb-24 transition-all duration-300 md:hover:scale-105 md:hover:shadow-lg hover:bg-gray-100"
          >
            <div className="text-4xl font-bold mb-1 tracking-tight leading-snug">
              TCMFinder
            </div>
            <div className="text-sm text-gray-700 mb-3 font-semibold tracking-widest">
              FULLSTACK DEVELOPER<span className="mx-2">•</span>2022
            </div>
            <div className="text-lg text-gray-700 mb-6">
              Making something super cool in Thailand.
            </div>
            <button className="text-lg py-4 px-6 text-gray-700 rounded-xl bg-white">
              Read the Case Study
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
