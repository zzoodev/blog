import { NextPage } from "next";
import Layout from "./components/layout";
import { projects } from "../meta/projects";
import Link from "next/link";

const Project: NextPage = () => {
  const customMeta = {
    title: "Blog | Project",
    description: "사이드 프로젝트 모음",
  };
  return (
    <Layout customMeta={customMeta}>
      <h1 className="mt-5 font-black text-3xl ml-3">Projects</h1>
      <h2 className="mt-3 dark:font-light font-medium text-sm ml-3">
        끄적끄적 만든것들을 기록합니다. 최근 프로젝트 정렬순입니다.
      </h2>
      <div className="grid grid-cols-1 mobile:grid-cols-2 w-full gap-4 gap-y-8 p-4  mt-4">
        {projects.map((project, i) => (
          <Link key={i} href={project.url}>
            <a target="_blank">
              <div className="relative border dark:border-slate-700 border-slate-300 w-full aspect-video rounded-md overflow-hidden cursor-pointer group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute left-0 top-0 h-full w-full object-cover z-10"
                />
                <div className="absolute left-0 top-0 z-50 bg-opacity-95 bg-black w-full h-full p-3 opacity-0 group-hover:opacity-100 transition-all">
                  <p className="text-sm leading-6">{project.description}</p>
                </div>
              </div>
              <div className="mt-2">
                <h2 className="font-bold text-lg">{project.title}</h2>
                <h3 className="text-[12px] dark:text-slate-200 mt-1">
                  {project.intro}
                </h3>
              </div>
              <div className="flex flex-wrap">
                {project.stacks.map((stack, i) => (
                  <span
                    key={i}
                    className="text-[10px] dark:text-slate-300 font-light md:text-xs"
                  >
                    {stack},&nbsp;
                  </span>
                ))}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Project;
