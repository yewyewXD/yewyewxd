import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { Website } from '@/components/Icons'

const META_TITLE = "Spuun Case Study | Kang's Portfolio"
const META_DESCRIPTION =
  'On average, we receive 20 online orders per day, leading us to estimate revenue of ฿400,000 (~10k USD) per month, solely from online orders! We will soon integrate this delivery solution into many of our restaurants, which could easily 4x our revenue!'

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

      <div className="container">
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

        <h1 className="sm:text-5xl text-4xl font-bold mb-3 leading-snug text-contentDark">
          TCMFinder
        </h1>

        <div className="text-lg font-medium sm:mb-8 mb-6 text-default flex items-center gap-x-3 flex-wrap">
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
            TCMFinder is a non-profit project that helps Singaporean find the
            best Traditional Chinese Medicine (TCM) clinic based on their
            symptoms.
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
                <p>Next.js, Meilisearch, Sanity, Figma</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:mb-0 mb-8">
              <h2 className="font-bold text-sm tracking-widest">CREDITS</h2>
              <p>Zheng De TCM Healthcare</p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[664px] px-8 py-6 bg-white rounded-xl sm:my-16 my-12 text-contentDark">
          <h2 className="font-bold mb-2 text-sm tracking-widest">PROBLEM</h2>
          <p className="sm:text-lg">
            Finding the right TCM clinic for a specific chronic symptom is hard.
            It takes asking around, reading hundreds of Google Maps reviews, and
            trying multiple clinics.
          </p>
        </div>

        <div className="flex items-center justify-center sm:gap-20 gap-6 text-center">
          <div>
            <Image
              className="sm:rounded-2xl rounded-lg shadow-lg"
              src="/images/spuun/casestudy1-1.png"
              alt="KFC original price"
              width={250}
              height={600}
            />
            <p className="text-footer text-sm mt-6">
              Original Price
              <br className="sm:hidden" />
              <span className="sm:inline hidden"> -</span> ฿159
            </p>
          </div>

          <div>
            <Image
              className="sm:rounded-2xl rounded-lg shadow-lg"
              src="/images/spuun/casestudy1-2.png"
              alt="KFC price on GrabFood"
              width={250}
              height={600}
            />
            <p className="text-footer text-sm mt-6">
              Price on GrabGood
              <br className="sm:hidden" />
              <span className="sm:inline hidden"> -</span> ฿179
            </p>
          </div>
        </div>

        <div className="max-w-[600px] mx-auto sm:my-16 my-8 sm:text-lg text-default">
          <p className="mb-6">
            From the comparisons above, you can see that the price of fast food
            listed on GrabFood is about 12% higher. This percentage is usually
            significantly higher for restaurants.
          </p>

          <p className="mb-6">
            To ensure profitability despite the 15% fee for each {"'pick-up'"}{' '}
            order, we would need to raise prices by at least 10% to break even,
            given that our net profit margin per order is approximately 5%.
          </p>

          <p>
            If the customer opts for delivery, the fee will escalate to 30%,
            forcing us to increase the price even more. This could lead to
            numerous customer complaints.
          </p>
        </div>

        <div className="mx-auto max-w-[664px] px-8 py-6 bg-white rounded-xl sm:my-16 my-14 text-contentDark">
          <h2 className="font-bold mb-2 text-sm tracking-widest">OUR VISION</h2>
          <p className="sm:text-lg">
            Since COVID, many customers prefer ordering from home. We need to
            maintain our reputation as the top Singaporean restaurant in Bangkok
            without compromising profitability. What if we developed our own
            food delivery app and avoided commission fees altogether?
          </p>
        </div>

        <div className="max-w-[600px] mx-auto sm:mt-24 mt-20 mb-14">
          <h2 className="font-bold mb-2 text-sm tracking-widest text-defaulter">
            FEATURES
          </h2>
          <h3 className="text-2xl font-semibold mb-3 text-contentDark">
            Online Ordering
          </h3>
          <p className="sm:text-lg text-contentDark">
            We are launching dedicated web stores for each of our restaurants,
            starting with{' '}
            <Link
              className="md:hover:opacity-70 underline"
              href="https://ohjackie.spuun.me/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Oh Jackie
            </Link>{' '}
            as a trial run. Customers can now conveniently order their favorite
            Singaporean dishes online at the original price!
          </p>
        </div>

        <Image
          className="mx-auto rounded-xl shadow-lg"
          src="/images/spuun/curry_puff.png"
          alt="Add to cart modal on the Spuun web store"
          width={250}
          height={500}
        />

        <div className="max-w-[600px] mx-auto sm:mt-24 mt-20 mb-14 text-contentDark">
          <h3 className="text-2xl font-semibold mb-3">Payment Processing</h3>
          <p className="sm:text-lg">
            We use Stripe for processing payments and Stripe Connect for
            managing payments for each of our restaurants separately. This setup
            is highly scalable, allowing us to seamlessly onboard additional
            restaurants onto our platform in the future.
          </p>
        </div>

        <div className="max-w-[600px] h-auto mx-auto">
          <Image
            className="rounded-xl shadow-lg"
            src={'/images/spuun/feature2.svg'}
            width={900}
            height={563}
            alt={`Stripe Payments`}
          />
        </div>

        <div className="max-w-[600px] mx-auto sm:mt-24 mt-20 mb-14 text-contentDark">
          <h3 className="text-2xl font-semibold mb-3">Food Delivery</h3>
          <p className="sm:text-lg">
            {`
          We're thrilled to announce our partnership with Lalamove! Now, with just one click, we can easily match with a driver and get the deliveries sorted in no time. Plus, here's the cherry on top: Lalamove's fare rates are usually 10% lower than GrabFood's, making it a win-win situation for everyone involved!
            `}
          </p>
        </div>

        <Image
          className="mx-auto rounded-xl shadow-lg"
          src="/images/spuun/feature3.png"
          alt="Lalamove and Spuun partnership"
          width={600}
          height={400}
        />

        <div className="max-w-[600px] mx-auto sm:mt-24 mt-20 mb-14">
          <h2 className="font-bold mb-2 text-sm tracking-widest text-contentDark">
            RESULTS
          </h2>

          <p className="sm:text-lg text-default">
            On average, we receive 20 online orders per day, leading us to
            estimate{' '}
            <strong>
              revenue of ฿400,000 (~10k USD) per month, solely from online
              orders!
            </strong>{' '}
            We will soon integrate this delivery solution into many of our
            restaurants, which could <strong>easily 4x our revenue!</strong>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default SpuunPage
