import { NextPage } from "next";
import Link from "next/link";
import React from "react";

interface PostProps {
  post: {
    title: string;
    category: string;
    subCategory: string;
    date: string;
    description: string;
    slug: string;
    thumnail?: string;
  };
}

const Post: NextPage<PostProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post?.category}/${post?.subCategory}/${post?.slug}`}>
      <div className="flex justify-between items-center w-full h-32 py-4 px-2 hover:bg-zinc-300 dark:hover:bg-zinc-800">
        <div>
          <h2 className="font-extrabold text-xl cursor-pointer">
            {post?.title}
          </h2>
          <p className="font-thin text-xs mt-3 cursor-pointer">
            {post?.description}
          </p>
          <span className="font-thin text-xs text-zinc-500">
            {post?.date?.slice(0, 10)}
          </span>
        </div>
        {post?.thumnail ? (
          <img
            src={post?.thumnail}
            className="h-full aspect-square rounded-md object-cover"
            alt=""
          />
        ) : null}
      </div>
    </Link>
  );
};

export default Post;
