import React from "react";

const CTASection = () => {
  return (
    <section className="py-28">
      <div className="container">
        <div className="p-10 pt-14 rounded-3xl bg-secondary text-center mx-6">
          <div className="font-heading text-5xl font-bold">
            Let&apos;s change the world{" "}
            <u className="underline-main">together</u>
          </div>

          <div className="text-light font-medium font-heading mt-6 mb-8 w-8/12 mx-auto">
            Schedule a free consultation, either video or voice call with me on
            Calendly. I look forward to our collaboration!
          </div>

          <button className="button-main">Get a free consultation</button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
