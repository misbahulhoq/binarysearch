export const jsCourses = [
  {
    id: "intro-js",
    title: "Introduction to JavaScript",
    content: "intro-js.mdx",
    next: "variables",
    previous: null,
  },
  {
    id: "variables",
    title: "Variables in JavaScript",
    content: "variables.mdx",
    next: "functions",
    previous: "intro-js",
  },
  {
    id: "functions",
    title: "Functions in JavaScript",
    content: "functions.mdx",
    next: null,
    previous: "variables",
  },
];
