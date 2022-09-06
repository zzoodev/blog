import { GetStaticProps, NextPage } from "next";
import Layout from "../components/layout";
import SideNav from "../components/sideNav";

const Blog: NextPage = () => {
  return (
    <Layout>
      <SideNav />
      <h1>Blog</h1>
    </Layout>
  );
};

export async function getStaticProps(context: GetStaticProps) {
  return {
    props: {},
  };
}

export default Blog;
