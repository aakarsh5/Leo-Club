type FacebookPost = {
  id: string;
  message?: string;
  created_time: string;
  full_picture?: string;
  permalink_url: string;
};

export async function getFacebookPosts(limit = 10): Promise<FacebookPost[]> {
  try {
    // Using our API route so we don't expose the access token to the client
    const response = await fetch(`/api/facebook?limit=${limit}`);

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }

    const data = await response.json();
    
    return data.data || [];
  } catch (error) {
    console.error("Error fetching Facebook posts:", error);
    return [];
  }
}

export function formatFacebookDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('default', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  }).format(date);
} 