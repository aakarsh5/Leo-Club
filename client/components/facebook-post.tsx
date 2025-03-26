"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ThumbsUp, MessageSquare, Share2, ExternalLink } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { useLanguage } from "@/components/language-provider"

interface FacebookPostProps {
  post: {
    id: string
    message?: string
    created_time: string
    full_picture?: string
    permalink_url: string
    likes?: number
    comments?: number
    shares?: number
  }
}

export function FacebookPost({ post }: FacebookPostProps) {
  const createdAt = new Date(post.created_time)
  const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true })
  const { t } = useLanguage()

  return (
    <Card className="overflow-hidden flex flex-col card-hover border-none bg-gradient-to-b from-background to-muted/50 shadow-md">
      {post.full_picture && (
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={post.full_picture || "/placeholder.svg"}
            alt="Facebook post image"
            width={500}
            height={300}
            className="h-full w-full object-cover transition-all hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary p-1">
            <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium">{t("common.leoClubFull")}</p>
            <p className="text-xs text-muted-foreground">{timeAgo}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        {post.message && <p className="text-muted-foreground line-clamp-4 mb-2">{post.message}</p>}
      </CardContent>
      <CardFooter className="border-t p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center text-muted-foreground text-sm">
            <ThumbsUp className="h-4 w-4 mr-1 text-primary" />
            {post.likes || 0}
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <MessageSquare className="h-4 w-4 mr-1 text-primary" />
            {post.comments || 0}
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <Share2 className="h-4 w-4 mr-1 text-primary" />
            {post.shares || 0}
          </div>
        </div>
        <Link
          href={post.permalink_url}
          target="_blank"
          className="text-sm font-medium text-primary hover:underline flex items-center"
        >
          {t("common.viewDetails")}
          <ExternalLink className="ml-1 h-3 w-3" />
        </Link>
      </CardFooter>
    </Card>
  )
}

