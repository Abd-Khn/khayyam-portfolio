import React, { useEffect, useRef } from "react";
import "./Hero.css";
import gsap from "gsap";
import SplitType from "split-type";

const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split the title into characters for advanced animation
      const titleSplit = new SplitType(titleRef.current, { types: "chars, words" });
      const subtitleSplit = new SplitType(subtitleRef.current, { types: "words" });

      const tl = gsap.timeline();

      // Image reveal
      tl.to(".hero-overlay-reveal", {
        height: 0,
        duration: 1.5,
        ease: "power4.inOut",
      })
        .fromTo(".hero-image", {
          scale: 1.2,
        }, {
          scale: 1,
          duration: 2,
          ease: "power2.out",
        }, "-=1.5")
        // Title chars reveal
        .from(titleSplit.chars, {
          y: 100,
          opacity: 0,
          stagger: 0.02,
          duration: 1.2,
          ease: "power4.out",
        }, "-=1.4")
        // Subtitle reveal
        .from(subtitleSplit.words, {
          y: 20,
          opacity: 0,
          stagger: 0.03,
          duration: 1,
          ease: "power3.out",
        }, "-=1.0")
        // Action buttons
        .from(".hero-actions", {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        }, "-=0.8");

      // Scroll Parallax connection
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.to(titleRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="Home" className="hero-section" ref={containerRef}>
      <div className="hero-background-wrapper">
        <div className="hero-overlay-reveal"></div>
        <img
          src="/Images/hero.jpg"
          alt="Khayyam Sajid"
          className="hero-image"
          ref={imageRef}
        />
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-label-top">
            <span className="noise-text hover-target">Director / Creator</span>
          </div>

          <h1 className="hero-title" ref={titleRef}>
            VISUAL<br />
            STORYTELLER
          </h1>

          <div className="hero-bottom-area">
            <h2 className="hero-subtitle" ref={subtitleRef}>
              Documenting time <br /> through modern narratives.
            </h2>

            <div className="hero-actions">
              <button
                className="button-primary hover-target"
                onClick={() => scrollToSection("Contact")}
              >
                <span>Start Project</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-text">SCROLL</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
