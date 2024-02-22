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
    title?: string;
    description?: string;
    footer?: string;
}

export function DemoCard({ title = "Card Title", description = "Card Description", footer = "Card Footer" }: DemoCardProps) {
    return (


        <div className="transition ease-in-out hover:scale-110 hover:invert  duration-300 hover:z-10  overflow-hidden">

            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>{description}</CardDescription>
                </CardContent>
                <CardFooter>
                    <Button>{footer}</Button>
                </CardFooter>
            </Card>
        </div>

    )
}