import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { Website } from '@/components/Icons'

const META_TITLE = "Skool Map | Kang's Portfolio"
const META_DESCRIPTION =
  'At the time of writing, we have helped over 30,000 users build lifelong friendships! The community got so hyped that it has attracted another famous YouTuber, Denmo to do business with us, which then snowballed our success.'

const AdonisMapPage = () => {
  return (
    <div>
      <Head>
        <title>{META_TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <meta property="og:site_name" content={"Kang's Portfolio"} />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta
          property="og:image"
          itemProp="image"
          content={'https://www.kangwei.dev/og_image.png'}
        />
        <link rel="icon" href={'/favicon.png'} />
      </Head>

      <Navbar hasBack />

      <div className="container text-contentDark">
        <div className="sm:pt-28 pt-24 sm:pb-20 pb-8">
          <Image
            className="w-[800px] mx-auto object-contain sm:rounded-2xl rounded-lg sm:shadow-2xl shadow-lg"
            src="/images/skoolmap/cover.png"
            alt="Cover Image of Adonis Map"
            height={600}
            width={1000}
          />
        </div>

        <div className="sm:mb-4 mb-3">
          <Image
            className="sm:w-8 sm:h-8 w-6 h-6"
            src="/images/skoolmap/logo.png"
            alt="Logo of Adonis Map"
            height={32}
            width={32}
          />
        </div>

        <h1 className="sm:text-5xl text-4xl font-bold mb-3 leading-snug ">
          Skool Map
        </h1>

        <div className="text-lg font-medium sm:mb-8 mb-6 text-default flex items-center gap-x-3 flex-wrap">
          <span>
            Skool.com<span className="mx-2">•</span>
            2024
          </span>
          <span>-</span>
          <Link
            className="underline text-blue-700 md:hover:opacity-70 flex items-center gap-1"
            href="https://www.skoolmap.io"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Website className="w-5 h-5" /> Landing
          </Link>

          <Link
            className="underline text-blue-700 md:hover:opacity-70 flex items-center gap-1"
            href="https://games.skoolmap.io"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Website className="w-5 h-5" /> App
          </Link>
        </div>

        <div className="grid lg:grid-cols-2">
          <p className="sm:text-lg lg:mr-16">
            Skool is a community platform that lets you host courses and events
            for your online community. Created by serial entrepreneurs Sam Ovens
            and Alex Hormozi.
          </p>

          <div className="grid sm:grid-cols-2  lg:mt-0 mt-16 sm:gap-16">
            <div>
              <div className="mb-8">
                <h2 className="font-bold mb-2 text-sm tracking-widest">ROLE</h2>
                <p>Designer & Developer</p>
              </div>

              <div className="flex flex-col gap-2 sm:mb-0 mb-8">
                <h2 className="font-bold text-sm tracking-widest">
                  TECH STACK
                </h2>
                <p>TypeScript, Next.js, Node.js, PostgreSQL, Prisma, Figma</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:mb-0 mb-8">
              <h2 className="font-bold text-sm tracking-widest">CREDITS</h2>
              <p>Hamza Ahmed</p>
              <p>Danish Ahmed</p>
              <p>Ted Carr</p>
              <p>Andrew Kirby</p>
            </div>
          </div>
        </div>

        {/* Problem */}
        <div className="mx-auto max-w-[664px] px-8 py-6 bg-white rounded-xl sm:my-16 my-12 ">
          <h2 className="font-bold mb-2 text-sm tracking-widest">PROBLEM</h2>
          <p className="sm:text-lg">
            Communities on Skool.com often struggle to connect with fellow
            members in real life. The friends making process was very
            labour-intensive.
          </p>
        </div>

        <Image
          className="w-[750px] mx-auto"
          src="/images/skoolmap/casestudy1.png"
          alt="The Problem"
          width={1200}
          height={883}
        />

        <div className="max-w-[600px] mx-auto sm:my-16 my-8 sm:text-lg text-default">
          <p className="mb-6">
            To avoid spams, creators have banned posts aimed at finding people
            nearby, which further amplified the challenge for members to meet up
            in real life.
          </p>

          <p>
            As a fellow community member, I too faced the same struggle. Driven
            by a strong desire to solve problems, I decided to take a shot at
            building a solution.
          </p>
        </div>

        {/* Vision */}
        <div className="mx-auto max-w-[664px] px-8 py-6 bg-white rounded-xl sm:my-16 my-14 ">
          <h2 className="font-bold mb-2 text-sm tracking-widest">OUR VISION</h2>
          <p className="sm:text-lg">
            We needed a simple and inexpensive solution that allows users to
            find friends living close to them, something like a map.
          </p>
        </div>

        <div className="max-w-[600px] mx-auto sm:mt-24 mt-20 mb-14">
          <h3 className="text-2xl font-semibold mb-3">Existing Solution</h3>
          <p className="sm:text-lg">
            We looked for existing solutions and found Google My Maps, but
            quickly hit the limitation of 2000 members on a single map. The map
            was slow and cluttered, not cool (see picture below, left side).
          </p>
        </div>

        <div>
          <Image
            className="mx-auto rounded-xl shadow-lg"
            src="/images/skoolmap/google_map_compare.png"
            alt=""
            width={600}
            height={400}
          />
          <p className="text-footer text-sm mt-6 text-center">
            Google My Maps vs. Skool Map
          </p>
        </div>

        <div className="max-w-[600px] mx-auto sm:mt-24 mt-20 mb-14">
          <h3 className="text-2xl font-semibold mb-3 ">Our Solution</h3>
          <p className="sm:text-lg ">
            Now I know what to build. We first need to verify user&apos;s
            membership on Skool via the Skool API.
          </p>
        </div>

        <Image
          className="mx-auto rounded-xl shadow-lg"
          src="/images/skoolmap/login_modal.png"
          alt="Login modal"
          width={400}
          height={600}
        />

        <div className="max-w-[600px] mx-auto sm:my-16 my-8 sm:text-lg">
          We also need a user interface to collect user&apos;s address, so we
          can retrieve the coordination and pin them on the map.
        </div>

        <Image
          className="mx-auto rounded-xl shadow-lg"
          src="/images/skoolmap/location_modal.png"
          alt="Location modal"
          width={400}
          height={600}
        />

        <div className="max-w-[600px] mx-auto sm:my-16 my-8 sm:text-lg">
          What that, our MVP is completed and ready to handle hundreds of
          thousands of users!
        </div>

        <Image
          className="mx-auto rounded-xl shadow-lg"
          src="/images/skoolmap/cover.png"
          alt="Skool Map"
          width={600}
          height={400}
        />

        <div className="max-w-[600px] mx-auto sm:mt-24 mt-20 mb-14 ">
          <h3 className="text-2xl font-semibold mb-3">New Features</h3>
          <p className="sm:text-lg">
            We don&apos;t just stop there. We continue to collect feedback and
            make improvements to the app. This is by far the most beloved
            feature - Nearby Search.
          </p>
        </div>

        <div className="max-w-[600px] h-auto mx-auto">
          <Image
            className="rounded-xl shadow-lg"
            src={'/images/skoolmap/nearby_search.gif'}
            layout={'responsive'}
            width={900}
            height={563}
            alt={`Nearby member feature GIF`}
            unoptimized={true}
          />
        </div>

        <div className="max-w-[600px] mx-auto sm:mt-24 mt-20 mb-14">
          <h2 className="font-bold mb-2 text-sm tracking-widest ">RESULTS</h2>

          <p className="sm:text-lg text-default">
            At the time of writing, we have{' '}
            <strong>
              helped over 30,000 users build lifelong friendships!
            </strong>{' '}
            The community got so hyped that it has attracted another famous
            YouTuber,{' '}
            <Link
              className="md:hover:opacity-70 underline"
              href="https://www.youtube.com/@JackDenmo"
              target="_blank"
              rel="noreferrer noopener"
            >
              Denmo
            </Link>{' '}
            to do business with us, which then snowballed our success.
          </p>
        </div>

        <Image
          className="mx-auto rounded-xl shadow-lg mb-8"
          src="/images/skoolmap/result.png"
          alt=""
          width={600}
          height={400}
        />

        <Image
          className="w-[900px] mx-auto mb-8"
          src="/images/skoolmap/wins.png"
          alt="The Result"
          width={1200}
          height={883}
        />
      </div>

      <Footer />
    </div>
  )
}

export default AdonisMapPage
