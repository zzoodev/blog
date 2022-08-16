import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { NavLink } from "../../meta/nav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <div
      id="layout"
      className="max-w-2xl w-full m-auto flex flex-col items-center pt-12"
    >
      <header className="fixed top-0 m-auto max-w-2xl w-full h-12 bg-white dark:bg-[#18181B]">
        <nav className="flex justify-evenly items-center h-full">
          {NavLink.map((link, i) => (
            <div
              key={i}
              className="flex justify-center items-center h-full font-thin"
            >
              <Link href={link.path}>{link.title}</Link>
            </div>
          ))}
        </nav>
      </header>
      <div className="w-full min-h-screen">{children}</div>
    </div>
  );
};

export default Layout;
