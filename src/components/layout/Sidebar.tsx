"use client";
import React from "react";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  links: { name: string; path: string }[];
}
const Sidebar = ({ isSidebarOpen, toggleSidebar, links }: SidebarProps) => {
  return (
    <aside
      className={`fixed right-0 h-screen w-full min-w-[150px] overflow-y-auto ${isSidebarOpen ? "block" : "hidden"}`}
    >
      <ul className="flex flex-col gap-2 p-4">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.path} className="block py-2 text-sm font-medium">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
