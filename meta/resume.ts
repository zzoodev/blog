interface Resume {
  name: string;
  job: string;
  contact: string;
  about: string;
  experience: Experience[];
}
interface Experience {
  company: string;
  position: string;
  period: string;
  content: Content[];
}
interface Content {
  title: string;
  description: string;
  do: string[];
  tech: string[];
  link: string;
}

export const resume: Resume = {
  name: "주영석",
  job: "Frontend Developer",
  contact: "csbt1033@gmail.com",
  about: "안녕하세요. 프론트엔드 개발자 주영석입니다.",
  experience: [
    {
      company: "토브소프트",
      position: "Contents Developer",
      period: "22.02 ~",
      content: [
        {
          title: "K-Pub",
          description: "전자책 플랫폼",
          do: ["메인 개발"],
          tech: ["React"],
          link: "naver.com",
        },
      ],
    },
  ],
};
