import { NextResponse } from 'next/server'

// Instead of using dynamic request, we'll define a fixed config
export async function GET() {
  try {
    const limit = '10' // Default value
    
    const pageId = process.env.FACEBOOK_PAGE_ID
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN
    
    if (!pageId || !accessToken) {
      // Return mock data
      return NextResponse.json({ 
        data: getMockPosts() 
      })
    }

    const response = await fetch(
      `https://graph.facebook.com/v18.0/${pageId}/posts?fields=id,message,created_time,full_picture,permalink_url&limit=${limit}&access_token=${accessToken}`,
      { next: { revalidate: 3600 } } // Revalidate every hour
    )

    if (!response.ok) {
      throw new Error(`Facebook API returned ${response.status}`)
    }

    const data = await response.json()
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching Facebook posts:', error)
    return NextResponse.json({ 
      data: getMockPosts() 
    })
  }
}

// Mock data for static export
function getMockPosts() {
  return [
    {
      id: "1",
      message: "Working on our community service project today! #LeoClub",
      created_time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      full_picture: "/images/placeholder-social.jpg",
      permalink_url: "https://facebook.com/example"
    },
    {
      id: "2",
      message: "Thank you to all our volunteers who helped with today's event!",
      created_time: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      full_picture: "/images/placeholder-social.jpg",
      permalink_url: "https://facebook.com/example"
    },
    {
      id: "3",
      message: "Join us next week for our environmental cleanup drive! #Community",
      created_time: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
      full_picture: "/images/placeholder-social.jpg",
      permalink_url: "https://facebook.com/example"
    }
  ]
} 