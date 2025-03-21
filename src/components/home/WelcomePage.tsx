"use client";
import React, { useState, useEffect } from "react";

import WhyChooseUs from "./WhyChooseUs";
import HeroSection from "./HeroSection";
import ComingSoonSection from "./ComingSoonSection";
import NewsLetter from "./NewsLetter";

const WelcomePage = () => {
  const [, setCurrentFeature] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const features = ["Interactive coding challenges", "Community support"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    setIsClient(true);

    return () => clearInterval(interval);
  }, [features.length]);

  if (!isClient) return null;

  if (isClient)
    return (
      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
        <div>
          <div>
            {/* Hero Section */}
            <HeroSection />

            {/* Features Section */}
            <section className="pb-20">
              <WhyChooseUs />
            </section>
            <NewsLetter />
            {/* Coming Soon Section */}
            <ComingSoonSection />
          </div>
        </div>
      </div>
    );
};

export default WelcomePage;
