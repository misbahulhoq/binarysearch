"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Update component dimensions on mount and window resize
  useEffect(() => {
    const updateDimensions = () => {
      if (heroRef.current) {
        setDimensions({
          width: heroRef.current.offsetWidth,
          height: heroRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Handle mouse movement within hero section
  const handleMouseMove = (e) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <motion.div
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background particles */}
      {Array.from({ length: 50 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-blue-500 opacity-20"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: [
              Math.random() * dimensions.width,
              Math.random() * dimensions.width,
              Math.random() * dimensions.width,
            ],
            y: [
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: Math.random() * 20 + 10,
            height: Math.random() * 20 + 10,
          }}
        />
      ))}

      {/* Cursor follow effect */}
      <motion.div
        className="absolute rounded-full bg-violet-600 bg-opacity-50 mix-blend-screen filter blur-xl"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
          scale: isHovering ? 1 : 0,
        }}
        transition={{
          x: { duration: 0.2, ease: "easeOut" },
          y: { duration: 0.2, ease: "easeOut" },
          scale: { duration: 0.3, ease: "easeInOut" },
        }}
        style={{
          width: 300,
          height: 300,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="mb-6 text-5xl font-bold text-white md:text-7xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Create Something <span className="text-blue-400">Amazing</span>
        </motion.h1>

        <motion.p
          className="mb-8 max-w-xl text-lg text-slate-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience the future of web design with our interactive and immersive
          landing page animations.
        </motion.p>

        <motion.button
          className="rounded-full bg-blue-500 px-8 py-3 font-medium text-white transition-all hover:bg-blue-600 hover:shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HeroSection;
