import React, { useState, useEffect } from "react";
import "./Navbar.css";
import gsap from "gsap";

const pages = [
  { name: "Home", id: "Home" },
  { name: "About", id: "About" },
  { name: "Work", id: "Content" },
  { name: "Collaborations", id: "Collaborations" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active Section logic
      pages.forEach(page => {
        const section = document.getElementById(page.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActive(page.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id, name) => {
    setActive(name);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      y: -2,
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <header className={`modern-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">

        <div
          className="header-logo hover-target"
          onClick={() => scrollToSection("Home", "Home")}
        >
          KHAYYAM SAJJID.
        </div>

        <nav className="header-nav desktop-only">
          {pages.map((p) => (
            <button
              key={p.name}
              className={`header-link hover-target ${active === p.name ? "active" : ""}`}
              onClick={() => scrollToSection(p.id, p.name)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {p.name}
            </button>
          ))}
        </nav>

        <button
          className="header-cta hover-target"
          onClick={() => scrollToSection("Contact", "Contact")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Let's Talk
        </button>

      </div>
    </header>
  );
}
