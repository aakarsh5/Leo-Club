type FacebookPost = {
  id: string;
  message?: string;
  created_time: string;
  full_picture?: string;
  permalink_url: string;
};

export async function getFacebookPosts(limit = 10): Promise<FacebookPost[]> {
  try {
    // For static exports, we'll use a client-side fetch to our static API
    // but add a fallback to mock data in case of errors
    try {
      const response = await fetch(`/api/facebook-posts`);

      if (!response.ok) {
        throw new Error(`API returned ${response.status}`);
      }

      const data = await response.json();
      
      return data || getMockPosts();
    } catch (error) {
      console.error("Error fetching from API route:", error);
      return getMockPosts();
    }
  } catch (error) {
    console.error("Error in getFacebookPosts:", error);
    return getMockPosts();
  }
}

// Format Facebook date for display
export function formatFacebookDate(dateString: string): string {
  const date = new Date(dateString);
  
  // Format: "Month Day, Year"
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Mock data for development/fallback
function getMockPosts(): FacebookPost[] {
  return [
    {
      id: "1",
      message: "Excited to announce our upcoming community service project!",
      created_time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      full_picture: "/images/placeholder-social.jpg",
      permalink_url: "https://facebook.com/example"
    },
    {
      id: "2",
      message: "Thank you to all volunteers who helped today!",
      created_time: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      full_picture: "/images/placeholder-social.jpg",
      permalink_url: "https://facebook.com/example"
    }
  ];
} 