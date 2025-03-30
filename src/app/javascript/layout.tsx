"use client";
import React, { ReactNode } from "react";
import { useTheme } from "../Provider";
import Sidebar from "@/components/layout/Sidebar";
import { jsCourses } from "@/data/javascript";

const JavascriptPageLayout = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  const links = jsCourses.map((lesson) => ({
    title: lesson.title,
    path: `/javascript/${lesson.id}`,
  }));

  return (
    <section
      style={{
        background: theme?.token?.colorBgBase,
        color: theme?.token?.colorTextBase,
      }}
      className="flex min-h-screen py-6 md:py-7"
    >
      <Sidebar links={links} />

      <div className="grow">{children}</div>
    </section>
  );
};

export default JavascriptPageLayout;
