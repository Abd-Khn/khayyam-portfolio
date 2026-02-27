import React, { useEffect, useRef } from "react";
import "./Innovation.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const FEATURED_VIDEO_ID = "";

const Innovation = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      if (titleRef.current) {
        const split = new SplitType(titleRef.current, { types: "chars" });
        gsap.from(split.chars, {
          y: 200,
          opacity: 0,
          rotateZ: 10,
          stagger: 0.05,
          duration: 1.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        });
      }

      // Parallax blocks
      gsap.utils.toArray('.innovate-block').forEach((block, i) => {
        gsap.fromTo(block,
          { y: 150, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 85%",
              scrub: 1,
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="innovation-wrapper section-padding" id="Showcase" ref={containerRef}>
      <div className="container">

        <div className="innovate-header">
          <h2 className="innovate-giant-text" ref={titleRef}>
            VISUAL <br /> DIARIES
          </h2>
          <div className="innovate-subtext">
            Long-form, short-form, and conversations crafted with intent.
          </div>
        </div>

        <div className="innovate-grid">
          <div className="innovate-block">
            <div className="i-block-meta">
              <span>01</span>
              <span>Long Form</span>
            </div>
            <h3 className="i-block-title">YouTube Focus</h3>
            <p className="i-block-desc">
              Visual essays on technology and creativity. Real footage mixed with clean visuals and structured storytelling that respects the viewer's time.
            </p>
          </div>

          <div className="innovate-block mt-lg">
            <div className="i-block-meta">
              <span>02</span>
              <span>Micro Content</span>
            </div>
            <h3 className="i-block-title">Short-Form</h3>
            <p className="i-block-desc">
              Tech moments and lifestyle clips designed to fit naturally in-feed. Authentic integrations and everyday carry content.
            </p>
          </div>

          <div className="innovate-block mt-xl">
            <div className="i-block-meta">
              <span>03</span>
              <span>Audio</span>
            </div>
            <h3 className="i-block-title">All Over The Place</h3>
            <p className="i-block-desc">
              Conversations on personal growth and design. A slow-paced podcast meant to be listened to, not skimmed.
            </p>
          </div>
        </div>

        {FEATURED_VIDEO_ID && (
          <div className="innovate-featured hover-target">
            <div className="video-aspect">
              <iframe
                title="Featured videography"
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                allowFullScreen
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Innovation;
