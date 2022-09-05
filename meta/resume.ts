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
  about:
    "안녕하세요. 프론트엔드 개발자 주영석입니다. 문제가 생기면 빠르게 무슨문제인지 파악하고 해결하는것을 즐기며 어렵고 힘든일을 남들보다 꾸준하게 오래지속하는 힘을 가지고 있습니다.",
  experience: [
    {
      company: "토브소프트",
      position: "Contents Developer",
      period: "22.02 ~",
      content: [
        {
          title: "K-Pub",
          description: "전자책 플랫폼",
          do: [
            "폴더 구조 결정",
            "롤링배너 슬라이더 개발",
            "fetch를 활용하여 서버와 연결",
          ],
          tech: ["React", "react-hook-form", "react-router", "recoil"],
          link: "naver.com",
        },
        {
          title: "K-Pub",
          description: "전자책 플랫폼",
          do: [
            "폴더 구조 결정",
            "롤링배너 슬라이더 개발",
            "fetch를 활용하여 서버와 연결",
          ],
          tech: ["React", "react-hook-form", "react-router", "recoil"],
          link: "naver.com",
        },
        {
          title: "K-Pub",
          description: "전자책 플랫폼",
          do: [
            "폴더 구조 결정",
            "롤링배너 슬라이더 개발",
            "fetch를 활용하여 서버와 연결",
          ],
          tech: ["React", "react-hook-form", "react-router", "recoil"],
          link: "naver.com",
        },
      ],
    },
    {
      company: "토브소프트",
      position: "Contents Developer",
      period: "22.02 ~",
      content: [
        {
          title: "K-Pub",
          description: "전자책 플랫폼",
          do: [
            "폴더 구조 결정",
            "롤링배너 슬라이더 개발",
            "fetch를 활용하여 서버와 연결",
          ],
          tech: ["React", "react-hook-form", "react-router", "recoil"],
          link: "naver.com",
        },
      ],
    },
    {
      company: "토브소프트",
      position: "Contents Developer",
      period: "22.02 ~",
      content: [
        {
          title: "K-Pub",
          description: "전자책 플랫폼",
          do: [
            "폴더 구조 결정",
            "롤링배너 슬라이더 개발",
            "fetch를 활용하여 서버와 연결",
          ],
          tech: ["React", "react-hook-form", "react-router", "recoil"],
          link: "naver.com",
        },
      ],
    },
  ],
};
