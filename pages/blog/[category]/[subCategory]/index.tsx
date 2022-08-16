import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Layout from "../../../components/layout";
import SideNav from "../../../components/sideNav";

interface Post {
  title: string;
  category: string;
  subCategory: string;
  description: string;
  date: Date;
  slug: string;
}
interface PostsProps {
  posts: Post[];
}

const Category: NextPage<PostsProps> = ({ posts }) => {
  return (
    <Layout>
      <div className="flex">
        <SideNav />
        <main className="w-[85%] h-max justify-end">
          {posts.map((post, i) => (
            <Link
              key={i}
              href={`/blog/${post.category}/${post.subCategory}/${post.slug}`}
            >
              <div>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
            </Link>
          ))}
        </main>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
export const getStaticProps: GetStaticProps = (ctx) => {
  console.log(ctx);
  const posts = readdirSync(`./posts`).map((item) => {
    const post = readFileSync(`./posts/${item}`, "utf-8");
    const [slug, _] = item.split(".");
    return { ...matter(post).data, slug };
  });
  const filtered = posts.filter(
    (post: any) =>
      post?.category === ctx?.params?.category &&
      post?.subCategory === ctx?.params?.subCategory
  );
  return {
    props: {
      posts: JSON.parse(JSON.stringify(filtered)),
    },
  };
};

export default Category;
