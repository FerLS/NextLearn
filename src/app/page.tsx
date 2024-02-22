import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DemoCard } from "@/components/DemoCard";
import { Calculator } from "lucide-react";





export default function Home() {
  return (
    <main>

      <div className="flex flex-col items-center justify-center mt-10">
        <p className="text-4xl font-bold text-center justify-center">Made with</p>


        <Image
          src="/next.svg"
          alt="Vercel Logo"
          className="dark:invert mx-auto my-12 loading-animation"
          width={200}
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
      <div className="p-8 grid grid-cols-5 gap-4 place-items-stretch mt-10 ">
        <DemoCard
          title={
            <div className="flex items-center space-x-2">
              <Calculator size={32} />
              <span>Calculator</span>
            </div>
          }
          description="A simple calculator that can add, subtract, multiply and divide."
          footer="Try"
          link="/calculator"
        />
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