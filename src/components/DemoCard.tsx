"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";


interface DemoCardProps {
    title?: React.ReactNode;
    description?: string;
    link?: string;
    className?: string;
}

export function DemoCard({ title = <p>Title</p>, description = "Card Description", link = "null", className }: DemoCardProps) {

    return (
        <div className={`transition-all ease-in-out hover:scale-110 dark:hover:light hover:dark duration-300 hover:z-10 overflow-hidden shadow-lg ${className}`}>

            <Card className="flex-cols h-full justify-between flex flex-col border-2 hover:border-0">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>{description}</CardDescription>
                </CardContent>
                <CardFooter className="flex">
                    <Button
                        onClick={() => {
                            window.location.href = link
                        }}
                    >Try  &rarr;</Button>
                </CardFooter>
            </Card>
        </div >
    )
}