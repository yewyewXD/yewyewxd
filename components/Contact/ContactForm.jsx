import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form>
      <div className="flex flex-col mb-3">
        <label htmlFor="name" className="text-dark">
          Your name
        </label>
        <input
          className="ContactInput"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <div className="flex flex-col mb-3">
        <label htmlFor="email" className="text-dark">
          Your email
        </label>
        <input
          className="ContactInput"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="text-dark">
          Your message
        </label>
        <textarea
          className="ContactInput resize-none"
          rows="9"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </div>

      <button className="button-main mt-5">Submit</button>
    </form>
  );
};

export default ContactForm;
