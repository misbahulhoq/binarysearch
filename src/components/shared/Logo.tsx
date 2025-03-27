"use client";
import Link from "next/link";
import React from "react";
import { Code } from "lucide-react";

const Logo = () => {
  return (
    <Link href={`/`}>
      <div className="flex items-center space-x-2 md:mb-0">
        <Code className="h-6 w-6 text-yellow-400" />
        <span className="text-xl font-bold text-white">BinarySearch</span>
      </div>
    </Link>
  );
};

export default Logo;
