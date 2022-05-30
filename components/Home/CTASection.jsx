import React from "react";

const CTASection = ({ openCalendly }) => {
  return (
    <section className="py-28">
      <div className="container">
        <div className="p-10 pt-14 rounded-3xl bg-secondary text-center mx-6">
          <div className="font-heading text-5xl font-bold">
            Let&apos;s change the world{" "}
            <u className="underline-main">together</u>
          </div>

          <div className="text-light font-medium font-heading mt-6 mb-8 w-8/12 mx-auto">
            Jump in on a call with me and I will explain how to transform your
            ideas into an actual web3.0 product. I look forward to our
            collaboration!
          </div>

          <button className="button-main" onClick={openCalendly}>
            Get a free consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
