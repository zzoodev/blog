import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import { Categories } from "../../../../meta/nav";
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
interface CustomMeta {
  [key: string]: any;
}
interface PostsProps {
  posts: Post[];
  customMeta: CustomMeta;
}

const Category: NextPage<PostsProps> = ({ posts, customMeta }) => {
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
  const paths: any = [];

  if (Categories) {
    Categories.forEach((obj) => {
      const category = obj.path;
      obj.subCategories.forEach((sub) => {
        const path = { params: { category, subCategory: sub.path } };
        paths.push(path);
      });
    });
  }

  return {
    paths,
    fallback: "blocking",
  };
}
export const getStaticProps: GetStaticProps = ({ params }) => {
  const posts = readdirSync(`./posts`).map((item) => {
    const post = readFileSync(`./posts/${item}`, "utf-8");
    const [slug, _] = item.split(".");
    return { ...matter(post).data, slug };
  });
  const filtered = posts.filter(
    (post: any) =>
      post?.category === params?.category &&
      post?.subCategory === params?.subCategory
  );
  const customMeta = {
    title: `Blog | ${params?.category} | ${params?.subCategory}`,
  };
  return {
    props: {
      posts: JSON.parse(JSON.stringify(filtered)),
      customMeta,
    },
  };
};

export default Category;
