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
    footer?: string;
    link?: string;
}

export function DemoCard({ title = <p>Title</p>, description = "Card Description", footer = "Card Footer", link = "null" }: DemoCardProps) {
    return (


        <div className=" transition ease-in-out hover:scale-110 hover:invert duration-300 hover:z-10 overflow-hidden shadow-lg   ">

            <Card className="h-full ">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>{description}</CardDescription>
                </CardContent>
                <CardFooter >
                    <Button
                        onClick={() => {

                            window.location.href = link
                        }}

                    >{footer}</Button>

                </CardFooter>
            </Card>
        </div>

    )
}