import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the left section while scrolling
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: ".about-left-sticky",
        pinSpacing: false,
      });

      // Split words for smooth reveal
      if (textRef.current) {
        const splitText = new SplitType(textRef.current, { types: "words" });

        gsap.fromTo(
          splitText.words,
          { opacity: 0.1, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.02,
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              end: "bottom 50%",
              scrub: 0.5,
            },
          }
        );
      }

      if (titleRef.current) {
        const splitTitle = new SplitType(titleRef.current, { types: "chars, words" });
        gsap.from(splitTitle.chars, {
          y: 50,
          opacity: 0,
          stagger: 0.02,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section" id="About" ref={containerRef}>
      <div className="container about-grid">

        {/* Left column (Sticky) */}
        <div className="about-left">
          <div className="about-left-sticky">
            <div className="section-label-top">
              <span className="noise-text">(01) ABOUT</span>
            </div>

            <h2 className="about-title" ref={titleRef}>
              CRAFTING<br />
              STORIES<br />
              <span className="text-gradient">THAT MATTER.</span>
            </h2>

            <div className="about-stats">
              <div className="stat-card hover-target">
                <h3>5+</h3>
                <p>YEARS CREATING</p>
              </div>
              <div className="stat-card hover-target">
                <h3>100+</h3>
                <p>STORIES TOLD</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column (Scrolls) */}
        <div className="about-right">
          <div className="about-intro">
            I'm <span className="text-gradient">Khayyam Sajid</span>, a digital creator working across Instagram, YouTube, TikTok, and Podcasts. My content blends consumer tech, lifestyle, travel, and personal storytelling.
          </div>

          <div className="about-description" ref={textRef}>
            What connects it all is intention—nothing rushed, nothing loud for no reason. I've spent years understanding how people actually watch content: where they pause, where they leave, and what makes them trust a creator. That understanding shapes everything I put out. Brands work with me not just for reach, but for clarity, taste, and content that feels native to the audience.
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
