"use client"

import * as React from "react"
import { Moon, Sun, ActivitySquare } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <Button

            variant="outline" size="icon" className=" border-background dark:border-primary border-2  mix-blend-difference bg-transparent   hover:bg-transparent"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <Sun color="background" className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />


        </Button>


    )
}
