import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Categories } from "../../meta/nav";
import { cls } from "../../utils";

const SideNav: NextPage = () => {
  const [show, setShow] = useState("");
  const onClick = (event: any) => {
    setShow((prev) => (prev === event.target.id ? "" : event.target.id));
  };
  const router = useRouter();

  return (
    <aside className="fixed left-[calc(50%-336px)] top-14 w-[90px]  min-h-[500px] h-max border-r border-r-zinc-700 pt-2 space-y-2">
      {Categories.map((category, i) => (
        <div key={i}>
          <span
            id={category.title}
            onClick={onClick}
            className="cursor-pointer font-semibold"
          >
            {category.title}
          </span>
          <ul
            className={cls(
              show === category.title ? "flex" : "hidden",
              "flex-col ml-4 space-y-1 mt-2"
            )}
          >
            {category.subCategories.map((subCategory, i) => (
              <Link key={i} href={`/blog${category.path}${subCategory.path}`}>
                <a
                  className={cls(
                    category.path.slice(1) === router.query.category &&
                      subCategory.path.slice(1) === router.query.subCategory
                      ? "text-cyan-400 font-bold"
                      : "",
                    "font-thin text=[14px]"
                  )}
                >
                  {subCategory.title}
                </a>
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default SideNav;
