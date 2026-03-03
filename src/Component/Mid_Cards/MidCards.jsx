import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Mid_Cards.css";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: "youtube",
    title: "YOUTUBE",
    description: "Visual essays on tech, creativity, and design. Mixing real footage with clean visuals and structured storytelling.",
    number: "01",
    image: "/Images/midsection/image_1_1_4x.webp" // Optional to map custom images later
  },
  {
    id: "short-form",
    title: "SHORT-FORM",
    description: "Tech moments and lifestyle clips designed to feel natural in-feed. Where I stay closest to the audience.",
    number: "02",
    image: ""
  },
  {
    id: "podcast",
    title: "PODCAST",
    description: "Conversations on creativity and personal growth. Slow-paced discussions meant to be listened to, not skimmed.",
    number: "03",
    image: ""
  },
];

const Mid_Cards = () => {
  const containerRef = useRef(null);
  const scrollWrapperRef = useRef(null);

  useEffect(() => {
    const isSmallDevice = () => window.matchMedia("(max-width: 768px)").matches;

    if (isSmallDevice()) return; // Vertical stack on mobile, no horizontal scroll

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".horizontal-card");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          start: "top top",
          end: "+=3000",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="mid-cards-section" id="Content" ref={containerRef}>

      {/* <div className="watermark-bg">
        FOCUS
      </div> */}

      <div className="horizontal-scroll-wrapper" ref={scrollWrapperRef}>

        {/* Intro Card */}
        <div className="horizontal-card intro-card">
          <div className="card-inner-padding">
            <h2 className="massive-title">
              WHAT<br />I DO
            </h2>
            <p className="horizontal-intro">
              I create content that lives at the intersection of tech, lifestyle, travel, and everyday human moments. Scroll to explore my formats.
            </p>
          </div>
        </div>

        {/* Content Cards */}
        {cards.map((card, idx) => (
          <div className="horizontal-card" key={idx}>
            <div className="work-card-inner">
              <div className="work-card-number">{card.number}</div>
              <h3 className="work-card-title">{card.title}</h3>
              <p className="work-card-desc">{card.description}</p>

              <button className="button-primary hover-target">
                <span>Explore Channel</span>
              </button>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Mid_Cards;
