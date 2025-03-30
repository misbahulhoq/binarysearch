"use client";

import React from "react";
import Logo from "../shared/Logo";
import ThemeSwitcher from "../shared/ThemeSwitcher";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useSidebar } from "@/app/Provider";
import { CloseOutlined } from "@ant-design/icons";
import NavCourseLink from "../shared/NavCourseLink";

const courses = [
  {
    children: "JavaScript",
    href: "/javascript",
  },
  {
    children: "Python",
    href: "/python",
  },
];
const Header = () => {
  const [isClient, setIsClient] = React.useState(false);
  const pathName = usePathname();
  const { toggleSidebar, isSidebarOpen } = useSidebar();

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div className="py-5"></div>;

  if (isClient)
    return (
      <div className="sticky top-0 z-10">
        <header className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
          {/* Header */}
          <header className="container mx-auto flex items-center justify-between px-6 py-2 lg:py-4">
            <div className="flex items-center gap-5">
              {/* <button className="lg:hidden">
                <Menu size={30} />
              </button> */}
              <Logo />
            </div>
            <nav className="hidden lg:block">
              <ul className="flex space-x-8">
                <li>
                  <a href="#" className="transition hover:text-yellow-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-yellow-400">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-yellow-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-yellow-400">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            {pathName !== "/" && <ThemeSwitcher />}
          </header>

          {/* Header End */}
        </header>
        <div className="flex h-10 bg-slate-900 text-white">
          <div className="container-center flex items-center gap-4">
            {pathName !== "/" && (
              <button
                className="cursor-pointer lg:hidden"
                onClick={toggleSidebar}
              >
                {isSidebarOpen ? (
                  <CloseOutlined size={50} style={{ fontSize: "26px" }} />
                ) : (
                  <Menu size={30} />
                )}
              </button>
            )}

            {courses.map((course) => (
              <NavCourseLink key={course.href} props={course}>
                {}
              </NavCourseLink>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Header;
