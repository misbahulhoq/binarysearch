import fs from "fs";
import path from "path";

export const readFile = (lesson: any) => {
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
