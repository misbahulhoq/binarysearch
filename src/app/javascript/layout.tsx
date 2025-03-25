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
      className="min-h-screen"
    >
      {children}
    </section>
  );
};

export default JavascriptPageLayout;
