import "server-only"

export interface FacebookPost {
  id: string
  message?: string
  created_time: string
  full_picture?: string
  permalink_url: string
  likes?: number
  comments?: number
  shares?: number
}

export async function getFacebookPosts(): Promise<FacebookPost[]> {
  try {
    // Check if we have the required environment variables
    const pageId = process.env.FACEBOOK_PAGE_ID
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN

    if (!pageId || !accessToken) {
      console.warn("Facebook API credentials not found in environment variables")
      return getMockPosts() // Return mock data if credentials are missing
    }

    // Fetch posts from Facebook Graph API
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${pageId}/posts?fields=id,message,created_time,full_picture,permalink_url,likes.summary(true),comments.summary(true),shares&access_token=${accessToken}`,
      { next: { revalidate: 3600 } }, // Cache for 1 hour
    )

    if (!response.ok) {
      throw new Error(`Facebook API error: ${response.status}`)
    }

    const data = await response.json()

    if (!data.data || !Array.isArray(data.data)) {
      throw new Error("Invalid response format from Facebook API")
    }

    // Transform the data to match our interface
    const posts: FacebookPost[] = data.data.map((post: any) => ({
      id: post.id,
      message: post.message,
      created_time: post.created_time,
      full_picture: post.full_picture,
      permalink_url: post.permalink_url,
      likes: post.likes?.summary?.total_count || 0,
      comments: post.comments?.summary?.total_count || 0,
      shares: post.shares?.count || 0,
    }))

    return posts
  } catch (error) {
    console.error("Error fetching Facebook posts:", error)
    return getMockPosts() // Return mock data on error
  }
}

// Mock data for development or when API fails
function getMockPosts(): FacebookPost[] {
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

