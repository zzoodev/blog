import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import { unified } from "unified";
import Layout from "../../../components/layout";
import SideNav from "../../../components/sideNav";

interface PostProps {
  data: {
    title: string;
    category: string;
    subCategory: string;
    description: string;
    date: Date;
  };
  content: string;
  customMeta: any;
}

const Category: NextPage<PostProps> = ({ data, content, customMeta }) => {
  return (
    <Layout customMeta={customMeta}>
      <div className="flex w-full justify-end">
        <SideNav />
        <main className="base:w-[78%] w-full h-max p-6 text-zinc-900 dark:text-zinc-50 leading-7">
          <h2 className="text-3xl font-black mb-6">{data.title}</h2>
          <div
            className="html text-[16px]"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
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
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data, content } = matter.read(`./posts/${params?.slug}.md`);

  const { value } = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);

  console.log(params);

  const customMeta = {
    title: `Blog | ${params?.category} | ${params?.slug}`,
  };

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
      content: value,
      customMeta,
    },
  };
};

export default Category;
