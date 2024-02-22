import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DemoCard } from "@/components/DemoCard";





export default function Home() {
  return (
    <main>

      <div className=" flex flex-col items-center justify-center mt-10">
        <p className="text-4xl font-bold">Loading...</p>


        <Image
          src="/next.svg"
          alt="Vercel Logo"
          className="dark:invert mx-auto my-12"
          width={100}
          height={24}
        />
      </div>

      <div className="flex justify-center space-x-4">
        <Button >
          <a href="https://nextjs.org/docs" className="text-xl font-bold">
            Documentation &rarr;
          </a>
        </Button>
        <Button >
          <a href="https://nextjs.org/learn" className="text-xl font-bold">
            Next.js Learn &rarr;
          </a>
        </Button>


      </div>
      <div className=" justify-center  p-10  grid grid-cols-5 gap-4 flex">

        <DemoCard />
        <DemoCard />
        <DemoCard />
        <DemoCard />
        <DemoCard />
        <DemoCard />
        <DemoCard />
        <DemoCard />
        <DemoCard />
        <DemoCard />
      </div>

    </main >
  );
}