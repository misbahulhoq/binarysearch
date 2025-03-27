import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { jsCourses as lessons } from "@/data/javascript";
import Link from "next/link";
import { readFile } from "@/utils/readFile";
import "../../tutorials.css";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const lesson = lessons.find((lessons) => lessons.id === id);

  if (!lesson) return <h1>Lesson Not Found</h1>;
  const source = readFile(lesson);
  const { content } = matter(source);

  return (
    <div className="tutorial container-center mx-auto max-w-3xl">
      {/* <h1 className="mb-4 text-3xl font-bold">{lesson.title}</h1> */}
      <MDXRemote source={content} />

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between">
        {lesson.previous && (
          <Link
            href={`/javascript/${lesson.previous}`}
            className="rounded bg-gray-200 px-4 py-2 text-black hover:bg-gray-300"
          >
            ← Previous
          </Link>
        )}
        {lesson.next && (
          <Link
            href={`/javascript/${lesson.next}`}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Next →
          </Link>
        )}
      </div>
    </div>
  );
}
