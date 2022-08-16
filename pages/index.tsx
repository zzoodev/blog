import { readdirSync, readFileSync } from "fs";
import type { GetStaticProps, NextPage } from "next";
import Layout from "../components/layout";
import matter from "gray-matter";
import Link from "next/link";
import React, { useState } from "react";

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
          post.title.includes(value) ||
          post.description.includes(value) ||
          post.subCategory.includes(value)
      )
    );
  };
  return (
    <Layout>
      <input onChange={onChange} type="text" className="w-full border" />
      <div className="flex flex-col">
        {allPost.map((post, i) => (
          <Link key={i} href={`/blog/${post.category}/${post.slug}`}>
            <div>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          </Link>
        ))}
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
      posts: JSON.parse(JSON.stringify(aranged)),
    },
  };
};

export default Home;
