"use client";
import React, { ReactNode } from "react";
import { useTheme } from "../Provider";
import Sidebar from "@/components/layout/Sidebar";

const JavascriptPageLayout = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <section
      style={{
        background: theme?.token?.colorBgBase,
        color: theme?.token?.colorTextBase,
      }}
      className="flex min-h-screen py-6 md:py-7"
    >
      <div className="relative -left-64 w-[150px]">
        <Sidebar
          isSidebarOpen={true}
          toggleSidebar={() => {}}
          links={[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ]}
        />
      </div>
      <div className="grow">{children}</div>
    </section>
  );
};

export default JavascriptPageLayout;
