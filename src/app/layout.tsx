import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import Wave from "react-wavify";
import { GithubIcon, Mail } from "lucide-react";


const inter = Inter({ subsets: ["latin"] });
const dmSerifDisplay = DM_Serif_Display({ subsets: ["latin"], weight: ["400"], variable: "--serif" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  let oscuro;
  return (

    <html lang="en">
      <body className={`${inter.className}`}>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="flex-col flex min-h-screen justify-between">

            <header>
              <Wave fill="	#fafafa"
                paused={false}
                style={{ display: 'flex', rotate: "180deg" }}
                className={`dark:visible invisible h-0 dark:h-full`}
                options={{
                  height: 70,
                  amplitude: 40,
                  speed: 0.15,
                  points: 5
                }}
              />
              <Wave fill="#000000"
                paused={false}
                style={{ display: 'flex', rotate: "180deg" }}
                className={`dark:h-0 `}
                options={{
                  height: 70,
                  amplitude: 40,
                  speed: 0.15,
                  points: 5
                }}
              />
              <nav className="flex items-center justify-between p-8 w-full -mt-40">
                <div className="flex space-x-4">
                  <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"

                    className="invert  mx-auto  mix-blend-difference	"

                    width={90}
                    height={24}
                  />

                </div>
                <div className="flex">
                  <ModeToggle />
                </div>

              </nav>


            </header>
            {children}

            <footer >

              <div className="transition hover:-translate-y-1 duration-200 space-x-4 flex justify-end p-10 -mb-[150px]  mix-blend-difference dark:invert-0 invert ">
                <a className="font-semibold" href="https://github.com/FerLS">@FerLS</a>
                <GithubIcon />
              </div>

              <Wave fill="	#fafafa"
                paused={false}
                style={{ display: 'flex' }}
                className={`dark:visible invisible h-0 dark:h-full`}
                options={{
                  height: 70,
                  amplitude: 40,
                  speed: 0.15,
                  points: 5
                }}
              />
              <Wave fill="#000000"
                paused={false}
                style={{ display: 'flex' }}
                className={`dark:h-0 `}
                options={{
                  height: 70,
                  amplitude: 40,
                  speed: 0.15,
                  points: 5
                }}
              />

            </footer>
          </div>

        </ThemeProvider>


      </body>
    </html >
  );
}
