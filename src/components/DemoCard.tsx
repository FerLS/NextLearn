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
}

export function DemoCard({ title = <p>Title</p>, description = "Card Description", link = "null" }: DemoCardProps) {

    const handleClick = () => {
        window.location.href = link;

    };

    return (
        <div className={`transition-all ease-in-out hover:scale-110 dark:hover:light hover:dark duration-300 hover:z-10 overflow-hidden shadow-lg `}>
            <Card className={`flex-col flex h-full justify-between border-2 `}>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className="h-20">{description}</CardDescription>
                </CardContent>
                <CardFooter>
                    <Button className="button" onClick={handleClick}>Try &rarr;</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
