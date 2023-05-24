import { Copyright } from "@/components/Copyright";
import { EmptyMemories } from "@/components/EmptyMemories";
import { Hero } from "@/components/Hero";
import { Signin } from "@/components/Signin";

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/*Left*/}
      <div className="relative bg-[url(../assets/bg-stars.svg)] bg-cover flex flex-col items-start justify-between overflow-hidden px-28 py-16 border-r border-white/10">
        {/*Blur*/}
        <div className="absolute right-0 top-1/2 h-[228px] w-[526px] -translate-y-1/2 translate-x-1/2 bg-purple-700 rounded-full blur-full opacity-50" />

        {/*Stripes*/}
        <div className="absolute bottom-0 top-0 right-2 w-2 bg-stripes"></div>

        <Signin />
        <Hero />
        <Copyright />
      </div>

      {/*Right*/}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <EmptyMemories />
      </div>
    </main>
  );
}
