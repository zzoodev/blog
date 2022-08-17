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
}

const Category: NextPage<PostProps> = ({ data, content }) => {
  return (
    <Layout>
      <div className="flex w-full justify-end">
        <SideNav />
        <main className="w-[85%] h-max p-6 text-zinc-900 dark:text-zinc-50 leading-7">
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

  console.log(data);

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
      content: value,
    },
  };
};

export default Category;
