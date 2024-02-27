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
import { useState } from "react";

interface DemoCardProps {
    title?: React.ReactNode;
    description?: string;
    link?: string;
}

export function DemoCard({ title = <p>Title</p>, description = "Card Description", link = "null" }: DemoCardProps) {

    const handleClick = () => {
        document.body.classList.replace('fadein', 'fadeout'); // Reemplaza la clase CSS 'fade-in' por 'fade-out' en el elemento body
        setTimeout(() => {
            window.location.href = link;
        }, 500); // Ajusta el tiempo de espera para que coincida con la duración de la animación de fade-out en CSS
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
