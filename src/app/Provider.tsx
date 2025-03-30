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

interface SidebarContextType {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

unstableSetRender((node, container) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  container._reactRoot ||= createRoot(container);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setIsDarkMode(storedTheme === "dark");
    const deviceWidth = window.innerWidth;
    if (deviceWidth < 1024) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }

    const handleResize = () => {
      const newWidth = window.innerWidth;
      setIsSidebarOpen(newWidth >= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ThemeContext.Provider
      value={{
        theme: isDarkMode ? darkTheme : lightTheme,
        isDarkMode,
        toggleTheme,
      }}
    >
      <SidebarContext.Provider
        value={{ isSidebarOpen: false, toggleSidebar: () => {} }}
      >
        <ConfigProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <div className={`${isDarkMode ? "" : ""}`}>{children}</div>
        </ConfigProvider>
      </SidebarContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Provider;
