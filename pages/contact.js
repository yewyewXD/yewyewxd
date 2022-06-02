import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import contactMedias from "../json/contactMedias.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../components/Contact/ContactForm";
import CTASection from "../components/Home/CTASection";

const ContactPage = ({ openCalendly }) => {
  return (
    <>
      <Head>
        <title>{"Web3 React Developer - Contact"}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <section className="pt-24">
        <div className="container">
          <div className="text-center">
            <big className="section-title">Get in touch</big>
            <h2 className="mt-2 mb-4">Contact information</h2>
            <div className="text-dark mx-auto w-8/12">
              If scheduling a quick call is not what you are looking for, no
              worries! Here are some other alternative ways to reach me out.
            </div>
          </div>

          <div className="grid grid-cols-2 justify-center mt-14">
            <div className="pr-5 flex flex-col">
              <div className="rounded-lg p-10 mb-5 bg-form">
                <h4 className="mb-7">{"Social media & email"}</h4>
                {contactMedias.map((media) => (
                  <a
                    href={media.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    key={`contact${media.name}`}
                    className="flex items-center mt-4 hoverOpacity w-max"
                  >
                    {media.isEmail ? (
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="w-6 text-main"
                      />
                    ) : (
                      <Image
                        src={`/images/${media.image}`}
                        alt=""
                        height={24}
                        width={24}
                      />
                    )}
                    <big className="ml-3 text-light">{media.name}</big>
                  </a>
                ))}
              </div>

              <div className="rounded-lg p-10 mb-5 bg-form flex flex-col">
                <h4 className="mb-4">Before contacting...</h4>
                <div className="mb-2">
                  Your questions might have already been answered!
                </div>
                <Link href="/about#faq" passHref>
                  <span className="underline-main text-main font-medium flex items-center hoverOpacity">
                    <FontAwesomeIcon
                      icon={faArrowRightLong}
                      className="w-4 mr-2"
                    />{" "}
                    See FAQs
                  </span>
                </Link>
              </div>
            </div>

            <div className="bg-form rounded-lg p-10">
              <h4 className="mb-7">Send me a message</h4>
              <ContactForm />
            </div>
          </div>
        </div>

        <CTASection openCalendly={openCalendly} />
      </section>
    </>
  );
};

export default ContactPage;
