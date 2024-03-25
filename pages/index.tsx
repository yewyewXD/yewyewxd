import Link from 'next/link'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ArrowDown, Github, LinkedIn, Resume } from '@/components/Icons'
import Image from 'next/image'
import Head from 'next/head'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const PROJECTS = [
  {
    link: '/adonis-map',
    image: '/images/adonis-map/logo.png',
    title: 'Adonis Map',
    role: 'NEXT.JS FULLSTACK',
    year: '2024',
    description: 'Unite community members in real life.',
    coverImage: '/images/adonis-map/front_cover.png',
  },
  {
    link: '/spuun',
    image: '/images/spuun/logo.png',
    title: 'Spuun',
    role: 'FULLSTACK & MOBILE',
    year: '2022',
    description: 'Help restaurants in Bangkok sell online.',
    coverImage: '/images/spuun/front_cover.png',
  },
]

const META_TITLE = "Kang's Portfolio"
const META_DESCRIPTION =
  'Fullstack NextJS Developer with 4 Years of Experience.'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <div>
      <Head>
        <title>{META_TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <meta property="og:site_name" content={META_TITLE} />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta
          property="og:image"
          itemProp="image"
          content={'/images/og_image.png'}
        />
        <link rel="icon" href={'/images/favicon.png'} />
      </Head>

      <Navbar />

      <section className="xl:h-[80vh] h-screen flex flex-col items-center justify-center">
        <div
          data-aos="fade-up"
          className="container flex flex-col justify-center items-center text-center absolute"
        >
          <h1 className="md:text-[70px] text-[50px] mb-3 font-bold gradientText">
            {"Hi, I'm Kang"}
          </h1>

          <p className="sm:text-lg max-w-[500px] leading-normal text-default pointer-events-none px-3">
            Fullstack NextJS Developer with <br className="sm:hidden" />4 Years
            of Experience.
          </p>

          <div className="sm:mt-4 mt-3 flex items-center gap-8 z-50">
            <Link
              href="https://github.com/yewyewxd"
              target="_blank"
              className="p-1 rounded hover:bg-white hover:opacity-70"
            >
              <Github className="sm:w-8 sm:h-8 w-7 h-7" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/yewyewxd"
              target="_blank"
              className="p-1 rounded hover:bg-white hover:opacity-70"
            >
              <LinkedIn className="sm:w-8 sm:h-8 w-7 h-7" />
            </Link>

            <Link
              href="/resume.pdf"
              target="_blank"
              className="p-1 rounded hover:bg-white hover:opacity-70"
            >
              <Resume className="sm:w-8 sm:h-8 w-7 h-7" />
            </Link>
          </div>

          <Link
            className="mt-12 flex flex-col items-center gap-1 transition-opacity duration-200 hover:opacity-60 cursor-pointer z-50 text-default sm:text-lg"
            href="#projects"
          >
            <span>See Projects</span>
            <ArrowDown className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section id="projects" className="py-8 sm:mb-16 mb-4">
        <div className="flex flex-col justify-center items-center container sm:gap-24 gap-12">
          {PROJECTS.map((project) => (
            <Link
              key={project.title}
              href={project.link}
              className="lg:w-[900px] flex lg:flex-row flex-col justify-between overflow-hidden bg-card rounded-3xl transition-all duration-300 md:hover:scale-[1.02] md:hover:shadow-lg shadow-shadow hover:bg-default"
            >
              <div className="lg:p-16 p-8 lg:pr-0 lg:pb-16 sm:pb-0 pb-4">
                <div className="mb-3">
                  <Image
                    className="sm:w-8 sm:h-8 w-6 h-6 rounded"
                    src={project.image}
                    alt={`Logo of ${project.title}`}
                    height={32}
                    width={32}
                  />
                </div>
                <div className="sm:text-4xl text-2xl font-bold mb-1 tracking-tight leading-[140%]">
                  {project.title}
                </div>
                <div className="text-sm text-default mb-3 font-semibold tracking-widest">
                  {project.role}
                  <span className="mx-2 text-dot">•</span>
                  {project.year}
                </div>
                <div className="sm:text-lg text-default mb-6">
                  {project.description}
                </div>
                <button className="sm:text-lg sm:py-4 py-3 sm:px-6 px-4 text-default rounded-xl bg-white">
                  Read the Case Study
                </button>
              </div>

              <div className="relative">
                <Image
                  width={480}
                  height={400}
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 83vw, (max-width: 991px) 87vw, 480px"
                  src={project.coverImage}
                  alt={`Cover image of ${project.title}`}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
