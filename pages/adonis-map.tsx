import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

const AdonisMapPage = () => {
  return (
    <div>
      <Navbar hasBack />

      <div className="container">
        <div className="h-[600px]">image</div>
        <div className="mb-4">
          <Image
            src="/images/projects/map_logo.png"
            alt="Logo of Adonis Map"
            height={32}
            width={32}
          />
        </div>
        <h1 className="text-5xl font-bold mb-3 leading-snug text-contentDark">
          Adonis Map
        </h1>
        <div className="text-lg font-medium mb-8 text-contentLight">
          Adonis School<span className="mx-2">•</span>
          2024
        </div>

        <div className="grid grid-cols-2">
          <p className="text-lg mr-16">
            The Adonis community is home to many young men focused on
            self-improvement. While numerous friendships are cultivated online,
            members often face challenges in finding nearby brothers to meet up
            with in real life. This is where the Adonis Map comes to the rescue.
          </p>

          <div className="grid grid-cols-2 text-contentDark text-base">
            <div className="mr-8">
              <div className="mb-8">
                <h2 className="font-bold mb-2 text-sm tracking-widest">ROLE</h2>
                <p className="">Designer & Developer</p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-sm tracking-widest">
                  RESPONSIBILITIES
                </h2>
                <p className="">UI/UX</p>
                <p className="">Collect Feedback</p>
                <p className="">Fullstack Development</p>
                <p className="">A/B Testing</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-sm tracking-widest">CREDITS</h2>
              <p className="">Hamza Ahmed, Community Creator</p>
              <p className="">Danish Ahmed, Quality Assurance</p>
            </div>
          </div>
        </div>

        <div className="mx-auto w-[664px] px-8 py-6 bg-white rounded-xl my-16 text-contentDark">
          <h2 className="font-bold mb-2 text-sm tracking-widest">PROBLEM</h2>
          <p className="text-lg">
            The Skool platform, on which we hosted our community, lacks an easy
            way for people to connect in real life. Consequently, our group feed
            was flooded with low-quality posts like {`"Anyone from XYZ?"`}
          </p>
        </div>

        <Image
          src="/images/casestudy/map_main.png"
          alt="The Problem"
          width={1200}
          height={883}
        />

        <div className="max-w-[600px] mx-auto my-16">
          <p className="text-lg text-contentLight mb-6">
            Hamza, the creator, has banned posts aimed at finding people nearby.
            While this measure helps maintain high-value content in our
            community, it also amplifies the challenge for members to organize
            meetups.
          </p>

          <p className="text-lg text-contentLight">
            As a fellow Adonis community member, I too faced the same struggle.
            Driven by a strong desire to solve problems, I decided to take a
            shot at building a solution.
          </p>
        </div>

        <div className="mx-auto w-[664px] px-8 py-6 bg-white rounded-xl my-16 text-contentDark">
          <h2 className="font-bold mb-2 text-sm tracking-widest">OUR VISION</h2>
          <p className="text-lg">
            We attempted to address this issue using Google My Maps. However, it
            has a member limit, requires the creator to manually add member
            locations, and the map quickly became cluttered with pins. We need a
            map that overcomes all those obstacles.
          </p>
        </div>

        <div className="max-w-[600px] mx-auto mt-24 mb-14">
          <h2 className="font-bold mb-2 text-sm tracking-widest text-contentLighter">
            KEY FEATURES
          </h2>
          <h3 className="text-2xl font-semibold mb-3 text-contentDark">
            1. Automatic Verification
          </h3>
          <p className="text-lg text-contentDark">Explain the feature</p>
        </div>

        {/* <Image/> */}

        <div className="max-w-[600px] mx-auto mt-24 mb-14">
          <h3 className="text-2xl font-semibold mb-3 text-contentDark">
            2. {"Who's Near Me?"}
          </h3>
          <p className="text-lg text-contentDark">Explain the feature</p>
        </div>

        {/* <Image/> */}
      </div>

      <Footer />
    </div>
  )
}

export default AdonisMapPage
