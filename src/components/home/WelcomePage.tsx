"use client";
import React, { useState, useEffect } from "react";
import { Terminal, Code, Book, ArrowRight, CheckCircle } from "lucide-react";

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
      <div className=" bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
        {/* Hero Section */}
        <section className="container min-h-screen mx-auto px-6 py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-6">
              বাংলা ভাষায় <br />
              <span className="text-yellow-400">জাভাস্ক্রিপ্ট</span> শিখুন
              <span className="relative">
                <span className="absolute bottom-2 left-0 w-full h-3 bg-indigo-600 z-0 opacity-50"></span>
              </span>
            </h1>
            <p className="text-xl mb-8">
              আজ থেকেই আপনার কোডিং জার্নি শুরু করুন <br /> আমাদের ইন্টারেক্টিভ
              জাভাস্ক্রিপ্ট কোর্সের সাথে
            </p>

            {/* <div className="mb-8 flex items-center">
              <Sparkles className="h-6 w-6 text-yellow-400 mr-2" />
              <p className="text-lg">{features[currentFeature]}</p>
            </div> */}

            <div className="flex space-x-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 px-6 rounded-lg transition flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white hover:border-yellow-400 hover:text-yellow-400 py-3 px-6 rounded-lg transition">
                View Courses
              </button>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
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
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-slate-800 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              কেন আমাদের কোর্সটি নির্বাচন করবেন ?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-700 p-6 rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition">
                <div className="bg-indigo-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Book className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2"> বিগিনার ফ্রেন্ডলি </h3>
                <p className="text-slate-300">
                  একদম স্ক্র্যাচ থেকে শুরু করে ধাপে ধাপে প্রত্যেকটি কনসেপ্ট
                  শিখুন
                </p>
              </div>

              <div className="bg-slate-700 p-6 rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition">
                <div className="bg-indigo-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2"> অনুশীলন</h3>
                <p className="text-slate-300">
                  আমাদের এই কোর্সে আপনি প্রত্যেকটি বিষয় শেখার পর চর্চা করতে
                  পারবেন
                </p>
              </div>

              <div className="bg-slate-700 p-6 rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition">
                <div className="bg-indigo-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">বাংলা ভাষায়</h3>
                <p className="text-slate-300">
                  আমাদের এই কোর্সটি সম্পূর্ণ বাংলা ভাষায়, তাই আমরা আশা করছি এটি
                  আপনার জন্য অনেক সহজ হবে
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="bg-gradient-to-r from-indigo-800 to-purple-800 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              More Courses Coming Soon
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We&apos;re currently focused on JavaScript, but we&apos;re working
              hard to bring you courses on Python, React, Node.js, and more!
            </p>
            <button className="bg-white text-indigo-900 hover:bg-yellow-400 font-bold py-3 px-8 rounded-lg transition">
              Get Notified
            </button>
          </div>
        </section>
      </div>
    );
};

export default WelcomePage;
