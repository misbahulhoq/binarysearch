import { Button } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useTheme } from "@/app/Provider";

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </Button>
  );
};

export default ThemeSwitcher;
