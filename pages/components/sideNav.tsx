import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Categories } from "../../meta/nav";
import { cls } from "../../utils";

const SideNav: NextPage = () => {
  const router = useRouter();
  const [show, setShow] = useState(router.query.category);
  const onClick = (event: any) => {
    setShow((prev) => (prev === event.target.id ? "" : event.target.id));
  };

  useEffect(() => {
    const [_, section, category, subCategory] = router.asPath.split("/");
    setShow(category);
  }, [router, setShow]);

  return (
    <aside className="fixed left-[calc(50%-336px)] top-14 w-[90px]  min-h-[500px] h-max border-r border-r-zinc-700 pt-2 space-y-2">
      {Categories.map((category, i) => (
        <div key={i}>
          <span
            id={category.path}
            onClick={onClick}
            className="cursor-pointer font-semibold"
          >
            {category.title}
          </span>
          {category.path === show ? (
            <ul className="flex flex-col ml-4 space-y-1 mt-2">
              {category.subCategories.map((subCategory, i) => (
                <Link
                  key={i}
                  href={`/blog/${category.path}/${subCategory.path}`}
                >
                  <a
                    className={cls(
                      category.path === router.query.category &&
                        subCategory.path === router.query.subCategory
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
          ) : null}
        </div>
      ))}
    </aside>
  );
};

export default SideNav;
