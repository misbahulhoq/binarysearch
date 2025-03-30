"use client";

import { useSidebar } from "@/app/Provider";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface SidebarProps {
  links: { title: string; path: string }[];
}
const Sidebar = ({ links }: SidebarProps) => {
  const { isSidebarOpen, closeSidebar } = useSidebar();
  const [deviceWidth, setWidth] = useState<null | number>(null);
  useEffect(() => {
    const deviceWidth = window.innerWidth;
    setWidth(deviceWidth);

    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="lg:mr-[180px]">
      <div
        className={`fixed top-[96px] z-10 w-[180px] bg-gray-800 text-white shadow-lg transition-transform duration-300 lg:top-[112px] ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <aside
          className={`h-screen overflow-y-auto transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <ul className="flex flex-col gap-2 p-4">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`block py-2 text-sm font-medium`}
                  onClick={() => {
                    if (deviceWidth !== null && deviceWidth < 1024) {
                      closeSidebar();
                    }
                  }}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
