import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

const META_TITLE = "Mystery Gift Case Study | Kang's Portfolio"
const META_DESCRIPTION = ''

const HPGamingPage = () => {
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

      <Navbar hasBack />

      <div className="container">
        <div className="sm:pt-28 pt-24 sm:pb-20 pb-8">
          <Image
            className="w-[800px] mx-auto object-contain rounded-2xl sm:shadow-2xl shadow-lg"
            src="/images/adonis-map/cover.png"
            alt="Cover Image of Adonis Map"
            height={600}
            width={1000}
          />
        </div>

        <div className="sm:mb-4 mb-3">
          <Image
            className="sm:w-8 sm:h-8 w-6 h-6"
            src="/images/hp/logo.jpeg"
            alt="Logo of Adonis Map"
            height={32}
            width={32}
          />
        </div>

        <h1 className="sm:text-5xl text-4xl font-bold mb-3 leading-snug text-contentDark">
          Mystery Gift
        </h1>

        <div className="text-lg font-medium sm:mb-8 mb-6 text-default flex items-center gap-x-3 flex-wrap">
          <span>
            HP Gaming Thailand<span className="mx-2">•</span>
            2023
          </span>
          <span>-</span>
          <Link
            className="underline text-blue-700 md:hover:opacity-70"
            href="https://www.hpgamingthailand.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            View Live
          </Link>
        </div>

        <div className="grid lg:grid-cols-2">
          <p className="sm:text-lg lg:mr-16">
            HP is one of the best computer brands in the world. I had the
            pleasure of being invited to build their mystery gift website for
            the Commart Thailand flash sale event.
          </p>

          <div className="grid sm:grid-cols-2 text-contentDark lg:mt-0 mt-16">
            <div className="mr-8">
              <div className="mb-8">
                <h2 className="font-bold mb-2 text-sm tracking-widest">ROLE</h2>
                <p className="">Developer</p>
              </div>

              <div className="flex flex-col gap-2 sm:mb-0 mb-8">
                <h2 className="font-bold text-sm tracking-widest">
                  RESPONSIBILITIES
                </h2>
                <p className="">Fullstack Development</p>
                <p className="">Admin Dashboard Design</p>
                <p className="">Testing</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:mb-0 mb-8">
              <h2 className="font-bold text-sm tracking-widest">CREDITS</h2>
              <p className="">Chalita Chuleekeit, Product Lead</p>
              <p className="">Junius Sim, Project Manager</p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[664px] px-8 py-6 bg-white rounded-xl sm:my-16 my-12 text-contentDark">
          <h2 className="font-bold mb-2 text-sm tracking-widest">PROBLEM</h2>
          <p className="sm:text-lg">
            The Skool platform, on which we hosted our community, lacks an easy
            way for people to connect in real life. Consequently, our community
            feed was flooded with low-quality posts like {`"Anyone from XYZ?"`}
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
            Hamza, the creator, subsequently banned posts aimed at finding
            people nearby. While this measure helps maintain high-value content
            in our community, it also amplifies the challenge for members to
            organize meetups.
          </p>

          <p>
            As a fellow Adonis community member, I too faced the same struggle.
            Driven by a strong desire to solve problems, I decided to take a
            shot at building a solution.
          </p>
        </div>

        <div className="mx-auto max-w-[664px] px-8 py-6 bg-white rounded-xl sm:my-16 my-14 text-contentDark">
          <h2 className="font-bold mb-2 text-sm tracking-widest">OUR VISION</h2>
          <p className="sm:text-lg">
            We attempted to address this issue using Google My Maps. However, it
            has a member limit, requires the creator to manually add member
            locations, and the map quickly became cluttered with pins. We need a
            map that overcomes all those obstacles.
          </p>
        </div>

        <div className="max-w-[600px] mx-auto sm:mt-24 mt-20 mb-14">
          <h2 className="font-bold mb-2 text-sm tracking-widest text-defaulter">
            KEY FEATURES
          </h2>
          <h3 className="text-2xl font-semibold mb-3 text-contentDark">
            Automatic Verification
          </h3>
          <p className="sm:text-lg text-contentDark ">
            {
              "For each entry, the backend visits the user's profile to verify their community membership. Members can finally add their own locations themselves, saving the admin hours of manual entry."
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
            This is our most beloved feature, enabling users to locate
            like-minded brothers nearby with just one simple click.
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
            The picture on the left shows our experience with Google My Maps,
            where country names were barely visible. The Adonis Map (picture on
            the right) effectively groups pins into expandable clusters,
            eliminating lag on the map.
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
            The Adonis Map, born out of my frustration as a hobby project, has
            evolved into the official map for Adonis School.{' '}
            <strong>
              At the time of writing, we have helped 482 members find nearby
              brothers and initiate meetups!
            </strong>
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

export default HPGamingPage