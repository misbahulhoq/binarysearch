"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const ComingSoonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.4,
    once: true,
  });
  return (
    <section className="flex h-[700px] items-center justify-center rounded-xl bg-gradient-to-r from-indigo-800 to-purple-800 px-6 text-center">
      <motion.div
        ref={ref}
        className=""
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="mb-4 text-3xl font-bold">আগামীতে আরও কোর্স আসবে</h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-slate-300">
          বর্তমানে আমরা শুধু জাভাস্ক্রিপ্ট প্রোগ্রামিং ল্যাঙ্গুয়েজ টি যোগ করেছি
          । ভবিষ্যতে আমরা আরো প্রোগ্রামিং ল্যাঙ্গুয়েজ যোগ করব । যেমন : পাইথন
          ,জাভা, সি প্লাস প্লাস ইত্যাদি । এছাড়াও আরো বেশ কিছু লাইব্রেরি, যেমন
          রিয়াক্ট, অ্যাংগুলার, ভিউ ইত্যাদি যোগ করার পরিকল্পনাও রয়েছে ।
        </p>
      </motion.div>
    </section>
  );
};

export default ComingSoonSection;
