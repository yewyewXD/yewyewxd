import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { Website } from '@/components/Icons'

const META_TITLE = "Adonis Map Case Study | Kang's Portfolio"
const META_DESCRIPTION =
  'At the time of writing, we have helped 561 members build lifelong friendships! The community got so hyped that it has attracted another famous YouTuber, Denmo to do business with us. Check out his community map!'

const AdonisMapPage = () => {
  return (
    <div>
      <Head>
        <title>{META_TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <meta property="og:site_name" content={"Kang's Portfolio"} />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:image" itemProp="image" content={'/og_image.png'} />
        <link rel="icon" href={'/favicon.png'} />
      </Head>

      <Navbar hasBack />

      <div className="container">
        <div className="sm:pt-28 pt-24 sm:pb-20 pb-8">
          <Image
            className="w-[800px] mx-auto object-contain sm:rounded-2xl rounded-lg sm:shadow-2xl shadow-lg"
            src="/images/adonis-map/cover.png"
            alt="Cover Image of Adonis Map"
            height={600}
            width={1000}
          />
        </div>

        <div className="sm:mb-4 mb-3">
          <Image
            className="sm:w-8 sm:h-8 w-6 h-6"
            src="/images/adonis-map/logo.png"
            alt="Logo of Adonis Map"
            height={32}
            width={32}
          />
        </div>

        <h1 className="sm:text-5xl text-4xl font-bold mb-3 leading-snug text-contentDark">
          Adonis Map
        </h1>

        <div className="text-lg font-medium sm:mb-8 mb-6 text-default flex items-center gap-x-3 flex-wrap">
          <span>
            Adonis School<span className="mx-2">•</span>
            2024
          </span>
          <span>-</span>
          <Link
            className="underline text-blue-700 md:hover:opacity-70 flex items-center gap-1"
            href="https://www.spuun.me"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Website className="w-5 h-5" /> Live
          </Link>
        </div>

        <div className="grid lg:grid-cols-2">
          <p className="sm:text-lg lg:mr-16">
            <Link
              className="md:hover:opacity-70 underline"
              href="https://skool.com/adonis/about"
              target="_blank"
              rel="noreferrer noopener"
            >
              Adonis School
            </Link>{' '}
            is a premium self-improvement community led by famous YouTuber,{' '}
            <Link
              className="md:hover:opacity-70 underline"
              href="https://www.youtube.com/@Hamza97"
              target="_blank"
              rel="noreferrer noopener"
            >
              Hamza
            </Link>
            . The community is created on{' '}
            <Link
              className="md:hover:opacity-70 underline"
              href="https://skool.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Skool
            </Link>
            , a community and course hosting platform founded by Sam Ovens.
          </p>

          <div className="grid sm:grid-cols-2 text-contentDark lg:mt-0 mt-16">
            <div className="mr-8">
              <div className="mb-8">
                <h2 className="font-bold mb-2 text-sm tracking-widest">ROLE</h2>
                <p>Designer & Developer</p>
              </div>

              <div className="flex flex-col gap-2 sm:mb-0 mb-8">
                <h2 className="font-bold text-sm tracking-widest">
                  TECH STACK
                </h2>
                <p>TypeScript, Next.js, Node.js, PostgreSQL, Prisma</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:mb-0 mb-8">
              <h2 className="font-bold text-sm tracking-widest">CREDITS</h2>
              <p>Hamza Ahmed, Community Creator</p>
              <p>Danish Ahmed, Quality Assurance</p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[664px] px-8 py-6 bg-white rounded-xl sm:my-16 my-12 text-contentDark">
          <h2 className="font-bold mb-2 text-sm tracking-widest">PROBLEM</h2>
          <p className="sm:text-lg">
            The Skool platform lacks an easy way for people to connect in real
            life. Consequently, our community feed was flooded with low-quality
            posts like {`"Anyone from X country?"`}
          </p>
        </div>

        <Image
          className="w-[750px] mx-auto"
          src="/images/adonis-map/casestudy1.png"
          alt="The Problem"
          width={1200}
          height={883}
        />

        <div className="max-w-[600px] mx-auto sm:my-16 my-8 sm:text-lg text-default">
          <p className="mb-6">
            The creator then banned posts aimed at finding people nearby. While
            this measure helps maintain high-value content in our community, it
            also amplifies the challenge for members to organize meetups.
          </p>

          <p>
            As a fellow community member, I too faced the same struggle. Driven
            by a strong desire to solve problems, I decided to take a shot at
            building a solution.
          </p>
        </div>

        <div className="mx-auto max-w-[664px] px-8 py-6 bg-white rounded-xl sm:my-16 my-14 text-contentDark">
          <h2 className="font-bold mb-2 text-sm tracking-widest">OUR VISION</h2>
          <p className="sm:text-lg">
            To stay on top as the number one self-improvement community on
            Skool, we need to do more than just chatting online. We want to help
            our members easily meet up in real life, create memories, and
            strengthen their bonds with each other.{' '}
            {"Here's how we achieve that with Adonis Map:"}
          </p>
        </div>

        <div className="max-w-[600px] mx-auto sm:mt-24 mt-20 mb-14">
          <h2 className="font-bold mb-2 text-sm tracking-widest text-defaulter">
            FEATURES
          </h2>
          <h3 className="text-2xl font-semibold mb-3 text-contentDark">
            Automatic Verification
          </h3>
          <p className="sm:text-lg text-contentDark ">
            {
              "Members can add their own locations on the map. For each entry, the backend visits the user's Skool profile to verify their membership. This saves the admin days of manual entry, which was our old method of collecting member addresses and adding them onto Google My Maps."
            }
          </p>
        </div>

        <Image
          className="mx-auto rounded-xl shadow-lg"
          src="/images/adonis-map/feature1.png"
          alt=""
          width={400}
          height={600}
        />

        <div className="max-w-[600px] mx-auto sm:mt-24 mt-20 mb-14 text-contentDark">
          <h3 className="text-2xl font-semibold mb-3">{"Who's Near Me?"}</h3>
          <p className="sm:text-lg">
            This is our most beloved feature. Once you have added your location,
            you can locate other members who live nearest to you with just one
            simple click. For every member on the map, there is a link to their
            Skool profile where you can chat with them and initiate meetups.
          </p>
        </div>

        <div className="max-w-[600px] h-auto mx-auto">
          <Image
            className="rounded-xl shadow-lg"
            src={'/gif/adonis-map/feature2.gif'}
            layout={'responsive'}
            width={900}
            height={563}
            alt={`Nearby member feature GIF`}
            unoptimized={true}
          />
        </div>

        <div className="max-w-[600px] mx-auto sm:mt-24 mt-20 mb-14 text-contentDark">
          <h3 className="text-2xl font-semibold mb-3">Grouped Pins</h3>
          <p className="sm:text-lg">
            The picture on the left shows our previous experience with Google My
            Maps, where the map was crammed with pins. It feels stressful just
            to look at it. In contrast, the Adonis Map effectively groups pins
            into expandable clusters. No more stress and lags!
          </p>
        </div>

        <Image
          className="mx-auto rounded-xl shadow-lg"
          src="/images/adonis-map/feature3.png"
          alt=""
          width={600}
          height={400}
        />

        <div className="max-w-[600px] mx-auto sm:mt-24 mt-20 mb-14">
          <h2 className="font-bold mb-2 text-sm tracking-widest text-contentDark">
            RESULTS
          </h2>

          <p className="sm:text-lg text-default">
            At the time of writing, we have{' '}
            <strong>helped 561 members build lifelong friendships!</strong> The
            community got so hyped that it has attracted another famous
            YouTuber,{' '}
            <Link
              className="md:hover:opacity-70 underline"
              href="https://www.youtube.com/@Denmosocial"
              target="_blank"
              rel="noreferrer noopener"
            >
              Denmo
            </Link>{' '}
            to do business with us. Check out his{' '}
            <Link
              className="md:hover:opacity-70 underline"
              href="https://socializer.world"
              target="_blank"
              rel="noreferrer noopener"
            >
              community map
            </Link>
            !
          </p>
        </div>

        <Image
          className="mx-auto rounded-xl shadow-lg mb-8"
          src="/images/adonis-map/result.png"
          alt=""
          width={600}
          height={400}
        />

        <Image
          className="w-[900px] mx-auto mb-8"
          src="/images/adonis-map/wins.png"
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
