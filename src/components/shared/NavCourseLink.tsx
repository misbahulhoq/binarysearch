"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  href: string;

  children: string;
}
const NavCourseLink = ({ props }: { props: Props }) => {
  const { href, children } = props;
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Link
      href={href}
      className={`flex h-full items-center px-2 ${pathName === href || pathName.includes(href) ? "bg-blue-500" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavCourseLink;
