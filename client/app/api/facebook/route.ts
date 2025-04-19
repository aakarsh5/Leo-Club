import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = searchParams.get('limit') || '10'
    
    const pageId = process.env.FACEBOOK_PAGE_ID
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN
    
    if (!pageId || !accessToken) {
      return NextResponse.json({ error: 'Facebook API configuration missing' }, { status: 500 })
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
    return NextResponse.json({ error: 'Failed to fetch Facebook posts' }, { status: 500 })
  }
} 