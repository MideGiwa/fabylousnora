import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full bg-[#4A1F8C] text-white pt-16 pb-20 px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 text-sm opacity-80 mb-12 max-w-7xl mx-auto">
        {/* ABOUT — Wider column */}
        <div className="md:col-span-5 space-y-6">
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              fontSize: "30px",
              lineHeight: "100%",
              letterSpacing: "0",
            }}
            className="opacity-100"
          >
            FabulouslyNora
          </h2>

          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "160%",
            }}
            className="leading-relaxed"
          >
            From luxury outfits to well-crafted accessories, we bring you the finest
            fashion items for women and children. Shop top-notch quality at affordable
            prices and enjoy a seamless shopping experience.
          </p>

          {/* Social Media Icons - FIXED */}
          <div className="flex gap-6 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className="cursor-pointer hover:opacity-60 transition"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="cursor-pointer hover:opacity-60 transition"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="cursor-pointer hover:opacity-60 transition"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="cursor-pointer hover:opacity-60 transition"
              />
            </a>
          </div>
        </div>

        {/* Categories */}
        <div className="md:col-span-2">
          <h3
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "100%",
            }}
            className="mb-6"
          >
            Categories
          </h3>
          <ul className="flex flex-col gap-4">
            {["Men", "Women", "Children", "Accessories", "Jewelry"].map((cat) => (
              <li
                key={cat}
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
                className="hover:opacity-60 cursor-pointer transition"
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2">
          <h3
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "100%",
            }}
            className="mb-6"
          >
            Quick Links
          </h3>
          <ul className="flex flex-col gap-4">
            {[
              "About Us",
              "Privacy Policy",
              "Shipping Policy",
              "Terms & Condition",
              "Refund Policy",
            ].map((link) => (
              <li
                key={link}
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
                className="hover:opacity-60 cursor-pointer transition"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-3">
          <h3
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "100%",
            }}
            className="mb-6"
          >
            Newsletter
          </h3>

          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "160%",
            }}
            className="mb-6"
          >
            Subscribe to Us
          </p>

          <div className="relative max-w-xs">
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 400,
                fontSize: "14px",
              }}
              className="w-full bg-transparent border-b-2 border-white/50 text-white placeholder-white/70 
                         focus:outline-none focus:border-white transition pb-2 pr-10"
            />

            {/* Arrow Button */}
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-2xl 
                         hover:text-[#BD007C] transition"
              aria-label="Subscribe"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <hr className="border-t border-white/10 mb-10 max-w-7xl mx-auto" />

      <div className="text-center">
        <div className="relative overflow-hidden">
  {/* This div creates the gradient background */}
  <div 
    className="absolute inset-0 -z-10"
    style={{
      background: 'linear-gradient(343.25deg, rgba(255, 255, 255, 0.15) -25.18%, rgba(189, 0, 124, 0.15) 86.16%)'
    }}
  />

  {/* Your beautiful text */}
  <p 
    className="font-bold tracking-wider opacity-30"
    style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: '90px',
      lineHeight: '1',
      letterSpacing: '0.08em',
      color: '#BD007C'
    }}
  >
    FABULOUS BY NORA
  </p>
</div>
      </div>
    </footer>
  );
};

export default Footer;