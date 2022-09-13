import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import Layout from "../../../components/layout";
import Post from "../../../components/post";
import SideNav from "../../../components/sideNav";

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
  customMeta: any;
}

const Category: NextPage<PostsProps> = ({ posts, customMeta }) => {
  return (
    <Layout customMeta={customMeta}>
      <div className="flex w-full justify-end">
        <SideNav />
        <main className="base:w-[82%] w-full h-max p-6">
          {posts?.map((post, i) => (
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
  return {
    paths: [],
    fallback: true,
  };
}
export const getStaticProps: GetStaticProps = (ctx) => {
  const posts = readdirSync(`posts`).map((item) => {
    const post = readFileSync(`posts/${item}`, "utf-8");
    const [slug, _] = item.split(".");
    return { ...matter(post).data, slug };
  });
  const filtered = posts.filter(
    (post: any) =>
      post?.category === ctx?.params?.category &&
      post?.subCategory === ctx?.params?.subCategory
  );
  const customMeta = {
    title: `Blog | ${ctx?.params?.category}`,
  };
  return {
    props: {
      posts: JSON.parse(JSON.stringify(filtered)),
      customMeta,
    },
  };
};

export default Category;
