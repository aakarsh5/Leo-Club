# Facebook Integration Setup

This guide explains how to set up the Facebook integration to display your Leo Club's Facebook page posts on your website.

## Prerequisites

1. A Facebook account with admin access to your Leo Club's Facebook Page
2. A Facebook Developer Account (you can create one at [developers.facebook.com](https://developers.facebook.com))

## Step 1: Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com)
2. Click "My Apps" and then "Create App"
3. Select "Business" as the app type
4. Enter your app name (e.g., "Leo Club Website") and contact email
5. Complete the security check and click "Create App"

## Step 2: Add the Pages API to Your App

1. In your app dashboard, click "Add Products" in the left sidebar
2. Find "Pages API" and click "Set Up"

## Step 3: Generate a Page Access Token

1. Go to the "Tools" section in the left sidebar
2. Click on "Graph API Explorer"
3. From the dropdown at the top, select your app
4. Below that, click on "User or Page" and select your Leo Club's Facebook Page
5. Click on "Generate Access Token"
6. Grant the necessary permissions when prompted
7. Copy the generated access token - this is your `FACEBOOK_ACCESS_TOKEN`

**Important:** For a production website, you should generate a long-lived access token. By default, tokens expire after a short period.

To get a long-lived token:
1. Go to [Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/)
2. Paste your short-lived token and click "Debug"
3. Click "Extend Access Token"
4. Copy the new long-lived token

## Step 4: Get Your Page ID

1. Go to your Leo Club's Facebook page
2. Look at the URL, it should look like `https://www.facebook.com/YOUR_PAGE_NAME`
3. To get the numeric ID, you can use the Graph API Explorer
4. In Graph API Explorer, enter `me` in the query field and click "Submit"
5. In the response, look for the `id` field - this is your `FACEBOOK_PAGE_ID`

## Step 5: Update Your Environment Variables

1. Open the `.env.local` file in your project
2. Update the following variables:
   ```
   FACEBOOK_APP_ID=your_app_id
   FACEBOOK_APP_SECRET=your_app_secret
   FACEBOOK_PAGE_ID=your_page_id
   FACEBOOK_ACCESS_TOKEN=your_long_lived_access_token
   ```
3. Save the file and restart your development server

## Testing the Integration

1. Open your website and navigate to the `/social` page
2. You should see your most recent Facebook posts displayed
3. If you encounter any issues, check your browser console for error messages

## Troubleshooting

- **No posts appearing:** Check that your `.env.local` file has the correct values
- **API errors:** Make sure your access token has the necessary permissions and hasn't expired
- **Server errors:** Check your server logs for any authentication or rate limit issues

## Security Notes

- Never commit your `.env.local` file to source control
- Keep your App Secret and Access Token secure
- Consider setting up a system to automatically refresh your access token before it expires
- Use Facebook's rate limiting and monitoring features to prevent abuse

## Further Customization

You can customize how Facebook posts are displayed by modifying:
- `client/components/facebook-posts.tsx` for client-side rendering
- `client/components/facebook-posts-server.tsx` for server-side rendering 