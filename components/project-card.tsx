import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  date: string
  className?: string
}

export function ProjectCard({ title, description, imageSrc, date, className }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden flex flex-col h-full card-hover border-none bg-gradient-to-b from-background to-muted/50 shadow-md",
        className,
      )}
    >
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="h-full w-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardHeader className="flex-1">
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription className="flex items-center gap-1 text-xs">
          <Calendar className="h-3 w-3" /> {date}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="pt-2">
        <Link href="/projects" className="w-full">
          <Button variant="outline" size="sm" className="w-full group">
            Learn More
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

