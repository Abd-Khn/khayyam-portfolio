import React from "react";
import "./Services.css";

const servicesList = [
  "Sponsored content (Reels, TikTok, YouTube, Podcast)",
  "Brand story & integrations",
  "Product launches & campaigns",
  "Product reviews",
  "Long-term partnerships",
  "Event coverage & experiential content",
];

const Services = () => {
  return (
    <div className="services-container" id="Services">
      <div className="services-header" data-aos="fade-down">
        <div className="aboutdiv">
          <p className="about-section-number">05/</p>
          <p className="about-section-number">Work with me</p>
        </div>
        <p className="awards-title services-title">
          HOW BRANDS CAN
          <br /> WORK WITH ME
        </p>
      </div>
      <div className="services-content" data-aos="fade-up">
        <ul className="services-list">
          {servicesList.map((item, index) => (
            <li key={index} className="services-list-item">
              {item}
            </li>
          ))}
        </ul>
        <p className="services-note">
          I prefer collaborations where creative freedom and working together go
          hand in hand, with long-term alignment.
        </p>
      </div>
    </div>
  );
};

export default Services;
