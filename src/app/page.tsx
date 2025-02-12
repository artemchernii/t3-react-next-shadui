"use client";
import {Suspense} from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] flex items-center gap-2">
          <Suspense fallback={<span>Loading...</span>}>
          <span className="text-[hsl(280,100%,70%)]">T3</span>
          </Suspense>
          <span className='text-white'>
            Gallery
          </span>
        </h1>
        <Image src={'https://96a9dut9b6.ufs.sh/f/ntp52OKEit8jUs1nP6H2wWfgF5xhjmRHt8BkC9zQXasDuE10'} alt="T3" width={200} height={200} />
      </div>
    </main>
  );
}
