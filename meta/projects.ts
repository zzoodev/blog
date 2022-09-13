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
    title: "무비 앱",
    intro: `오픈 API로 만든 영화정보 사이트.`,
    description: `오픈 API로 만든 영화정보 사이트.`,
    stacks: ["react", "recoil", "react-query", "react-hook-form"],
    url: "https://zzoodev.github.io/movieApp/",
    image: "images/projects/movieApp.png",
  },
  {
    title: "땅근 마켓",
    intro: "NextJs로 만든 미니 풀스택 앱",
    description: "서버사이드 렌더링, 정적사이트 렌더링",
    stacks: ["react", "swr", "planet-scale"],
    url: "https://carrot-market-rho.vercel.app/",
    image: "images/projects/carrot-market.png",
  },
];
