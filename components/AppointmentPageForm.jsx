"use client";

import Link from "next/link";
import { useState } from "react";

const TREATMENT_OPTIONS_FULL = [
  "PCOD / PCOS Treatment",
  "Infertility Treatment",
  "Ovarian Cyst",
  "Fibroid Treatment",
  "Irregular Periods",
  "Menstrual Pain",
  "Pregnancy Care",
  "Normal Delivery Consultation",
  "Menopause Problems",
  "Urinary Infection",
  "Skin / Hair Issues",
  "Depression Counseling",
  "General Checkup",
  "Other",
];

export default function AppointmentPageForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500);
  }

  if (status === "success") {
    return (
      <div className="text-center py-5">
        <div
          style={{
            width: 90,
            height: 90,
            background: "var(--pink-light)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            fontSize: "2.5rem",
            color: "var(--pink)",
          }}
        >
          <i className="bi bi-check-circle-fill" />
        </div>
        <h4>Appointment Request Received!</h4>
        <p className="text-muted">
          Your appointment request has been received. Our team will contact you shortly to
          confirm your slot.
        </p>
        <Link href="/" className="btn-pink btn mt-2">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <form id="appointmentForm" onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Patient Name *</label>
          <input type="text" className="form-control" placeholder="Full name" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Phone Number *</label>
          <input type="tel" className="form-control" placeholder="Mobile number" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Age</label>
          <input type="number" className="form-control" placeholder="Your age" min={1} max={120} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Preferred Date *</label>
          <input type="date" className="form-control" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Preferred Time</label>
          <select className="form-select" defaultValue="">
            <option value="">Select slot</option>
            <option>Morning (9 AM – 12 PM)</option>
            <option>Evening (6 PM – 9 PM)</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Problem / Treatment *</label>
          <select className="form-select" required defaultValue="">
            <option value="">Select treatment</option>
            {TREATMENT_OPTIONS_FULL.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div className="col-12">
          <label className="form-label">Describe Your Problem (Optional)</label>
          <textarea
            className="form-control"
            rows={4}
            placeholder="Please describe your symptoms or concerns briefly to help the doctor prepare…"
          />
        </div>
        <div className="col-12">
          <div className="form-check mb-2">
            <input className="form-check-input" type="checkbox" id="firstVisit" />
            <label className="form-check-label" htmlFor="firstVisit" style={{ fontSize: ".88rem" }}>
              This is my first visit (50% discount applies)
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn-pink btn btn-lg w-100" disabled={status === "submitting"}>
            {status === "submitting" ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" />
                Submitting…
              </>
            ) : (
              <>
                <i className="bi bi-calendar-check me-2" />
                Confirm Appointment Request
              </>
            )}
          </button>
          <p className="text-center text-muted mt-3" style={{ fontSize: ".8rem" }}>
            We will call you within 2 hours to confirm your appointment slot.
          </p>
        </div>
      </div>
    </form>
  );
}
