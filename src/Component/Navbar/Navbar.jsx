import React, { useState, useEffect } from "react";
import "./Navbar.css";
import gsap from "gsap";

const pages = [
  { name: "Home", id: "Home" },
  { name: "Info", id: "About" },
  { name: "Work", id: "Content" },
  { name: "Partners", id: "Collaborations" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setScrolled(true);
        if (currentScrollY > lastScrollY) {
          setHidden(true); // scrolling down
        } else {
          setHidden(false); // scrolling up
        }
      } else {
        setScrolled(false);
        setHidden(false);
      }
      setLastScrollY(currentScrollY);

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
  }, [lastScrollY]);

  const scrollToSection = (id, name) => {
    setActive(name);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Magnetic Button Effect logic could go here or via CSS wrapper
  const handleMagneticMove = (e) => {
    const item = e.currentTarget;
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(item, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.5,
      ease: "power3.out"
    });
  };

  const handleMagneticLeave = (e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)"
    });
  };

  return (
    <header className={`navbar-modern ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}>
      <div className="navbar-pill">

        <div
          className="nav-logo hover-target"
          onClick={() => scrollToSection("Home", "Home")}
          onMouseMove={handleMagneticMove}
          onMouseLeave={handleMagneticLeave}
        >
          <div className="logo-dot"></div>
          <span>KHAYYAM SAJID</span>
        </div>

        <nav className="nav-links desktop-only">
          {pages.map((p) => (
            <button
              key={p.name}
              className={`nav-link hover-target ${active === p.name ? "active" : ""}`}
              onClick={() => scrollToSection(p.id, p.name)}
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
            >
              {p.name}
            </button>
          ))}
        </nav>

        <button
          className="nav-cta hover-target magnet-button"
          onClick={() => scrollToSection("Contact", "Contact")}
          onMouseMove={handleMagneticMove}
          onMouseLeave={handleMagneticLeave}
        >
          <span>Get in touch</span>
        </button>

      </div>
    </header>
  );
}
