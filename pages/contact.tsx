import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'

const META_TITLE = "Contact | Kang's Portfolio"
const META_DESCRIPTION = 'How can I help you?'

const ContactPage = () => {
  return (
    <div>
      <Navbar hasBack />

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

      <section className="h-screen flex flex-col items-center justify-center container">
        <h1 className="sm:text-4xl text-3xl mb-8 font-bold gradientText leading-normal">
          How can I help you?
        </h1>

        <div className="mx-auto w-full max-w-[550px]">
          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="a031064b-c060-43c9-a2f5-38ae67ef03b5"
            />
            <input type="hidden" name="website" value={'Portfolio'} />

            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 block text-base font-medium text-default"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 sm:px-6 px-4 text-base font-medium text-contentLighter outline-none focus:border-[#8075ff] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-2 block text-base font-medium text-default"
              >
                Message
              </label>
              <textarea
                required
                rows={4}
                name="message"
                id="message"
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 sm:px-6 px-4 text-base font-medium text-contentLighter outline-none focus:border-[#8075ff] focus:shadow-md"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="hover:shadow-form rounded-md bg-gradient-to-br from-[#adf1e0] via-[#8075ff] to-[#ff7171] transition-all duration-100 hover:opacity-80 py-3 px-8 text-base font-semibold text-white outline-none sm:w-auto w-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
