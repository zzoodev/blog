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
  job: "Publisher && want be Frontend Dev",
  contact: "csbt1033@gmail.com",
  about: `콘텐츠 퍼블리싱이 주 업무이지만 웹 프론트엔드 개발을 하고 싶습니다. 고등학교 3학년때 축구를 그만두고 오랜만에 다시 꿈이 생겼습니다. 훌룡한 웹개발자가 되고싶습니다. 컴퓨터를 더 이해하고 싶습니다. 발전하고 싶습니다.`,
  experience: [
    {
      company: "토브소프트",
      position: "Contents Developer",
      period: "22.02 ~ 재직중",
      content: [
        {
          title: "동아 교육컨텐츠 퍼블리싱",
          description: "전자책 플랫폼",
          do: [
            "수학, 과학 교육 컨텐츠 퍼블리싱",
            "토글, 선잇기, 드래그 기능 개발",
          ],
          tech: ["javascript", "css", "html"],
          link: "naver.com",
        },
        {
          title: "K-Pub",
          description: "전자책 플랫폼",
          do: [
            "프로젝트 리더",
            "메인페이지 개발",
            "E-book 디테일 페이지 개발",
            "API 연동 담당",
          ],
          tech: ["React", "react-hook-form", "react-router", "recoil"],
          link: "http://112.217.210.162:8080/content1/test/jikji_platform/",
        },
      ],
    },
  ],
};
