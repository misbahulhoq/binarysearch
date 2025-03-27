"use client";
import { Button } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { highlight, languages } from "prismjs/components/prism-core";
import Editor from "react-simple-code-editor";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

const JavaScriptHome = () => {
  const [code, setCode] = useState(`console.log("Hello, JavaScript!");`);
  return (
    <section className="">
      <div className="container-center">
        <div>
          <h1 className="mb-4 text-4xl font-bold">জাভাস্ক্রিপ্ট টিউটোরিয়াল</h1>
          <p className="mb-8 text-xl">
            জাভাস্ক্রিপ্ট বিশ্বের সবচেয়ে জনপ্রিয় প্রোগ্রামিং ভাষা।
            জাভাস্ক্রিপ্ট হল ওয়েবের প্রোগ্রামিং ভাষা। জাভাস্ক্রিপ্ট শেখা সহজ।
            এই টিউটোরিয়ালটি আপনাকে জাভাস্ক্রিপ্ট বেসিক থেকে অ্যাডভান্স পর্যন্ত
            শেখাবে।
          </p>
          <h2 className="mb-4 text-3xl font-bold">প্রতিটি অধ্যায়ের উদাহরণ</h2>
          <p className="mb-8 text-xl">
            আমাদের {"Try it Yourself"} এডিটরের সাহায্যে, আপনি সোর্স কোড সম্পাদনা
            করতে পারেন এবং ফলাফল দেখতে পারেন।
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-3xl font-bold">উদাহরণ</h2>

          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) => highlight(code, languages.js)}
            padding={10}
            style={{
              fontSize: 16,
            }}
          />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-3xl font-bold">কেন জাভাস্ক্রিপ্ট শিখব?</h2>
          <p className="text-xl">
            আপনার যদি প্রোগ্রামিং শেখার ইচ্ছা থাকে তাহলে জাভাস্ক্রিপ্ট দিয়ে
            শুরু করতে পারেন । আপনি যদি ওয়েব ডেভেলপমেন্ট কে ক্যারিয়ার হিসেবে
            নিতে চান তাহলেও জাভাস্ক্রিপ্ট শিখতে পারেন । আপনার যদি ইতিমধ্যে
            এইচটিএমএল এবং সিএসএস সম্পর্কে ধারণা থেকে থাকে তাহলে ওয়েব এপ্লিকেশনে
            ফাংশনালিটি আনতে জাভাস্ক্রিপ্ট শিখতে পারেন ।
          </p>
        </div>

        <div className="mt-7 flex justify-end">
          <Link href={`/javascript/intro-js`}>
            <Button type="primary" size="large" className="outline-none">
              Next →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JavaScriptHome;
