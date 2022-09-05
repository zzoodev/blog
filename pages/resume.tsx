import { NextPage } from "next";
import Layout from "./components/layout";
import { resume } from "../meta/resume";

const Resume: NextPage = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen w-full text-slate-800"></div>
    </Layout>
  );
};

export default Resume;
