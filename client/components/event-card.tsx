import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface EventCardProps {
  title: string
  description: string
  date: string
  location: string
  imageSrc: string
  className?: string
}

export function EventCard({ title, description, date, location, imageSrc, className }: EventCardProps) {
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
      <CardHeader>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription className="flex flex-col gap-1 text-xs">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" /> {date}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" /> {location}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="pt-2">
        <Link href="/events" className="w-full">
          <Button variant="outline" size="sm" className="w-full group">
            View Details
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

