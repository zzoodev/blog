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
import Header from "./header";

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
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </Head>
      <div
        id="layout"
        className="relative max-w-2xl w-full m-auto flex flex-col pt-12 border-x border-x-slate-200 dark:border-none"
      >
        {max678 && <SideNav />}
        <Header />
        <div className="w-full min-h-screen">{children}</div>
      </div>
    </>
  );
};

export default Layout;
