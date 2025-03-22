"use client";
import React from "react";
import { useTheme } from "../Provider";

const JavaScriptHome = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        background: theme.token.colorBgBase,
        color: theme.token.colorTextBase,
      }}
      className="h-screen"
    >
      JavaScriptHome
    </div>
  );
};

export default JavaScriptHome;
