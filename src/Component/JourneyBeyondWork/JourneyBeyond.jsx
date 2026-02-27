import React from "react";
import "./JourneyBeyond.css";

const JourneyBeyondWork = () => {
  return (
    <div className="Section6MainContainer">
      <div
        className="JourneyBeyongWorkContainer"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div
          className="aboutdiv"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <p
            className="about-section-number"
            style={{ color: "#FFFFFF" }}
          >
            06/
          </p>
          <p
            className="about-section-number"
            style={{ color: "#FFFFFF" }}
          >
            Updates & notes
          </p>
        </div>
        <div className="BeyondWorkBottomContainer">
          <h2>Notes & logs</h2>
          <p>
            Occasional updates, behind-the-scenes thoughts, travel notes, and
            reflections on content, creativity, and showing up consistently.
            This space mirrors how I think, not how often I post.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JourneyBeyondWork;
