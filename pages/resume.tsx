import { NextPage } from "next";
import Layout from "./components/layout";
import { resume } from "../meta/resume";
import Link from "next/link";

const Resume: NextPage = () => {
  const { name, about, job, contact, experience } = resume;

  const customMeta = {
    title: "Blog | Resume",
    description: "zzoo의 이력서",
  };

  return (
    <Layout customMeta={customMeta}>
      <div className="flex flex-col bg-white min-h-screen w-full text-slate-700 p-6">
        <span className="font-bold text-2xl mt-2">{name}</span>
        <span className="mt-4 font-bold">{job}</span>
        <span className="text-xs mt-1">{contact}</span>
        <p className="my-6 text-slate-500 text-xs">{about}</p>
        <hr />
        <div className="mt-6">
          <h3 className="text-xl font-bold text-slate-700 -mb-4">Experience</h3>
          {experience.map((exp, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-bold mt-6">{exp.company}</span>
              <div className="flex items-center text-xs mt-1">
                <span>{exp.position}</span>
                <span className="mx-2 text-xs">|</span>
                <span>{exp.period}</span>
              </div>

              <div>
                {exp.content.map((content, i) => (
                  <div
                    key={i}
                    className="mt-3 border border-slate-200 py-3 px-4 rounded-sm"
                  >
                    <span className="font-bold text-md block">
                      {content.title}
                    </span>
                    <p className="text-[11px] text-slate-500">
                      {content.description}
                    </p>
                    <div className="flex flex-col mt-4 ml-1 text-sm text-slate-700">
                      {content.do.map((iDid, i) => (
                        <span key={i}>- {iDid}</span>
                      ))}
                    </div>
                    <div className="flex text-slate-500 text-xs mt-4">
                      {content.tech.map((stack, i) => (
                        <span key={i} className="mr-2">
                          {stack}
                          {i === content.tech.length - 1 ? "" : ","}
                        </span>
                      ))}
                    </div>

                    <a
                      href={content.link}
                      className="text-xs text-cyan-500 mt-2 block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      링크@ {content.link}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
