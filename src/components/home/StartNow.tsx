"use client";
import { Button } from "antd";
import { useInView, motion } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

const StartNow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });
  return (
    <div className="flex h-[500px] items-center justify-center">
      <motion.div
        className="container-center text-center"
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="mb-2 text-4xl font-bold lg:text-5xl">
          আপনার জন্য শুভকামনা
        </h1>
        <p className="mb-3">
          আপনার প্রোগ্রামিং শেখার যাত্রা শুভ হোক এই কামনা করছি
        </p>

        <Link href={`/javascript`}>
          <Button type="primary" size="large">
            শেখা শুরু করুন
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default StartNow;
