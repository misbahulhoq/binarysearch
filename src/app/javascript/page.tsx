"use client";
import React from "react";
import { useTheme } from "../Provider";

const page = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        background: theme.token.colorBgBase,
        color: theme.token.colorTextBase,
      }}
      className="h-screen"
    >
      page
    </div>
  );
};

export default page;
