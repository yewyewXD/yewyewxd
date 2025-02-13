import Link from 'next/link'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ChevronDown, Github, LinkedIn, Resume } from '@/components/Icons'
import Image from 'next/image'
import Head from 'next/head'
// import reviews from '@/json/reviews.json'
// import ReviewCard from '@/components/ReviewCard'

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
const META_DESCRIPTION = 'Fullstack React Developer with 4 Years of Experience.'

export default function Home() {
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
          content={'https://www.kangwei.dev/og_image.png'}
        />
        <link rel="icon" href={'/favicon.png'} />
      </Head>

      <Navbar />

      {/* Section 1: Hero */}
      <section className="relative h-screen w-screen flex flex-col items-center justify-center">
        <div className="goo-container">
          <div className="goo-class goo1"></div>
          <div className="goo-class goo2"></div>
        </div>

        <div className="container flex flex-col justify-center items-center text-center float-up relative">
          <h1 className="md:text-[70px] text-[50px] mb-3 font-bold gradientText">
            {"Hi, I'm Kang"}
          </h1>

          <p className="sm:text-lg max-w-[500px] leading-normal text-default pointer-events-none px-3">
            Fullstack React Developer with <br className="sm:hidden" />5 years
            of work and SaaS experience.
          </p>

          <div className="sm:mt-4 mt-3 flex items-center gap-8 z-50">
            <Link
              href="https://github.com/yewyewxd"
              target="_blank"
              rel="noreferrer noopener"
              className="p-1 rounded-md hover:bg-white"
            >
              <Github className="sm:size-8 size-7" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/yewyewxd"
              target="_blank"
              rel="noreferrer noopener"
              className="p-1 rounded-md hover:bg-white"
            >
              <LinkedIn className="sm:size-8 size-7" />
            </Link>

            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="p-1 rounded-md hover:bg-white"
            >
              <Resume className="sm:size-8 size-7" />
            </Link>
          </div>

          <Link
            className="mt-10 flex flex-col items-center gap-2 text-default hover:text-black sm:text-lg"
            href="#projects"
          >
            <span>See Projects</span>
            <ChevronDown className="size-6 animate-bounce" />
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
                    className="sm:size-8 size-6 rounded"
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

      {/* <section className="py-8 sm:mb-16 mb-4 container flex justify-center">
        <div className="">
          <h2 className="sm:text-4xl text-3xl mb-8 font-bold text-default gap-2 text-center">
            Hear What <br className="sm:hidden" />
            Others Say!
          </h2>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 text-sm">
            <div className="flex flex-col gap-6">
              {reviews.slice(0, 3).map((review) => (
                <ReviewCard key={review.name} review={review} />
              ))}
            </div>

            <div className="flex flex-col gap-6">
              {reviews.slice(3, 7).map((review) => (
                <ReviewCard key={review.name} review={review} />
              ))}
            </div>

            <div className="lg:flex flex-col gap-6 sm:hidden flex">
              {reviews.slice(7, 10).map((review) => (
                <ReviewCard key={review.name} review={review} />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
