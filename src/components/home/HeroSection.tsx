"use client";
import React from "react";
import { Terminal, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="container min-h-screen mx-auto px-6 py-24 lg:py-0  flex flex-col md:flex-row items-center">
      <motion.div
        className="md:w-1/2"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 className="text-5xl font-bold mb-6">
          বাংলা ভাষায় <br />
          <span className="text-yellow-400">প্রোগ্রামিং</span> শিখুন
          <span className="relative">
            <span className="absolute bottom-2 left-0 w-full h-3 bg-indigo-600 z-0 opacity-50"></span>
          </span>
        </motion.h1>
        <p className="text-xl mb-8 text-slate-300">
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
            className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 px-6 rounded-lg transition flex items-center"
          >
            যাত্রা শুরু করুন
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href={`/`}
            className="border border-white hover:border-yellow-400 hover:text-yellow-400 py-3 px-6 rounded-lg transition"
          >
            View Courses
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="relative ">
          <div className="bg-slate-800 rounded-lg p-6 shadow-xl w-full max-w-md border border-slate-700">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs text-slate-400">script.js</div>
            </div>
            <pre className="text-sm font-mono">
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
          <div className="absolute -top-4 right-11 lg:-right-4 bg-indigo-600 rounded-full p-3 shadow-lg">
            <Terminal className="h-6 w-6" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
