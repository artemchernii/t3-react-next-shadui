import { Suspense } from "react";
import { db } from "~/server/db";

export default async function HomePage() {
  const data = await db.query.posts.findMany();
  console.log(data, "DATA =>");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="flex items-center gap-2 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <Suspense fallback={<span>Loading...</span>}>
            <span className="text-[hsl(280,100%,70%)]">T3</span>
          </Suspense>
          <span className="text-white">Gallery</span>
        </h1>
      </div>
    </main>
  );
}
