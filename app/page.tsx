"use client";

import Form from "@/components/form";

export default function Home() {

  return (
    <main className="flex font-poppins min-h-screen flex-col items-center justify-center p-8 bg-no-repeat bg-center bg-cover bg-[url('/images/bg-intro-desktop.png')] bg-red-400">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] md:gap-[4rem] w-full">
        <div className="flex flex-col items-end md:items-end md:justify-center rounded-xl text-center md:text-left">
          <div className="bg-amber-800 shadow-card p-6 rounded-lg max-w-[29.8rem]">
        <h1 className="text-white text-3xl md:text-5xl font-bold w-full">Learn to code by watching others</h1>
        <p className="text-white font-medium mt-4 md:mt-8 text-md text-center md:text-left ">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
          </div>
        </div>
        <section className="flex flex-col items-center justify-center gap-8 max-w-[33.2rem]">
          <div className="flex flex-col lg:flex-row bg-purple-700 p-4 rounded-lg text-white w-full items-center justify-center shadow-card gap-2 transition hover:bg-purple-900 duration-500 ease-linear hover:translate-x-2">
          <strong className="font-bold">Try free for 7 days</strong> 
          <p className="text-white"> then $20/mo. thereafter
            </p>
          </div>
          <Form />
        </section>
      </section>
    </main>
  );
}

