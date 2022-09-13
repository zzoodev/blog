import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import Layout from "../../../components/layout";
import Post from "../../../components/post";
import SideNav from "../../../components/sideNav";
import fs from "fs";
import path from "path";

interface Post {
  title: string;
  category: string;
  subCategory: string;
  description: string;
  date: string;
  slug: string;
  thumnail: string;
}
interface PostsProps {
  posts: Post[];
}

const Category: NextPage<PostsProps> = ({ posts }) => {
  return (
    <Layout>
      <div className="flex w-full justify-end">
        <SideNav />
        <main className="base:w-[82%] w-full h-max p-6">
          {posts.map((post, i) => (
            <div key={i}>
              <Post post={post}></Post>
            </div>
          ))}
        </main>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const posts: any = fs.readdirSync(`./posts`).map((item) => {
    const post = fs.readFileSync(`./posts/${item}`, "utf-8");
    const [slug, _] = item.split(".");
    return { ...matter(post).data, slug };
  });

  const paths = posts.map((post: any) => ({
    params: { category: post?.category, subCategory: post?.subCategory },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}
export const getStaticProps: GetStaticProps = (ctx) => {
  const posts = fs.readdirSync(`./posts`).map((item) => {
    const post = fs.readFileSync(`./posts/${item}`, "utf-8");
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
