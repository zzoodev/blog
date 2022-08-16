import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import Layout from "../../components/layout";
import { Categories } from "../../meta/nav";
import { cls } from "../../utils";

const Category: NextPage = () => {
  const [show, setShow] = useState("");
  const onClick = (event: any) => {
    setShow(event.target.id);
  };

  return (
    <Layout>
      <aside className="flex flex-col">
        {Categories.map((category, i) => (
          <div className="grop" key={i}>
            <span id={category.title} onClick={onClick}>
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
    </Layout>
  );
};

export async function getStaticProps(context: GetStaticProps) {
  return {
    props: {},
  };
}

export default Category;
