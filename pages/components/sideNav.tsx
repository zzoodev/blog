import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Categories } from "../../meta/nav";
import { cls } from "../../utils";
import { useMediaQuery } from "react-responsive";
import { useRecoilState } from "recoil";
import { burgerAtom } from "../../atoms";
import BackDrop from "./backdrop";

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

  const [isOpenSideDrawer, setIsOpenSideDrawer] = useRecoilState(burgerAtom);

  const max678 = useMediaQuery({
    query: "(max-width: 678px)",
  });

  console.log(isOpenSideDrawer);

  return (
    <>
      <aside
        className={cls(
          "fixed base:left-[calc(50%-336px)]  base:top-12 top-0 w-[130px]  min-h-screen h-max border-x pt-2 space-y-2 px-6 z-50 transition-all bg-white text-[#10172A] dark:text-[#CBD5E1] dark:bg-[#18181B] dark:border-l-0  dark:border-zinc-600",
          isOpenSideDrawer ? "left-0 pt-8 block" : "-left-[200px]"
        )}
      >
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
      {isOpenSideDrawer && max678 ? (
        <BackDrop onClick={() => setIsOpenSideDrawer(false)} />
      ) : null}
    </>
  );
};

export default SideNav;
