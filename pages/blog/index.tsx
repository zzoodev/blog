import { GetStaticProps, NextPage } from "next";
import Layout from "../components/layout";
import SideNav from "../components/sideNav";

const Blog: NextPage = () => {
  return (
    <Layout>
      <SideNav />
    </Layout>
  );
};

export async function getStaticProps(context: GetStaticProps) {
  return {
    props: {},
  };
}

export default Blog;
