"use client";

import React from "react";
import Logo from "../shared/Logo";
import ThemeSwitcher from "../shared/ThemeSwitcher";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isClient, setIsClient] = React.useState(false);
  const pathName = usePathname();
  console.log(pathName);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div className="py-5"></div>;

  if (isClient)
    return (
      <header className="sticky top-0 z-10 bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
        {/* Header */}
        <header className="container mx-auto flex items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden lg:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#" className="transition hover:text-yellow-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-yellow-400">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-yellow-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-yellow-400">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {pathName !== "/" && <ThemeSwitcher />}
        </header>
      </header>
    );
};

export default Header;
