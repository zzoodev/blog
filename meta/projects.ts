interface Project {
  title: string;
  intro: string;
  description: string;
  stacks: string[];
  url: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "K-PUB",
    intro: "전자책 플랫폼",
    description:
      "회사에서 리액트 경험자가 저밖에 없었고 SPA로 프론트엔드 개발이 필요하다고해서 프로젝트 리더를 맡아 이끌었습니다.",
    stacks: [
      "React",
      "Styled-component",
      "Recoil",
      "React-query",
      "React-hook-form",
    ],
    url: "http://112.217.210.162:8080/content1/test/jikji_platform/",
    image: "images/projects/kpub.png",
  },
  {
    title: "땅근 마켓",
    intro: "NextJs로 만든 미니 풀스택 앱",
    description:
      "NextJs, Planet-Scale, Prisma 로 작게나마 풀스택 웹을 만들어 봄으로써 웹개발의 전체적인 흐름을 알게되었습니다.",
    stacks: ["Next Js", "prisma", "planet-scale", "swr", "tailwind"],
    url: "https://carrot-market-rho.vercel.app/",
    image: "images/projects/carrot-market.png",
  },
  {
    title: "무비 앱",
    intro: `오픈 API로 만든 영화정보 사이트.`,
    description: `JS 내장 함수인 fetch 함수를 통해 API 통신에 대해 배웠고 서버에서 받은 데이터를 화면에 뿌려주는 작업에 능숙해졌습니다.`,
    stacks: ["react", "recoil", "react-query", "react-hook-form"],
    url: "https://zzoodev.github.io/movieApp/",
    image: "images/projects/movieApp.png",
  },

  {
    title: "All T",
    intro: "Sass로 만든 정적 웹사이트",
    description: `자바스크립트로 DOM을 조작하는 것에 익숙해졌습니다. Scss를 활용해 CSS Preprocessor를 경험했습니다.`,
    stacks: ["html", "scss", "javascript"],
    url: "https://zzoodev.github.io/allt/",
    image: "images/projects/allt.png",
  },
  {
    title: "UM",
    intro: "html,css,js 로 만든 정적 웹사이트",
    description: "웹사이트의 기초인 html, css, javascript 에 익숙해졌습니다.",
    stacks: ["html", "css", "javascript"],
    url: "https://zzoodev.github.io/um/",
    image: "images/projects/um.png",
  },
];
