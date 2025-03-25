"use client";
import React, { ReactNode } from "react";
import { useTheme } from "../Provider";
const JavascriptPageLayout = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <section
      style={{
        background: theme?.token?.colorBgBase,
        color: theme?.token?.colorTextBase,
      }}
      className="min-h-screen py-6 md:py-7"
    >
      {children}
    </section>
  );
};

export default JavascriptPageLayout;
