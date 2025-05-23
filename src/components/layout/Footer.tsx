import { Code } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer>
      {/* Footer */}
      <footer className="relative z-20 bg-slate-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-6 flex items-center space-x-2 md:mb-0">
              <Code className="h-6 w-6 text-yellow-400" />
              <span className="text-xl font-bold text-white">BinarySearch</span>
            </div>
            <div className="text-sm text-slate-400">
              © {new Date().getFullYear()} BinarySearch. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
