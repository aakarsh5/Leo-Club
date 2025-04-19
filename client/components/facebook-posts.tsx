"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { getFacebookPosts, formatFacebookDate } from '@/utils/facebook'
import { useLanguage } from '@/components/language-provider'

type FacebookPost = {
  id: string
  message?: string
  created_time: string
  full_picture?: string
  permalink_url: string
}

export function FacebookPosts() {
  const [posts, setPosts] = useState<FacebookPost[]>([])
  const [loading, setLoading] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    async function loadPosts() {
      try {
        const fetchedPosts = await getFacebookPosts(6)
        setPosts(fetchedPosts)
      } catch (error) {
        console.error('Error fetching Facebook posts:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  const formatMessage = (message?: string) => {
    if (!message) return ''
    const truncated = message.length > 120 ? `${message.substring(0, 120)}...` : message
    return truncated
  }

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-4 w-40" />
        </div>
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <CardHeader>
              <Skeleton className="h-5 w-32 mb-2" />
              <Skeleton className="h-4 w-full" />
            </CardHeader>
            <CardFooter>
              <Skeleton className="h-9 w-28" />
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <Card className="p-6 text-center">
        <p className="text-muted-foreground mb-4">{t("blog.noFacebookPosts")}</p>
        <Button asChild variant="outline">
          <Link href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
            <Facebook className="mr-2 h-4 w-4" />
            {t("blog.followFacebook")}
          </Link>
        </Button>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Facebook className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-medium">{t("blog.facebookUpdates")}</h3>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden flex flex-col">
            {post.full_picture && (
              <div className="relative h-48 w-full">
                <Image 
                  src={post.full_picture} 
                  alt="Facebook post"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            )}
            <CardHeader className="flex-1">
              <CardDescription>{formatFacebookDate(post.created_time)}</CardDescription>
              <CardTitle className="text-base">{formatMessage(post.message)}</CardTitle>
            </CardHeader>
            <CardFooter>
              <Button asChild variant="outline" size="sm">
                <Link href={post.permalink_url} target="_blank" rel="noopener noreferrer">
                  {t("common.readMore")}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center mt-4">
        <Button asChild variant="outline">
          <Link href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
            <Facebook className="mr-2 h-4 w-4" />
            {t("blog.followFacebook")}
          </Link>
        </Button>
      </div>
    </div>
  )
} 