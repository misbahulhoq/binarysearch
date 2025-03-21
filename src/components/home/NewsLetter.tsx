"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Search from "antd/es/input/Search";

const NewsLetter = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const isInView = useInView(ref, {
    amount: 0.35,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (ref.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const rect: DOMRect = ref.current.getBoundingClientRect();
      const newPosition: { x: number; y: number } = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      setMousePosition(newPosition);
    }
  };

  return (
    <motion.div
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Cursor follow effect */}
      <motion.div
        className="absolute rounded-full bg-violet-600 opacity-10 mix-blend-screen filter blur-xl"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
          scale: isHovering ? 1 : 0,
        }}
        transition={{
          x: { duration: 0.4, ease: "linear" },
          y: { duration: 0.4, ease: "linear" },
          scale: { duration: 0.3, ease: "easeInOut" },
        }}
        style={{
          width: 200,
          height: 200,
        }}
      />

      {/* Content Container */}
      <motion.div
        ref={ref}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      >
        <h1 className="mb-6 text-5xl font-bold text-white  select-none">
          আমাদের <span className="text-blue-400"> নিউজলেটারে </span>সাবস্ক্রাইব
          করুন
        </h1>

        <p className="mb-8 max-w-xl text-lg text-slate-300 select-none">
          প্রতিনিয়ত আমাদের কাছ থেকে কনটেন্ট, বিভিন্ন টিপস এবং ট্রিক্স পেতে
          আপনার ইমেইল দিয়ে সাবস্ক্রাইব করুন।
        </p>

        <div className="max-w-[350px]">
          <Search
            placeholder="youremail@domain.com"
            allowClear
            enterButton="সাবস্ক্রাইব"
            size="large"
            className="w-xl"
            // onSearch={onSearch}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NewsLetter;
