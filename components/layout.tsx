import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { NavLink } from "../meta/nav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <div
      id="layout"
      className="max-w-2xl w-full m-auto flex flex-col items-center"
    >
      <header className="w-full">
        <nav className="flex justify-evenly">
          {NavLink.map((link, i) => (
            <Link key={i} href={link.path}>
              {link.title}
            </Link>
          ))}
        </nav>
      </header>
      <main className="w-full min-h-screen border">{children}</main>
    </div>
  );
};

export default Layout;
