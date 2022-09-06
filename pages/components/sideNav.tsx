import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Categories } from "../../meta/nav";
import { cls } from "../../utils";
import { useMediaQuery } from "react-responsive";
import { useRecoilState } from "recoil";
import { burgerState } from "../../atoms";

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

  const [isBurger, setIsBurger] = useRecoilState(burgerState);

  const max678 = useMediaQuery({
    query: "(max-width: 678px)",
  });

  return (
    <aside
      className={cls(
        "fixed base:left-[calc(50%-336px)]  base:top-12 top-0 w-[130px]  min-h-screen h-max border-r border-r-zinc-800 pt-2 space-y-2 px-6 z-50 transition-all bg-white text-[#10172A] dark:text-[#CBD5E1] dark:bg-[#18181B]",
        max678 && isBurger ? "left-0 pt-8" : "-left-[200px]"
      )}
    >
      {isBurger && max678 ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="absolute right-2 top-2 w-6 h-6 bg-white rounded-sm cursor-pointer"
          fill="#18181B"
          onClick={() => setIsBurger(false)}
        >
          <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
        </svg>
      ) : null}
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
