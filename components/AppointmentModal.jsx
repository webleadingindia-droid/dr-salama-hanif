"use client";

import { useEffect, useRef, useState } from "react";
import { TREATMENT_OPTIONS } from "@/lib/data";

export default function AppointmentModal() {
  const [status, setStatus] = useState("idle");
  const modalRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500);
  }

  useEffect(() => {
    const el = modalRef.current;
    if (!el) return;
    const onHidden = () => setStatus("idle");
    el.addEventListener("hidden.bs.modal", onHidden);
    return () => el.removeEventListener("hidden.bs.modal", onHidden);
  }, []);

  return (
    <>
      <style>{`
        /* ========= BACKDROP ========= */
        #apptModal.modal.show {
          background: rgba(15, 8, 16, 0.55);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        #apptModal .modal-dialog {
          max-width: 620px;
        }

        /* ========= SHELL ========= */
        #apptModal .appt-modal__content {
          border: 0;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 40px 90px rgba(15, 8, 16, 0.45),
            0 10px 30px rgba(194, 24, 91, 0.18);
          background: #fff;
        }
        #apptModal .appt-modal__glow {
          position: absolute;
          top: -140px;
          right: -140px;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 211, 110, 0.45), transparent 65%);
          filter: blur(30px);
          pointer-events: none;
          z-index: 0;
        }

        /* ========= HEADER ========= */
        #apptModal .appt-modal__header {
          position: relative;
          z-index: 1;
          padding: 24px 26px;
          border-bottom: 0;
          background: linear-gradient(135deg, #2a0e1b 0%, #4a1230 55%, #7c1d47 100%);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
        }
        #apptModal .appt-modal__head-left {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
        }
        #apptModal .appt-modal__head-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          border-radius: 14px;
          display: grid;
          place-items: center;
          font-size: 1.3rem;
          color: #fff;
          background: linear-gradient(135deg, #c2185b, #ff6f91);
          box-shadow: 0 10px 22px rgba(255, 111, 145, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.35);
        }
        #apptModal .appt-modal__title {
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: #fff;
          margin: 0 0 3px;
          line-height: 1.25;
        }
        #apptModal .appt-modal__subtitle {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }
        #apptModal .appt-modal__close {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #fff;
          display: grid;
          place-items: center;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        #apptModal .appt-modal__close:hover {
          background: rgba(255, 255, 255, 0.22);
          transform: rotate(90deg);
        }

        /* ========= BODY ========= */
        #apptModal .appt-modal__body {
          position: relative;
          z-index: 1;
          padding: 26px;
          background: #fff;
        }

        /* ========= FORM ========= */
        #apptModal .appt-form { display: flex; flex-direction: column; gap: 16px; }
        #apptModal .appt-form__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        #apptModal .appt-field__label {
          display: block;
          font-size: 0.82rem;
          font-weight: 600;
          color: #1a1220;
          margin-bottom: 7px;
        }
        #apptModal .appt-field__label span { color: #c2185b; margin-left: 2px; }
        #apptModal .appt-field__optional {
          font-weight: 500;
          color: #6b6173;
          font-size: 0.75rem;
        }
        #apptModal .appt-field__control {
          position: relative;
          display: flex;
          align-items: center;
        }
        #apptModal .appt-field__control--textarea {
          align-items: flex-start;
          padding-top: 2px;
        }
        #apptModal .appt-field__icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.9rem;
          color: rgba(194, 24, 91, 0.55);
          pointer-events: none;
          transition: color 0.2s ease;
          z-index: 1;
        }
        #apptModal .appt-field__control--textarea .appt-field__icon {
          top: 14px;
          transform: none;
        }
        #apptModal .appt-field__control:focus-within .appt-field__icon {
          color: #c2185b;
        }
        #apptModal .appt-field__input {
          width: 100%;
          padding: 12px 14px 12px 40px;
          font-size: 0.9rem;
          color: #1a1220;
          background: #fdf9fb;
          border: 1.5px solid rgba(26, 18, 32, 0.08);
          border-radius: 12px;
          outline: none;
          transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
          font-family: inherit;
        }
        #apptModal .appt-field__input::placeholder {
          color: rgba(107, 97, 115, 0.6);
        }
        #apptModal .appt-field__input:hover {
          border-color: rgba(194, 24, 91, 0.2);
        }
        #apptModal .appt-field__input:focus {
          background: #fff;
          border-color: #c2185b;
          box-shadow: 0 0 0 4px rgba(194, 24, 91, 0.1);
        }
        #apptModal .appt-field__select {
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23c2185b' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>");
          background-repeat: no-repeat;
          background-position: right 14px center;
          background-size: 16px;
          padding-right: 42px;
          cursor: pointer;
        }
        #apptModal textarea.appt-field__input {
          resize: vertical;
          min-height: 84px;
          padding-top: 12px;
          line-height: 1.5;
        }

        /* ========= BUTTONS ========= */
        #apptModal .appt-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 14px 24px;
          border-radius: 999px;
          border: 0;
          font-size: 0.92rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.25s ease, background-position 0.5s ease;
          position: relative;
          overflow: hidden;
        }
        #apptModal .appt-btn--full { width: 100%; }
        #apptModal .appt-btn--primary {
          color: #fff;
          background: linear-gradient(135deg, #c2185b 0%, #e91e63 55%, #ff6f91 100%);
          background-size: 200% 100%;
          box-shadow: 0 10px 22px rgba(194, 24, 91, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.25);
        }
        #apptModal .appt-btn--primary:hover:not(:disabled) {
          color: #fff;
          transform: translateY(-2px);
          background-position: 100% 0;
          box-shadow: 0 16px 30px rgba(194, 24, 91, 0.42);
        }
        #apptModal .appt-btn--primary:disabled {
          opacity: 0.75;
          cursor: not-allowed;
        }
        #apptModal .appt-btn__arrow { transition: transform 0.25s ease; }
        #apptModal .appt-btn--submit:hover:not(:disabled) .appt-btn__arrow {
          transform: translateX(4px);
        }
        #apptModal .appt-btn--submit { margin-top: 4px; }
        #apptModal .appt-btn__spinner {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.35);
          border-top-color: #fff;
          animation: appt-spin 0.7s linear infinite;
        }
        @keyframes appt-spin { to { transform: rotate(360deg); } }

        /* ========= TRUST STRIP ========= */
        #apptModal .appt-trust {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
          padding-top: 14px;
          margin-top: 4px;
          border-top: 1px dashed rgba(26, 18, 32, 0.08);
        }
        #apptModal .appt-trust__item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: #6b6173;
          font-weight: 500;
        }
        #apptModal .appt-trust__item i { color: #c2185b; font-size: 0.85rem; }

        /* ========= SUCCESS ========= */
        #apptModal .appt-success {
          text-align: center;
          padding: 14px 4px 4px;
          animation: appt-fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes appt-fade-up {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        #apptModal .appt-success__icon-wrap {
          position: relative;
          width: 88px;
          height: 88px;
          margin: 0 auto 22px;
          display: grid;
          place-items: center;
        }
        #apptModal .appt-success__icon {
          position: relative;
          z-index: 2;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 2rem;
          color: #fff;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          box-shadow: 0 14px 30px rgba(34, 197, 94, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.35);
          animation: appt-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes appt-pop {
          0% { transform: scale(0); }
          70% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        #apptModal .appt-success__ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid rgba(34, 197, 94, 0.4);
          animation: appt-pulse 2s ease-out infinite;
        }
        #apptModal .appt-success__ring--2 { animation-delay: 0.8s; }
        @keyframes appt-pulse {
          0% { transform: scale(0.9); opacity: 0.8; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        #apptModal .appt-success__title {
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #1a1220;
          margin: 0 0 10px;
        }
        #apptModal .appt-success__text {
          font-size: 0.92rem;
          line-height: 1.65;
          color: #6b6173;
          max-width: 380px;
          margin: 0 auto 22px;
        }
        #apptModal .appt-success__meta {
          display: flex;
          justify-content: center;
          gap: 22px;
          flex-wrap: wrap;
          padding: 16px 18px;
          border-radius: 14px;
          background: #fdf7f9;
          border: 1px dashed rgba(194, 24, 91, 0.18);
          margin-bottom: 24px;
        }
        #apptModal .appt-success__meta-item {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.8rem;
          color: #6b6173;
          font-weight: 500;
        }
        #apptModal .appt-success__meta-item i { color: #c2185b; }

        /* ========= RESPONSIVE ========= */
        @media (max-width: 575px) {
          #apptModal .modal-dialog { margin: 12px; max-width: none; }
          #apptModal .appt-modal__content { border-radius: 20px; }
          #apptModal .appt-modal__header { padding: 20px; }
          #apptModal .appt-modal__head-icon { width: 42px; height: 42px; font-size: 1.1rem; }
          #apptModal .appt-modal__title { font-size: 1rem; }
          #apptModal .appt-modal__body { padding: 20px; }
          #apptModal .appt-form__row { grid-template-columns: 1fr; }
          #apptModal .appt-trust { gap: 12px; }
          #apptModal .appt-trust__item { font-size: 0.72rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          #apptModal .appt-success,
          #apptModal .appt-success__icon,
          #apptModal .appt-success__ring {
            animation: none !important;
          }
          #apptModal .appt-success__ring { display: none; }
          #apptModal .appt-modal__close:hover { transform: none; }
        }
      `}</style>

      <div
        className="modal fade"
        id="apptModal"
        ref={modalRef}
        tabIndex={-1}
        aria-labelledby="apptModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content appt-modal__content">
            <div className="appt-modal__glow" aria-hidden />

            {/* Header */}
            <div className="modal-header appt-modal__header">
              <div className="appt-modal__head-left">
                <div className="appt-modal__head-icon">
                  <i className="bi bi-calendar2-heart-fill" />
                </div>
                <div>
                  <h5 className="modal-title appt-modal__title" id="apptModalLabel">
                    Book Your Appointment
                  </h5>
                  <p className="appt-modal__subtitle">
                    Consultation with Dr. Salama Haneef
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="appt-modal__close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="bi bi-x-lg" />
              </button>
            </div>

            {/* Body */}
            <div className="modal-body appt-modal__body">
              {status === "success" ? (
                <div className="appt-success">
                  <div className="appt-success__icon-wrap">
                    <span className="appt-success__ring" aria-hidden />
                    <span className="appt-success__ring appt-success__ring--2" aria-hidden />
                    <div className="appt-success__icon">
                      <i className="bi bi-check-lg" />
                    </div>
                  </div>
                  <h4 className="appt-success__title">Request Received!</h4>
                  <p className="appt-success__text">
                    Your appointment request has been sent. Our team will contact
                    you shortly to confirm your slot.
                  </p>
                  <div className="appt-success__meta">
                    <div className="appt-success__meta-item">
                      <i className="bi bi-clock-fill" />
                      <span>Response in ~30 mins</span>
                    </div>
                    <div className="appt-success__meta-item">
                      <i className="bi bi-shield-check" />
                      <span>Your data is safe</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="appt-btn appt-btn--primary appt-btn--full"
                    data-bs-dismiss="modal"
                  >
                    <span>Close</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="appt-form">
                  <div className="appt-form__row">
                    <div className="appt-field">
                      <label className="appt-field__label">
                        Patient Name <span>*</span>
                      </label>
                      <div className="appt-field__control">
                        <i className="bi bi-person-fill appt-field__icon" />
                        <input
                          type="text"
                          className="appt-field__input"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                    </div>

                    <div className="appt-field">
                      <label className="appt-field__label">
                        Phone Number <span>*</span>
                      </label>
                      <div className="appt-field__control">
                        <i className="bi bi-telephone-fill appt-field__icon" />
                        <input
                          type="tel"
                          className="appt-field__input"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="appt-field">
                    <label className="appt-field__label">
                      Problem / Treatment <span>*</span>
                    </label>
                    <div className="appt-field__control">
                      <i className="bi bi-heart-pulse-fill appt-field__icon" />
                      <select
                        className="appt-field__input appt-field__select"
                        required
                        defaultValue=""
                      >
                        <option value="">Select treatment needed</option>
                        {TREATMENT_OPTIONS.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="appt-field">
                    <label className="appt-field__label">Preferred Date</label>
                    <div className="appt-field__control">
                      <i className="bi bi-calendar2-fill appt-field__icon" />
                      <input type="date" className="appt-field__input" />
                    </div>
                  </div>

                  <div className="appt-field">
                    <label className="appt-field__label">
                      Message <span className="appt-field__optional">(Optional)</span>
                    </label>
                    <div className="appt-field__control appt-field__control--textarea">
                      <i className="bi bi-chat-left-text-fill appt-field__icon" />
                      <textarea
                        className="appt-field__input"
                        rows={3}
                        placeholder="Describe your symptoms briefly…"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="appt-btn appt-btn--primary appt-btn--full appt-btn--submit"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <>
                        <span className="appt-btn__spinner" />
                        <span>Submitting…</span>
                      </>
                    ) : (
                      <>
                        <i className="bi bi-calendar2-check-fill" />
                        <span>Book Appointment</span>
                        <i className="bi bi-arrow-right appt-btn__arrow" />
                      </>
                    )}
                  </button>

                  <div className="appt-trust">
                    <div className="appt-trust__item">
                      <i className="bi bi-shield-check" />
                      <span>100% Confidential</span>
                    </div>
                    <div className="appt-trust__item">
                      <i className="bi bi-gift-fill" />
                      <span>50% off first visit</span>
                    </div>
                    <div className="appt-trust__item">
                      <i className="bi bi-clock-history" />
                      <span>Quick response</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}