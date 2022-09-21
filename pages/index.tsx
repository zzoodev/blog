import { readdirSync, readFileSync } from "fs";
import type { GetStaticProps, NextPage } from "next";
import Layout from "./components/layout";
import matter from "gray-matter";
import React, { useState } from "react";
import Post from "./components/post";

interface Post {
  category: string;
  subCategory: string;
  date: string;
  description: string;
  slug: string;
  title: string;
}
interface PostsProps {
  posts: Post[];
}

const Home: NextPage<PostsProps> = ({ posts }) => {
  const [allPost, setAllPost] = useState(posts);

  const onChange = (event: any) => {
    const value = event.target.value;

    setAllPost(
      posts.filter(
        (post) =>
          post?.title?.includes(value) ||
          post?.description?.includes(value) ||
          post?.subCategory?.includes(value)
      )
    );
  };

  return (
    <Layout>
      <div className="px-4">
        <form className="relative w-full h-10 mt-12">
          <input
            onChange={onChange}
            type="text"
            className="w-full h-10 rounded-full outline-none px-4 text-zinc-800 border border-[#181818]"
            placeholder="Search..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="absolute right-4 top-[10px] w-5 h-5"
          >
            <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
          </svg>
        </form>

        <div className="flex flex-col mt-12">
          {allPost.map((post, i) => (
            <div key={i}>
              <Post post={post}></Post>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  const posts = readdirSync("./posts").map((post) => {
    const [slug, _] = post.split(".");
    const content = readFileSync(`./posts/${post}`, "utf-8");
    return { ...matter(content).data, slug };
  });

  const aranged = posts.sort((a: any, b: any) => {
    return a.date - b.date;
  });

  return {
    props: {
      posts: JSON.parse(JSON.stringify(aranged)).reverse(),
    },
  };
};

export default Home;
