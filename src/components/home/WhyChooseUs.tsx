"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Book, CircleDollarSign, Code, Languages } from "lucide-react";
import FeatureCard from "./FeatureCard";

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const features = [
    {
      id: 1,
      icon: <Book className="h-6 w-6" />,
      title: "বিগিনার ফ্রেন্ডলি",
      description:
        "একদম স্ক্র্যাচ থেকে শুরু করে ধাপে ধাপে প্রত্যেকটি কনসেপ্ট শিখুন",
    },
    {
      id: 2,
      icon: <Code className="h-6 w-6" />,
      title: "অনুশীলন",
      description: `আমাদের এই কোর্সে আপনি প্রত্যেকটি বিষয় শেখার পর চর্চা করতে পারবেন`,
    },
    {
      id: 3,
      icon: <Languages className="h-6 w-6" />,
      title: "বাংলা ভাষায়",
      description: `আমাদের এই কোর্সটি সম্পূর্ণ বাংলা ভাষায়, তাই আমরা আশা করছি এটি আপনার জন্য অনেক সহজ হবে`,
    },
    {
      id: 4,
      icon: <CircleDollarSign />,
      title: "সম্পূর্ণ ফ্রি",
      description: `আমাদের সাইটের কোর্সগুলো সম্পূর্ণ ফ্রি তে কমপ্লিট করতে পারবেন ।`,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section ref={sectionRef} className="">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-white">
            {" "}
            কেন আমাদের কোর্সটি নির্বাচন করবেন ?
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 bg-blue-500"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="flex cursor-pointer justify-center"
            >
              <FeatureCard props={feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="relative overflow-hidden">
        <motion.div
          className="absolute -bottom-20 -left-20 z-0 h-64 w-64 rounded-full bg-blue-100 opacity-60"
          animate={
            isInView
              ? { scale: [0.8, 1.1, 1], opacity: [0, 0.6, 0.5] }
              : { scale: 0.8, opacity: 0 }
          }
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute -top-32 right-20 z-0 h-96 w-96 rounded-full bg-green-100 opacity-60"
          animate={
            isInView
              ? { scale: [0.7, 1.05, 1], opacity: [0, 0.3, 0.3] }
              : { scale: 0.7, opacity: 0 }
          }
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
