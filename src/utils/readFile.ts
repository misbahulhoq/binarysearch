import fs from "fs";
import path from "path";

type lesson = {
  content: string;
};
export const readFile = (lesson: lesson) => {
  const contentPath = path.join(
    process.cwd(),
    "src",
    "data",
    "javascript",
    "lessons",
    lesson.content,
  );
  const source = fs.readFileSync(contentPath, "utf8");
  return source;
};
