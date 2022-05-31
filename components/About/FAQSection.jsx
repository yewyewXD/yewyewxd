import React, { useState } from "react";
import { Root, Trigger, Content } from "@radix-ui/react-collapsible";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import FAQs from "../../json/FAQs.json";

const Collapsible = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <Root className="mt-10 w-5/12" open={open} onOpenChange={setOpen}>
      <Trigger
        asChild
        className={`cursor-pointer ${
          open ? "text-main" : "text-white border-b border-gray-700"
        }`}
      >
        <div className="flex items-center justify-between pb-4">
          <div className="transition-colors duration-300 font-medium text-xl font-heading">
            {question}
          </div>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={`w-3 transition duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </Trigger>

      <Content
        className={`text-dark pb-4 ${open ? "border-b border-gray-700" : ""}`}
      >
        {answer}
      </Content>
    </Root>
  );
};

const FAQSection = () => {
  return (
    <section className="pt-24">
      <div className="container">
        <div className="text-center">
          <big className="section-title">FAQ</big>
          <h2 className="mt-2 mb-4">Still have questions?</h2>
          <div className="text-dark mx-auto w-8/12">
            I have been asked a lot about these questions, so I guess you might
            be interested to know them too!
          </div>
        </div>

        <div className="flex justify-between flex-wrap mt-4">
          {FAQs.map((faq) => (
            <Collapsible
              key={faq.answer}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
