"use client";

import React from "react";
import Logo from "../shared/Logo";
import ThemeSwitcher from "../shared/ThemeSwitcher";

const Header = () => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  if (isClient)
    return (
      <header className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
        {/* Header */}
        <header className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Logo />
          <nav className="hidden lg:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <ThemeSwitcher />
        </header>
      </header>
    );
};

export default Header;
