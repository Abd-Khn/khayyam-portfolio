import React from "react";
import "./Awards.css";

const collaborations = [
  {
    title: "Tech & Consumer Electronics",
    description: "Partnerships with tech brands—reviews, launches, and storytelling that fits how people actually discover and trust products."
  },
  {
    title: "Lifestyle & Fashion",
    description: "Collaborations with lifestyle and fashion products—content that feels native to the feed and true to how I show up day to day."
  },
  {
    title: "Travel & Experiences",
    description: "Travel and experience-led campaigns—real moments, real places, and stories that connect with people who care about how they spend their time."
  },
  {
    title: "Digital Platforms & Campaigns",
    description: "Work with digital platforms and campaigns—where creative freedom and long-term alignment matter as much as reach."
  }
];

const Awards = () => {
  return (
    <section className="awards-section section-padding" id="Collaborations">
      <div className="container">
        <div className="awards-header">
          <div className="section-label" data-aos="fade-right">
            <span className="label-number">04</span>
            <span className="label-text">Collaborations</span>
          </div>
          <h2 className="awards-title">
            Brand Collaborations <br />
            <span className="text-gradient">& Industrial Work.</span>
          </h2>
        </div>

        <div className="awards-grid">
          {collaborations.map((collab, index) => (
            <div
              key={index}
              className="award-item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="award-line"></div>
              <h3 className="award-name">{collab.title}</h3>
              <p className="award-info">{collab.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
