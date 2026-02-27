import React from "react";
import "./footer.css";

const Footer = () => {
  const contactEmail = "business@khayyamsajid.com";
  const currentYear = new Date().getFullYear();

  const menuLinks = [
    { label: "Home", href: "#Home" },
    { label: "About", href: "#About" },
    { label: "Content", href: "#Content" },
    { label: "Services", href: "#Services" },
    { label: "Contact", href: "#Contact" },
  ];

  const socialLinks = [
    { href: "https://youtube.com/@khayyamsajid", label: "YouTube" },
    { href: "https://instagram.com/khayyamsajid", label: "Instagram" },
    { href: "https://x.com/khayyamsajid", label: "X (Twitter)" },
    { href: "https://open.spotify.com/user/khayyamsajid", label: "Spotify" },
  ];

  return (
    <footer className="footer-section section-padding" id="Contact">
      <div className="container">
        <div className="footer-top">
          <div className="footer-cta" data-aos="fade-right">
            <h2 className="footer-title">
              Let's create something <br />
              <span className="text-gradient">exceptional.</span>
            </h2>
            <a href={`mailto:${contactEmail}`} className="footer-email">
              {contactEmail}
            </a>
          </div>

          <div className="footer-nav-groups" data-aos="fade-left">
            <div className="footer-nav-group">
              <span className="footer-nav-title">Navigation</span>
              <nav className="footer-nav">
                {menuLinks.map((link) => (
                  <a key={link.label} href={link.href} className="footer-nav-link">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="footer-nav-group">
              <span className="footer-nav-title">Social</span>
              <nav className="footer-nav">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="footer-nav-link">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Khayyam Sajid. Designed with intention.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
