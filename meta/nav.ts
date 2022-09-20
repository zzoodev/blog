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
    title: "Javascript",
    path: "javascript",
    subCategories: [
      { title: "basic", path: "basic" },
      { title: "expert", path: "expert" },
    ],
  },
  {
    title: "Algorithm",
    path: "algorithm",
    subCategories: [
      { title: "basic", path: "basic" },
      { title: "expert", path: "expert" },
    ],
  },
];
