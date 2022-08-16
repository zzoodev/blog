type Nav = {
  title: string;
  path: string;
};
export const NavLink: Nav[] = [
  { title: "Home", path: "/" },
  { title: "Blog", path: "/blog" },
  { title: "Project", path: "/project" },
  { title: "Resume", path: "/resume" },
];
export const Categories = [
  {
    title: "Go",
    path: "/go",
    subCategories: [
      { title: "basic", path: "/basic" },
      { title: "expert", path: "/expert" },
    ],
  },
  {
    title: "Javascript",
    path: "/javascript",
    subCategories: [
      { title: "basic", path: "/basic" },
      { title: "expert", path: "/expert" },
    ],
  },
  {
    title: "Math",
    path: "/math",
    subCategories: [
      { title: "basic", path: "/basic" },
      { title: "expert", path: "/expert" },
    ],
  },
];
