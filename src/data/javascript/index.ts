type Course = {
  id: string;
  title: string;
  content: string;
  code?: string;
  next: string | null;
  previous: string | null;
};

export const jsCourses: Course[] = [
  {
    id: "intro-js",
    title: "Introduction to JavaScript",
    content: "intro-js.mdx",
    code: `console.log("Hello, JavaScript!");`,
    next: "variables",
    previous: "/",
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
