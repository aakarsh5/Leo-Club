import { NextResponse } from "next/server"

export const dynamic = "force-static";

export async function GET() {
  try {
    // For static export, we'll rely on mock data
    return NextResponse.json(getMockPosts(), { status: 200 })
  } catch (error) {
    console.error("Error fetching Facebook posts:", error)
    return NextResponse.json(getMockPosts(), { status: 200 })
  }
}

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

