import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { Website } from '@/components/Icons'

const META_TITLE = "TCMFinder Case Study | Kang's Portfolio"
const META_DESCRIPTION =
  'On average, the website gets 5-10 clicks per day. The main drivers of our traffic are Google SEO and social media content creation.'

const SpuunPage = () => {
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

      <Navbar hasBack />

      <div className="container text-contentDark">
        <div className="sm:pt-28 pt-24 sm:pb-20 pb-8">
          <Image
            className="w-[800px] mx-auto object-contain sm:rounded-2xl rounded-lg sm:shadow-2xl shadow-lg"
            src="/images/tcmfinder/cover.png"
            alt="Cover Image of TCMFinder"
            height={600}
            width={1000}
          />
        </div>

        <div className="sm:mb-4 mb-3">
          <Image
            className="sm:w-8 sm:h-8 w-6 h-6 rounded"
            src="/images/tcmfinder/logo.png"
            alt="Logo of TCMFinder"
            height={32}
            width={32}
          />
        </div>

        <h1 className="sm:text-5xl text-4xl font-bold mb-3 leading-snug ">
          TCMFinder
        </h1>

        <div className="text-lg font-medium sm:mb-8 mb-6  flex items-center gap-x-3 flex-wrap">
          <span>
            TCMFinder.org<span className="mx-2">•</span>
            2023
          </span>
          <span>-</span>

          <div className="flex items-center gap-x-4">
            <Link
              className="underline text-blue-700 md:hover:opacity-70 flex items-center gap-1"
              href="https://tcmfinder.org"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Website className="w-5 h-5" /> Website
            </Link>

            {/* <Link
              className="underline text-blue-700 md:hover:opacity-70 flex items-center gap-1"
              href="https://play.google.com/store/apps/details?id=space.palate"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Android className="w-5 h-5" /> Android
            </Link> */}
          </div>
        </div>

        <div className="grid lg:grid-cols-2">
          <p className="sm:text-lg lg:mr-16">
            TCMFinder is a hobby project that helps Singaporean find the best
            Traditional Chinese Medicine (TCM) clinic based on their symptoms.
          </p>

          <div className="grid sm:grid-cols-2  lg:mt-0 mt-16">
            <div className="mr-8">
              <div className="mb-8">
                <h2 className="font-bold mb-2 text-sm tracking-widest">ROLE</h2>
                <p>Designer & Developer</p>
              </div>

              <div className="flex flex-col gap-2 sm:mb-0 mb-8">
                <h2 className="font-bold text-sm tracking-widest">
                  TECH STACK
                </h2>
                <p>Next.js, Meilisearch, Sanity, Figma</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:mb-0 mb-8">
              <h2 className="font-bold text-sm tracking-widest">CREDITS</h2>
              <p>Zheng De TCM Healthcare</p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[664px] px-8 py-6 bg-white rounded-xl sm:my-16 my-12 ">
          <h2 className="font-bold mb-2 text-sm tracking-widest">PROBLEM</h2>
          <p className="sm:text-lg">
            Finding the right TCM clinic for a specific chronic symptom is hard.
            It takes asking around, reading hundreds of Google Maps reviews, and
            trying multiple clinics.
          </p>
        </div>

        {/* <div className="max-w-[600px] mx-auto sm:my-16 my-8 sm:text-lg ">
          <div className="mb-6 flex flex-col gap-1">
            <p className="mb-1">
              I had a chronic back pain. So I needed a clinic that:
            </p>
            <p>1. Has a natural treatment (no surgery)</p>
            <p>2. Is not too far away</p>
            <p>3. Has cured chronic back pain patients before</p>
            <p>4. Is well-rated, 4.5 stars or above</p>
          </div>
        </div> */}

        <Image
          className="sm:rounded-2xl rounded-lg shadow-lg mx-auto"
          src="/images/tcmfinder/map_search.png"
          alt="Google Maps search result"
          width={250}
          height={600}
        />

        <div className="max-w-[600px] mx-auto sm:my-16 my-8 sm:text-lg ">
          <div className="mb-6 flex flex-col gap-1">
            <p className="mb-1">
              <p className="mb-1">
                My process of finding a suitable clinic for chronic back pain:
              </p>
            </p>
            <p>1. Search for &quot;best tcm near me&quot; on Google Maps.</p>
            <p>2. Click on the ones that are not too far away.</p>
            <p>
              3. Go through all their reviews to find whether they have cured
              chronic back pain before.
            </p>
          </div>

          <p className="mb-6">
            It took me hours to shortlist a few clinics, and{' '}
            <strong>6 months trying 4 different clinics</strong> to finally land
            on the one that could heal me.
          </p>
        </div>

        <div className="mx-auto max-w-[664px] px-8 py-6 bg-white rounded-xl sm:my-16 my-14 ">
          <h2 className="font-bold mb-2 text-sm tracking-widest">OUR VISION</h2>
          <p className="sm:text-lg">
            To ensure others would never have to go through the same pain, we
            need a clinic search engine that factors in rating, distance, and{' '}
            <strong>symptoms</strong>, which is what&apos;s missing on Google
            Maps.
          </p>
        </div>

        <div className="max-w-[600px] mx-auto sm:mt-24 mt-20 mb-14">
          <h2 className="font-bold mb-2 text-sm tracking-widest er">
            FEATURES
          </h2>
          <h3 className="text-2xl font-semibold mb-3 ">Symptoms Matching</h3>
          <p className="sm:text-lg  mb-6">
            I scrapped and indexed over 30,000 reviews across every TCM clinics
            in the entire country to make them easily searchable.
          </p>

          <p className="sm:text-lg ">
            Searching for &quot;back pain&quot; will give you top clinics that
            have the most back pain related reviews.
          </p>
        </div>

        <Image
          className="mx-auto rounded-xl shadow-lg"
          src="/images/tcmfinder/reviews_browse.png"
          alt="TCMFinder search result"
          width={250}
          height={500}
        />

        <div className="max-w-[600px] mx-auto sm:mt-24 mt-20 mb-14 ">
          <h3 className="text-2xl font-semibold mb-3">Distance Sorting</h3>
          <p className="sm:text-lg">
            Distance sorting serves users who prioritize proximity over the best
            clinic, as long as it treats their symptoms
          </p>
        </div>

        <div className="max-w-[600px] h-auto mx-auto">
          <Image
            className="rounded-xl shadow-lg"
            src={'/images/tcmfinder/distance_sort.png'}
            width={900}
            height={563}
            alt={`Distance sorting`}
          />
        </div>

        <div className="max-w-[600px] mx-auto sm:mt-24 mt-20 mb-14 ">
          <h3 className="text-2xl font-semibold mb-3">Clinic Details</h3>
          <p className="sm:text-lg">
            For each clinic, we provide the reviews, location, contact, and
            opening hours. This helps users know exactly where and when to visit
            the clinic.
          </p>
        </div>

        <div className="flex items-center justify-center sm:gap-20 gap-6 text-center">
          <div>
            <Image
              className="sm:rounded-2xl rounded-lg shadow-lg"
              src="/images/tcmfinder/clinicpage1.png"
              alt="Clinic page top"
              width={250}
              height={600}
            />
          </div>

          <div>
            <Image
              className="sm:rounded-2xl rounded-lg shadow-lg"
              src="/images/tcmfinder/clinicpage2.png"
              alt="Clinic page bottom"
              width={250}
              height={600}
            />
          </div>
        </div>

        <div className="max-w-[600px] mx-auto sm:mt-24 mt-20 mb-14">
          <h2 className="font-bold mb-2 text-sm tracking-widest ">RESULTS</h2>

          <p className="sm:text-lg ">
            On average, the website gets <strong>5-10 clicks per day</strong>.
            The main drivers of our traffic are Google SEO and social media
            content creation.
          </p>
        </div>

        <div className="max-w-[600px] h-auto mx-auto mb-14">
          <Image
            className="rounded-xl shadow-lg"
            src={'/images/tcmfinder/search_analytics.png'}
            width={900}
            height={563}
            alt={`Google Analytics result`}
          />
        </div>

        <div className="max-w-[600px] mx-auto mb-14">
          <p className="sm:text-lg ">
            The website requires daily content creation to attract new users.
            Due to the lack of resources, it is no longer being maintained, but
            may be open-sourced in the future.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default SpuunPage
