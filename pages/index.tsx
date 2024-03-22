import Link from 'next/link'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Canvas from '@/components/threejs/Canvas'
import HeroText from '@/components/threejs/HeroText'
import { ArrowDown } from '@/components/Icons'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Navbar />

      <section className="xl:h-[80vh] h-screen flex flex-col items-center justify-center">
        <Canvas>
          <HeroText />
        </Canvas>

        <div className="container flex flex-col justify-center items-center text-center absolute">
          <p className="text-lg max-w-[500px] mb-12 mt-32 leading-normal text-default pointer-events-none px-3">
            {'NextJS Fullstack Developer with 4 Years of Experience.'}
          </p>

          <Link
            className="flex flex-col items-center gap-1 transition-opacity duration-200 hover:opacity-60 cursor-pointer z-50 text-default"
            href="#projects"
          >
            <span>See Projects</span>
            <ArrowDown className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section id="projects" className="py-8">
        <div className="flex flex-col justify-center items-center">
          {/* Project 1 */}
          <Link
            href="/adonis-map"
            className="lg:w-[900px] flex justify-between overflow-hidden bg-card rounded-3xl mb-24 transition-all duration-300 md:hover:scale-[1.02] md:hover:shadow-lg shadow-shadow hover:bg-default"
          >
            <div className="p-16 pr-0">
              <div className="mb-3">
                <Image
                  src="/images/adonis-map/logo.png"
                  alt="Logo of Adonis Map"
                  height={32}
                  width={32}
                />
              </div>
              <div className="text-4xl font-bold mb-1 tracking-tight leading-[140%]">
                Adonis Map
              </div>
              <div className="text-sm text-default mb-3 font-semibold tracking-widest">
                NEXT.JS FULLSTACK DEV
                <span className="mx-2 text-dot">•</span>
                2024
              </div>
              <div className="text-lg text-default mb-6">
                Unite community members in real life.
              </div>
              <button className="text-lg py-4 px-6 text-default rounded-xl bg-white">
                Read the Case Study
              </button>
            </div>

            <div className="relative">
              <Image
                width={480}
                height={400}
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 83vw, (max-width: 991px) 87vw, 480px"
                src="/images/adonis-map/front_cover.png"
                alt="Cover image of Adonis Map"
              />
            </div>
          </Link>

          {/* Project 2 */}
          <Link
            href="/hp-gaming"
            className="lg:w-[900px] flex justify-between overflow-hidden bg-card rounded-3xl mb-24 transition-all duration-300 md:hover:scale-105 md:hover:shadow-lg hover:bg-gray-100"
          >
            <div className="p-16 pr-0">
              <div className="mb-3">
                <Image
                  src="/images/hp/logo.jpeg"
                  className="rounded-full"
                  alt="Logo of HP Gaming Thailand"
                  height={32}
                  width={32}
                />
              </div>
              <div className="text-4xl font-bold mb-1 tracking-tight leading-[140%]">
                Mystery Gift
              </div>
              <div className="text-sm text-gray-700 mb-3 font-semibold tracking-widest">
                NEXT.JS FULLSTACK DEV<span className="mx-2">•</span>2023
              </div>
              <div className="text-lg text-gray-700 mb-6">
                Incentivize HP Laptop gamers to buy more.
              </div>
              <button className="text-lg py-4 px-6 text-gray-700 rounded-xl bg-white">
                Read the Case Study
              </button>
            </div>

            <div className="relative">
              <Image
                width={480}
                height={400}
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 83vw, (max-width: 991px) 87vw, 480px"
                src="/images/adonis-map/front_cover.png"
                alt="Cover image of Adonis Map"
              />
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
