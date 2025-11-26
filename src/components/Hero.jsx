import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../components/IMG/heroimg.png";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Image */}
     <motion.img
  src={HeroImg}
  alt="Hero Background"
  // ADD the 'filter' and 'brightness-75' classes here
  className="absolute inset-0 w-full h-full object-cover filter brightness-65" 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
/>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        className="relative z-10 max-w-5xl px-6"
      >
        {/* Brand Name – same size as tagline */}
       <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 1, ease: "easeOut" }}
  style={{
    fontFamily: '"Playfair Display", serif',
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: "40px",      // ← adjust this for heading size
    lineHeight: "110%",    // ← adjust if needed
    letterSpacing: "0",
    textAlign: "center",
    color: "#FFFFFF",
    textShadow: "0 2px 8px rgba(0,0,0,0.5)",
    maxWidth: "100%",       // ← reduce to prevent touching edges
    margin: "0 auto",
  }}
>
  FABULOUS BY NORA
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
  style={{
    fontFamily: '"Playfair Display", serif',
    fontWeight: 700,       // lighter for tagline
    fontStyle: "normal",
    fontSize: "40px",      // ← adjust this for tagline size
    lineHeight: "120%",
    letterSpacing: "0",
    textAlign: "center",
    color: "#FFFFFF",
    textShadow: "0 1px 6px rgba(0,0,0,0.4)",
    marginTop: "12px",
    maxWidth: "100%",       // ← reduce to prevent touching edges
    marginLeft: "auto",
    marginRight: "auto",
  }}
>
  Where Heritage Meets Modern Style
</motion.p>


        {/* Shop Now Button – Rectangular */}
        <motion.button
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
  style={{
    fontFamily: "Nunito, sans-serif",
    fontWeight: 500,
    fontStyle: "normal", // "Medium" in fontStyle doesn't exist in CSS
    fontSize: "20px",
    lineHeight: "100%",
    letterSpacing: "0%",
    backgroundColor: "#FFFFFF",
    color: "#BD007C",
  }}
  className="mt-10 px-16 py-3 text-lg rounded-md shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105"
>
  Shop Now
</motion.button>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
       
      </motion.div>
    </section>
  );
};

export default Hero;