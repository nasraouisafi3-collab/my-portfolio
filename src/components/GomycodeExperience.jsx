import { useState } from 'react';
import './GomycodeExperience.css';

function GomycodeExperience() {
  const [certificateOpen, setCertificateOpen] = useState(false);

  return (
    <section className="gomycode-experience" id="gomycode">
      <div className="gomycode-inner">

        {/* HERO */}
        <div className="gomycode-hero">
          <div className="gomycode-meta">
            <span>01</span>
            <span>COME BUILD WITH AI</span>
            <span>27.09.2026</span>
          </div>

          <div className="gomycode-brand">
  <img
    src="/gomycode/gomycode-logo.webp"
    alt="GOMYCODE"
    className="gomycode-logo"
  />

  <span className="brand-x">×</span>

  <img
    src="/gomycode/nvidia-logo.png"
    alt="NVIDIA"
    className="nvidia-logo"
  />
</div>

          <h2>
            COME
            <br />
            BUILD
            <br />
            <span>WITH AI.</span>
          </h2>

          <p className="gomycode-intro">
            A one-day AI hackathon where ideas became working prototypes,
            built under time pressure with modern AI tools.
          </p>

          <div className="gomycode-scroll">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-line" />
          </div>
        </div>

        {/* CAREERMATCH */}
        <div className="gomycode-project">
          <div className="gomycode-section-label">
            <span>02</span>
            <span>WHAT I BUILT</span>
          </div>

          <div className="career-grid">
            <div className="career-copy">
              <p className="career-kicker">AI CAREER TOOL</p>

              <h3>CareerMatch</h3>

              <p className="career-description">
                An AI-powered tool that analyzes a job offer and a candidate's
                CV, identifies matching skills and evidence, highlights gaps,
                and generates practical recommendations for improving the
                application.
              </p>

              <div className="career-actions">
                <a
                  href="https://career-match-app-six.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="gomycode-button primary"
                >
                  Open CareerMatch ↗
                </a>

                <a
                  href="https://github.com/nasraouisafi3-collab/CareerMatch"
                  target="_blank"
                  rel="noreferrer"
                  className="gomycode-button secondary"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            <div className="career-visual">
              <div className="career-window">
                <div className="window-bar">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="career-placeholder">
  <img
    src="/gomycode/careermatch.png"
    alt="CareerMatch AI application"
    className="careermatch-screenshot"
  />
</div>
              </div>
            </div>
          </div>
        </div>

        {/* THE BUILD */}
        <div className="gomycode-build">
          <div className="gomycode-section-label">
            <span>03</span>
            <span>THE BUILD</span>
          </div>

          <div className="build-grid">
            <div>
              <span className="build-number">01</span>
              <h4>IDEA</h4>
              <p>
                Turn the problem of matching candidates to real job
                requirements into a transparent AI workflow.
              </p>
            </div>

            <div>
              <span className="build-number">02</span>
              <h4>AI</h4>
              <p>
                Use AI to extract requirements, evidence, missing skills and
                actionable recommendations.
              </p>
            </div>

            <div>
              <span className="build-number">03</span>
              <h4>BUILD</h4>
              <p>
                Transform the concept into a usable prototype during the
                hackathon.
              </p>
            </div>

            <div>
              <span className="build-number">04</span>
              <h4>PROTOTYPE</h4>
              <p>
                Connect the interface, backend and AI workflow into one
                working experience.
              </p>
            </div>
          </div>
        </div>

        {/* THE DAY */}
        <div className="gomycode-event">
          <div className="gomycode-section-label">
            <span>04</span>
            <span>THE DAY</span>
          </div>

          <div className="event-layout">
           <div className="event-main-card">
  <img
    src="/gomycode/gomycode-logo.webp"
    alt="GOMYCODE"
    className="event-gomycode-logo"
  />

  <strong>
    COME BUILD
    <br />
    WITH AI
  </strong>

  <small>27 SEPTEMBER 2026</small>
</div>

            <div className="event-side">
             <div className="event-small-card hackerspace-card">
  <img
    src="/gomycode/hackerspace-lac1.jpg"
    alt="GOMYCODE Hackerspace Lac 1"
  />

  <div className="event-card-overlay" />

  <div className="event-card-content">
    <span>LOCATION</span>

    <strong>
      HACKERSPACE
      <br />
      LAC 1
    </strong>
  </div>
</div>

              <div className="event-small-card orange">
                <span>FOCUS</span>
                <strong>
                  ARTIFICIAL
                  <br />
                  INTELLIGENCE
                </strong>
              </div>
            </div>
          </div>
        </div>

        {/* CERTIFICATE */}
        {/* CERTIFICATE */}
<div className="gomycode-certificate">
  <div className="gomycode-section-label">
    <span>05</span>
    <span>RECOGNITION</span>
  </div>

  <div className="certificate-content">
    <div className="certificate-heading">
      <p className="career-kicker">PARTICIPATION</p>

      <h3>
        Built.
        <br />
        Shipped.
        <br />
        <span>Experienced.</span>
      </h3>
    </div>

    <div className="certificate-preview-wrapper">
      <button
        type="button"
        className="certificate-preview"
        onClick={() => setCertificateOpen(true)}
        aria-label="View certificate"
      >
        <img
          src="/gomycode/certificate.png"
          alt="GOMYCODE Come Build with AI participation certificate"
        />

        <div className="certificate-preview-overlay">
          <span>View certificate ↗</span>
        </div>
      </button>

      <button
        type="button"
        className="certificate-button"
        onClick={() => setCertificateOpen(true)}
      >
        View certificate ↗
      </button>
    </div>
  </div>
</div>

        {/* FOOTER */}
        <div className="gomycode-footer">
          <span>GOMYCODE × NVIDIA</span>
          <span>COME BUILD WITH AI</span>
          <span>2026</span>
        </div>
      </div>

  {/* CERTIFICATE MODAL */}
{certificateOpen && (
  <div
    className="certificate-modal"
    onClick={() => setCertificateOpen(false)}
  >
    <div
      className="certificate-modal-content"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        className="certificate-close"
        onClick={() => setCertificateOpen(false)}
      >
        Close ×
      </button>

      <img
        src="/gomycode/certificate.png"
        alt="GOMYCODE Come Build with AI participation certificate"
        className="certificate-large"
      />
    </div>
  </div>
)}
     
    </section>
  );
}

export default GomycodeExperience;