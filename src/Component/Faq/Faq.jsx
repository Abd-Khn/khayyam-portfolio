import React, { useState } from "react";
import "./Faq.css";
import Footer from "../footer/footer";

const accordionData = [
  {
    question: "What kind of content do you create?",
    answer:
      "I create long-form and short-form content across tech, lifestyle, travel, and culture—from YouTube videos and podcasts to Instagram Reels and TikTok. The common thread is authenticity and intention: nothing rushed, nothing loud for no reason.",
  },
  {
    question: "How can brands collaborate with you?",
    answer:
      "Through sponsored content (Reels, TikTok, YouTube, Podcast), brand stories and integrations, product launches, reviews, long-term partnerships, and event or experiential content. I prefer collaborations with creative freedom and long-term alignment.",
  },
  {
    question: "What makes your content different?",
    answer:
      "I focus on how people actually watch content—where they pause, where they leave, and what makes them trust a creator. Brands work with me for clarity, taste, and content that feels native to the audience, not just reach.",
  },
  {
    question: "Where can I watch or listen to your work?",
    answer:
      "YouTube for long-form, Instagram and TikTok for short-form, and All over the Place Podcast for conversations on creativity, careers, tech, and personal growth. Links are in the contact section.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      {/* <div className="MainContainerFaq">
        <div className="Faq-left-container" data-aos="fade-right">
          <div className="aboutdiv">
            <p className="about-section-number">07/</p>
            <p className="about-section-number">FAQ</p>
          </div>
          <p className="awards-title fadshfdhsfh">
            Discover
            <br className="FaqbreakLine" /> frequently asked questions
          </p>
        </div>
        <div className="Faq-right-container" data-aos="fade-left">
          {accordionData.map((item, index) => (
            <div key={index} className="perFaqContainer">
              <div
                onClick={() => toggleAccordion(index)}
                className="Faq-question-top-arrow"
              >
                <p className="Faq-Question">{item.question}</p>
                <img
                  src="/Images/Faq/arrowDown.svg"
                  alt="arrow"
                  className={activeIndex === index ? "arrow rotated" : "arrow"}
                />
              </div>
              <div
                className={`Faq-Answer-Wrapper ${activeIndex === index ? "open" : ""}`}
              >
                <p className="Faq-Answer">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default Faq;
