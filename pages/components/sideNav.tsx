import { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import { Categories } from "../../meta/nav";
import { cls } from "../../utils";

const SideNav: NextPage = () => {
  const [show, setShow] = useState("");
  const onClick = (event: any) => {
    setShow((prev) => (prev === event.target.id ? "" : event.target.id));
  };
  return (
    <aside className="fixed w-[15%]">
      {Categories.map((category, i) => (
        <div key={i}>
          <span
            id={category.title}
            onClick={onClick}
            className="cursor-pointer"
          >
            {category.title}
          </span>
          <ul
            className={cls(
              show === category.title ? "flex" : "hidden",
              "flex-col text-red-400"
            )}
          >
            {category.subCategories.map((subCategory) => (
              <Link href={`/blog${category.path}${subCategory.path}`}>
                {subCategory.title}
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default SideNav;
