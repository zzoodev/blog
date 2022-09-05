import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { NavLink } from "../../meta/nav";
import { cls } from "../../utils";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div
      id="layout"
      className="relative max-w-2xl w-full m-auto flex flex-col items-center pt-12"
    >
      <header className="fixed top-0 m-auto max-w-2xl w-full h-12 bg-white dark:bg-[#18181B] z-30 px-2">
        <nav className="flex items-center h-full space-x-8">
          {NavLink.map((link, i) => (
            <div
              key={i}
              className={cls(
                router.pathname === link.path ? "text-cyan-400" : "",
                "flex justify-center items-center h-full font-thin text-[14px] uppercase"
              )}
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
