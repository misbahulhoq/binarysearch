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
    title: "জাভাস্ক্রিপ্ট সূচনা ",
    content: "intro-js.mdx",
    code: `console.log("I am starting to learn JavaScript.");`,
    next: "variables",
    previous: "/",
  },
  {
    id: "variables",
    title: "জাভাস্ক্রিপ্ট চলক(variables) ",
    content: "variables.mdx",
    // code: ``,
    next: "data-types",
    previous: "intro-js",
  },
  {
    id: "data-types",
    title: "জাভাস্ক্রিপ্ট ডাটা টাইপ",
    content: "data-types.mdx",
    code: `
let name = "binarySearch"; // String
let age = 1; // Number
let isFree = true; // Boolean
let address; // Undefined
let salary = null; // Null
let uniqueId = Symbol("id"); // Symbol
let bigNumber = 9007199254740991n; // BigInt

// print all the vaules using console.log(). That's your task now.
    `,
    next: null,
    previous: "variables",
  },
  {
    id: "functions",
    title: "জাভাস্ক্রিপ্ট অপারেটর",
    content: "functions.mdx",
    next: null,
    previous: "variables",
  },

  {
    id: "functions",
    title: "জাভাস্ক্রিপ্ট মন্তব্য (Comments)",
    content: "functions.mdx",
    next: null,
    previous: "variables",
  },
  {
    id: "functions",
    title: "জাভাস্ক্রিপ্ট কন্ডিশন",
    content: "functions.mdx",
    next: null,
    previous: "variables",
  },
  {
    id: "functions",
    title: "জাভাস্ক্রিপ্ট লুপ (Loops)",
    content: "functions.mdx",
    next: null,
    previous: "variables",
  },
];
