"use client";
import React from "react";
import { Terminal, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="container mx-auto flex flex-col items-center gap-10 overflow-hidden px-6 py-24 lg:min-h-screen lg:flex-row lg:py-0">
      <motion.div
        className="lg:w-1/2"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 className="mb-6 text-5xl font-bold">
          বাংলা ভাষায় <br />
          <span className="text-yellow-400">প্রোগ্রামিং</span> শিখুন
          <span className="relative">
            <span className="absolute bottom-2 left-0 z-0 h-3 w-full bg-indigo-600 opacity-50"></span>
          </span>
        </motion.h1>
        <p className="mb-8 text-xl text-slate-300">
          আজ থেকেই আপনার কোডিং জার্নি শুরু করুন <br /> আমাদের ইন্টারেক্টিভ
          জাভাস্ক্রিপ্ট কোর্সের সাথে
        </p>

        {/* <div className="mb-8 flex items-center">
  <Sparkles className="h-6 w-6 text-yellow-400 mr-2" />
  <p className="text-lg">{features[currentFeature]}</p>
</div> */}

        <div className="flex space-x-4">
          <Link
            href={`/`}
            className="flex items-center rounded-lg bg-yellow-400 px-6 py-3 font-bold text-slate-900 transition hover:bg-yellow-500"
          >
            যাত্রা শুরু করুন
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          {/* <Link
            href={`/`}
            className="border border-white hover:border-yellow-400 hover:text-yellow-400 py-3 px-6 rounded-lg transition"
          >
            View Courses
          </Link> */}
        </div>
      </motion.div>

      <motion.div
        className="mt-12 flex justify-center md:mt-0 lg:w-1/2"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="relative">
          <div className="w-full max-w-md rounded-lg border border-slate-700 bg-slate-800 p-6 shadow-xl">
            <div className="mb-4 flex items-center">
              <div className="mr-4 flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs text-slate-400">script.js</div>
            </div>
            <pre className="font-mono text-sm">
              <code className="text-green-400">
                {`// Welcome to Javascript`}
              </code>
              <br />
              <code className="text-blue-400">
                function <span className="text-yellow-400">greetCoder</span>
                () {"{"}
              </code>
              <br />
              <code>
                {" "}
                <span className="text-purple-400">const</span> message ={" "}
                <span className="text-green-400">
                  {`"Hello, future developer!"`}
                </span>
                ;
              </code>
              <br />
              <code>
                {" "}
                <span className="text-blue-400">console</span>.
                <span className="text-yellow-400">log</span>(message);
              </code>
              <br />
              <code>
                {" "}
                <span className="text-purple-400">return</span>{" "}
                <span className="text-green-400">
                  {`"Let's start coding!"`}
                </span>
                ;
              </code>
              <br />
              <code className="text-blue-400">{"}"}</code>
              <br />
              <br />
              <code className="text-yellow-400">greetCoder</code>
              <code>();</code>
            </pre>
          </div>
          <div className="absolute -top-4 right-11 rounded-full bg-indigo-600 p-3 shadow-lg lg:-right-4">
            <Terminal className="h-6 w-6" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
