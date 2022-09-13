import { NextPage } from "next";
import Layout from "../components/layout";
import SideNav from "../components/sideNav";

const Blog: NextPage = () => {
  const customMeta = {
    title: "Blog | Post",
    description: "zzoo의 기록들",
  };
  return (
    <Layout customMeta={customMeta}>
      <SideNav />
      <h1>Blog</h1>
    </Layout>
  );
};

export default Blog;
