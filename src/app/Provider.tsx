"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ConfigProvider, ThemeConfig } from "antd";
import { darkTheme, lightTheme } from "@/utils/themeConfig";
import { unstableSetRender } from "antd";
import { createRoot } from "react-dom/client";
interface ThemeContextType {
  theme: ThemeConfig;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

unstableSetRender((node, container) => {
  container._reactRoot ||= createRoot(container);
  const root = container._reactRoot;
  root.render(node);
  return async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    root.unmount();
  };
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setIsDarkMode(storedTheme === "dark");
  }, []);
  return (
    <ThemeContext.Provider
      value={{
        theme: isDarkMode ? darkTheme : lightTheme,
        isDarkMode,
        toggleTheme,
      }}
    >
      <ConfigProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <div className={`${isDarkMode ? "" : ""}`}>{children}</div>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export default Provider;
