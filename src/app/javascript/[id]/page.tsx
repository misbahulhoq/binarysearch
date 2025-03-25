import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { jsCourses as lessons } from "@/data/javascript";
import Link from "next/link";
// import { useState } from "react";
import { readFile } from "@/utils/readFile";

// export async function generateStaticParams() {
//   return lessons.map((lesson) => ({ id: lesson.id }));
// }

export default function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  //   const lesson = lessons.find((l) => {
  //     params.then((p) => l.id === p);
  //   });
  //   const [lesson, setLesson] = useState(null);
  //   params.then((id) => {
  //     // setLesson(lessons.find((l) => l.id === id));
  //     lesson = lessons.find((l) => l.id === id.id);
  //     console.log(lessons.find((l) => l.id === id.id));
  //     console.log(lesson);
  //     console.log(id);
  //   });

  const lesson = lessons.find((l) => {
    return params.then((p) => l.id === p.id);
  });
  console.log(lesson);
  if (!lesson) return <h1>Lesson Not Found</h1>;

  return null;

  const source = readFile(lesson);
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
