"use client";
import React from "react";
import { useTheme } from "../Provider";
import { jsCourses } from "@/data/javascript";

const JavaScriptHome = () => {
  const { theme } = useTheme();

  return (
    <section
      style={{
        background: theme?.token?.colorBgBase,
        color: theme?.token?.colorTextBase,
      }}
      className="min-h-screen py-4"
    >
      <div className="container-center"></div>
    </section>
  );
};

export default JavaScriptHome;
