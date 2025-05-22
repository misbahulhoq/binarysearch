type Course = {
  id: string;
  title: string;
  content: string;
  code?: string;
  next: string | null;
  previous: string | null;
};

export const jsCourses: Course[] = [
  // {
  //   id: "intro-js",
  //   title: "জাভাস্ক্রিপ্ট সূচনা ",
  //   content: "intro-js.mdx",
  //   code: `console.log("I am starting to learn JavaScript.");`,
  //   next: "variables",
  //   previous: "/",
  // },
  {
    id: "variables",
    title: "জাভাস্ক্রিপ্ট চলক(variables) ",
    content: "variables",
    // code: ``,
    next: "data-types",
    previous: "/",
  },
  {
    id: "data-types",
    title: "জাভাস্ক্রিপ্ট ডাটা টাইপ",
    content: "data-types",
    code: `
  // Primitive data types. 
  let name = "binarySearch"; // String
  let age = 1; // Number
  let isFree = true; // Boolean
  let address; // Undefined
  let salary = null; // Null
  let uniqueId = Symbol("id"); // Symbol
  let bigNumber = 9007199254740991n; // BigInt

  // Non-primitive data types.
  let obj = {
    name: "binarySearch",
    age: 1,
    isFree: true,
    address: undefined,
    salary: null,
    uniqueId: Symbol("id"),
    bigNumber: 9007199254740991n,
  };

  // print all the vaules using console.log(). That's your task now.
    `,
    next: "operators",
    previous: "variables",
  },
  {
    id: "operators",
    title: "জাভাস্ক্রিপ্ট অপারেটর",
    content: "operators",
    code: `
let a = 10;
let b = 5;
console.log(a + b); // Output: 15
console.log(a % b); // Output: 0
    `,
    next: "comments",
    previous: "data-types",
  },

  {
    id: "comments",
    title: "জাভাস্ক্রিপ্ট মন্তব্য (Comments)",
    content: "comments",
    next: "conditions",
    previous: "variables",
  },
  {
    id: "conditions",
    title: "জাভাস্ক্রিপ্ট কন্ডিশন",
    content: "functions",
    next: "functions",
    previous: "variables",
  },
  {
    id: "functions",
    title: "জাভাস্ক্রিপ্ট লুপ (Loops)",
    content: "functions",
    next: null,
    previous: "variables",
  },
].map((item) => {
  return { ...item, content: item.content + ".mdx" };
});
