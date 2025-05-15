import React from "react";
import Image from "next/image";
import "./AboutKaabilModal.css";

const AboutKaabilModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="about-kaabil-modal-overlay modal_popup_mathematics" onClick={onClose}>
      <div
        className="about-kaabil-modal-content common-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="about-kaabil-modal-close common-modal-close" onClick={onClose}>
          ×
        </button>
        <div className="about-kaabil-modal-body common-modal-body">
          <div className="about-kaabil-modal-text">
            <h2>About KAABIL AI</h2>
            <p>
              We Are Your Custom Model, Tailored For Specific Needs. Why Write Prompt When Our AI Understands You Immediately? Why Switch Multiple Tools When One Interface Handles Everything? Why Use Public Servers When Your Data Remains Private?
            </p>
            <p>
              We Are Curriculum-Trained On Your Materials For Precise Guidance. We Provide Inline Analytics, Saving All Your Time And Effort.
            </p>
            <div className="button-container">
              <a href="https://app.kaabil.me/" className="about-kaabil-try-now-btn">
                Try Kaabil.me Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutKaabilModal; 