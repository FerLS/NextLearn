import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DemoCard } from "@/components/DemoCard";
import { Calculator, Calendar, Sparkles, Star } from "lucide-react";

export default function Home() {



  return (


    <main>


      <div className="flex flex-col items-center justify-center mt-10">
        <p className="text-4xl font-bold text-center justify-center">Made with</p>


        <Image
          src="/next.svg"
          alt="Vercel Logo"
          className="dark:invert  mx-auto my-12 loading-animation"
          width={200}
          height={24}
        />
      </div>
      <div className="flex justify-center gap-4  main-buttons">
        <Button className="transition hover:-translate-y-1 hover:-translate-x-1 hover:scale-110">
          <a href="https://nextjs.org/docs" className="text-xl font-bold">
            Documentation &rarr;
          </a>
        </Button>
        <Button className="transition hover:-translate-y-1 hover:translate-x-1 hover:scale-110">
          <a href="https://nextjs.org/learn" className="text-xl font-bold">
            Next.js Learn &rarr;
          </a>
        </Button>


      </div>

      <div className="mt-10 p-8 grid-container  gap-4 place-items-stretch  ">
        <DemoCard
          title={
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Calculator size={32} />
                <span>Calculator</span>
              </div>
              <div className="flex">

              </div>
            </div>


          }
          description="A simple calculator that can add, subtract, multiply and divide."
          link="/calculator"
        />
        <DemoCard
          title={
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Calendar size={32} />
                <span>Calendar</span>
              </div>
              <div className="flex">
                <div className="items-center bg-green-400 rounded-full p-1.2 flex space-x-1 px-2">
                  <Sparkles size={18} color="background" />
                  <span className="text-[background]  text-base ">New</span>
                </div>
              </div>
            </div>


          }
          description=" A simple calendar that can add, delete and update events."
          link="/calendar"

        />

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