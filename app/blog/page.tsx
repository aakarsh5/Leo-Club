"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Facebook, ExternalLink, Loader2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/components/language-provider"
import { useEffect, useState } from "react"
import { FacebookPost } from "@/components/facebook-post"

export default function BlogPage() {
  const { t } = useLanguage()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch Facebook posts
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/facebook-posts")
        if (response.ok) {
          const data = await response.json()
          setPosts(data)
        } else {
          console.error("Failed to fetch Facebook posts")
          // Use mock data
          setPosts(getMockPosts())
        }
      } catch (error) {
        console.error("Error fetching Facebook posts:", error)
        // Use mock data
        setPosts(getMockPosts())
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // Mock data for development or when API fails
  function getMockPosts() {
    return [
      {
        id: "1",
        message:
          "We're excited to announce our upcoming Community Health Camp on April 15th at Biratnagar Community Center. Free health checkups and consultations will be available for all community members. Spread the word and join us in making healthcare accessible to everyone!",
        created_time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
        full_picture: "/placeholder.svg?height=300&width=500",
        permalink_url: "https://facebook.com/example",
        likes: 45,
        comments: 12,
        shares: 8,
      },
      {
        id: "2",
        message:
          "Thank you to all the volunteers who participated in our Tree Plantation Drive last weekend! Together, we planted over 100 trees in the city park. Small actions like these make a big difference for our environment and future generations. #GreenBiratnagar #EnvironmentalAction",
        created_time: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
        full_picture: "/placeholder.svg?height=300&width=500",
        permalink_url: "https://facebook.com/example",
        likes: 78,
        comments: 23,
        shares: 15,
      },
      {
        id: "3",
        message:
          "Congratulations to our Leo Club members who received recognition at the District Conference! Your dedication to community service and leadership is truly inspiring. #ProudLeos #LeadershipExcellence",
        created_time: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
        full_picture: "/placeholder.svg?height=300&width=500",
        permalink_url: "https://facebook.com/example",
        likes: 92,
        comments: 31,
        shares: 12,
      },
      {
        id: "4",
        message:
          "Our Digital Literacy Program has now reached 5 schools in Biratnagar! We're teaching essential computer skills to students who otherwise wouldn't have access to technology education. Education is the most powerful tool we can use to change the world.",
        created_time: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days ago
        permalink_url: "https://facebook.com/example",
        likes: 65,
        comments: 18,
        shares: 9,
      },
    ]
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <Badge className="mx-auto animate-fade-in bg-primary text-primary-foreground">{t("blog.title")}</Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl blue-yellow-gradient-text animate-fade-in delay-100">
            {t("blog.heading")}
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl animate-fade-in delay-200 text-balance">
            {t("blog.description")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-between animate-fade-in delay-300">
          <Tabs defaultValue="all" className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-4 rounded-full p-1">
              <TabsTrigger value="all" className="rounded-full">
                {t("blog.categories.all")}
              </TabsTrigger>
              <TabsTrigger value="news" className="rounded-full">
                {t("blog.categories.news")}
              </TabsTrigger>
              <TabsTrigger value="stories" className="rounded-full">
                {t("blog.categories.stories")}
              </TabsTrigger>
              <TabsTrigger value="updates" className="rounded-full">
                {t("blog.categories.updates")}
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder={t("blog.search")} className="w-full pl-8 rounded-full" />
          </div>
        </div>

        <div className="space-y-6 animate-fade-in delay-400">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">{t("blog.facebookUpdates")}</h2>
            <Link
              href="https://facebook.com/your-facebook-page"
              target="_blank"
              className="flex items-center text-primary text-sm font-medium hover:underline"
            >
              <Facebook className="h-4 w-4 mr-1" />
              {t("blog.followFacebook")}
              <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
              <p className="text-muted-foreground">{t("common.loading")}</p>
            </div>
          ) : posts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {posts.map((post, index) => (
                <FacebookPost key={index} post={post} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className="text-muted-foreground">No Facebook posts available at the moment.</p>
            </div>
          )}
        </div>

        <Separator className="my-8" />

        <div className="space-y-6 animate-fade-in delay-500">
          <h2 className="text-2xl font-bold">{t("blog.latestArticles")}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Successful Health Camp Serves Over 200 Residents",
                description:
                  "Our recent health camp provided free medical services to over 200 residents of Biratnagar.",
                date: "March 20, 2024",
                author: "Rahul Sharma",
                category: t("blog.categories.news"),
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Youth Leadership Workshop Inspires Future Leaders",
                description: "Participants share their experiences from our recent leadership development program.",
                date: "March 15, 2024",
                author: "Priya Patel",
                category: t("blog.categories.stories"),
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Clean Water Initiative Expands to New Communities",
                description: "Our flagship project now reaches three additional communities in rural Biratnagar.",
                date: "March 10, 2024",
                author: "Amit Kumar",
                category: t("blog.categories.updates"),
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Leo Club Receives Community Service Excellence Award",
                description: "Our club was recognized for outstanding contributions to community development.",
                date: "March 5, 2024",
                author: "Neha Singh",
                category: t("blog.categories.news"),
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "From Beneficiary to Volunteer: Rajan's Story",
                description:
                  "How a young man who benefited from our programs became one of our most dedicated volunteers.",
                date: "February 28, 2024",
                author: "Rohan Joshi",
                category: t("blog.categories.stories"),
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Annual Report: A Year of Growth and Impact",
                description: "Highlights from our annual report showcasing our achievements and future plans.",
                date: "February 20, 2024",
                author: "Anita Thapa",
                category: t("blog.categories.updates"),
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden flex flex-col card-hover border-none bg-gradient-to-b from-background to-muted/50 shadow-md"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader className="flex-1">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="rounded-full">
                        {post.category}
                      </Badge>
                      <div className="text-xs text-muted-foreground">{post.date}</div>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  </div>
                  <CardDescription className="line-clamp-2">{post.description}</CardDescription>
                </CardHeader>
                <CardFooter className="border-t p-4 flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">By {post.author}</div>
                  <Link
                    href={`/blog/${index + 1}`}
                    className="text-sm font-medium text-primary hover:underline flex items-center"
                  >
                    {t("common.readMore")}
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex justify-center animate-fade-in delay-600">
          <Button variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary/10">
            {t("blog.loadMore")}
          </Button>
        </div>
      </div>
    </div>
  )
}

