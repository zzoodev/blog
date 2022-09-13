import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { burgerAtom } from "../../atoms";
import { NavLink } from "../../meta/nav";
import { cls } from "../../utils";
import { useRecoilState } from "recoil";
import SideNav from "./sideNav";
import Head from "next/head";
import metadata from "../../meta/metadata";

interface CustomMeta {
  title?: string;
  description?: string;
  author?: string;
  [key: string]: any;
}
interface LayoutProps {
  children: React.ReactNode;
  customMeta?: CustomMeta;
}

const Layout: NextPage<LayoutProps> = ({ children, customMeta }) => {
  const router = useRouter();

  const max678 = useMediaQuery({
    query: "(max-width: 678px)",
  });

  const [isOpenBurger, setIsOpenBurger] = useRecoilState(burgerAtom);

  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
    ...customMeta,
  };

  return (
    <div
      id="layout"
      className="relative max-w-2xl w-full m-auto flex flex-col items-center pt-12"
    >
      {max678 ? <SideNav /> : null}
      <header className="fixed top-0 m-auto max-w-2xl w-full h-12 bg-white dark:bg-[#18181B] z-30">
        <nav className="flex items-center h-full">
          <svg
            id="burgerBtn"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="base:hidden w-6 h-6 cursor-pointer ml-4 mr-2"
            fill="white"
            onClick={() => {
              setIsOpenBurger(true);
            }}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
          {NavLink.map((link, i) => (
            <div
              key={i}
              className={cls(
                router.pathname === link.path ? "text-cyan-400" : "",
                "flex justify-center items-center h-full font-thin text-[14px] uppercase px-4"
              )}
            >
              <Link href={link.path}>{link.title}</Link>
            </div>
          ))}
        </nav>
      </header>
      <div className="w-full min-h-screen">{children}</div>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </Head>
    </div>
  );
};

export default Layout;
