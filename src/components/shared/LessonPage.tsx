import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { jsCourses as lessons } from "@/data/javascript";
import Link from "next/link";

export async function generateStaticParams() {
  return lessons.map((lesson) => ({ id: lesson.id }));
}

export default async function LessonPage({
  params,
}: {
  params: { id: string };
}) {
  const lesson = lessons.find((l) => l.id === params.id);
  if (!lesson) return <h1>Lesson Not Found</h1>;

  const contentPath = path.join(
    process.cwd(),
    "src",
    "data",
    "javascript",
    "lessons",
    lesson.content,
  );
  const source = fs.readFileSync(contentPath, "utf8");
  const { content } = matter(source);

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-4 text-3xl font-bold">{lesson.title}</h1>
      <MDXRemote source={content} />

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between">
        {lesson.previous && (
          <Link
            href={`/lesson/${lesson.previous}`}
            className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
          >
            ← Previous
          </Link>
        )}
        {lesson.next && (
          <Link
            href={`/lesson/${lesson.next}`}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Next →
          </Link>
        )}
      </div>
    </div>
  );
}
