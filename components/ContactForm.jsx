"use client";

import { useRef, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const formRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      formRef.current?.reset();
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  }

  return (
    <form id="contactForm" ref={formRef} onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Your Name *</label>
        <input type="text" className="form-control" placeholder="Enter your name" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone Number *</label>
        <input type="tel" className="form-control" placeholder="Your phone number" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Subject</label>
        <input type="text" className="form-control" placeholder="What is this regarding?" />
      </div>
      <div className="mb-4">
        <label className="form-label">Message *</label>
        <textarea className="form-control" rows={5} placeholder="Type your message here…" required />
      </div>
      <button type="submit" className="btn-pink btn w-100" disabled={status === "sending"}>
        {status === "sending" ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" />
            Sending…
          </>
        ) : status === "sent" ? (
          "✅ Message Sent!"
        ) : (
          <>
            <i className="bi bi-send-fill me-2" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
