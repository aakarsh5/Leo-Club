# Leo Club Biratnagar - Official Website

A modern, responsive website for Leo Club Biratnagar built with Next.js 15, TypeScript, and Tailwind CSS.

![Leo Club Biratnagar](https://leoclubbiratnagar.org/logo.png)

## Features

- **Multi-language Support**: Available in English and Nepali
- **Responsive Design**: Works on all devices from mobile to desktop
- **Dynamic Content**: Display club activities, projects, and events
- **Online Forms**:
  - Contact Form
  - Membership Application
  - Volunteer Registration
- **Social Media Integration**: Display Facebook posts directly on the website
- **WhatsApp Integration**: Direct chat capability with the club
- **Modern UI/UX**: Using Tailwind CSS and Radix UI components
- **Dark/Light Mode**: Theme toggle for user preference
- **Newsletter Subscription**: Stay updated with club activities

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Form Handling**: React Hook Form with Zod validation
- **Email Service**: EmailJS for form submissions
- **Internationalization**: Custom i18n implementation with language dictionaries
- **Deployment**: Vercel (recommended)

## Installation

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Setup Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Leo-Club.git
   cd Leo-Club
   ```

2. Install dependencies:
   ```bash
   cd client
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Configure environment variables:
   - Create a `.env.local` file in the `client` directory using the template below:
   ```env
   # Facebook API Configuration
   FACEBOOK_PAGE_ID=your_facebook_page_id
   FACEBOOK_ACCESS_TOKEN=your_facebook_access_token

   # EmailJS Configuration
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=your_emailjs_contact_template_id
   NEXT_PUBLIC_EMAILJS_MEMBERSHIP_TEMPLATE_ID=your_emailjs_membership_template_id
   NEXT_PUBLIC_EMAILJS_VOLUNTEER_TEMPLATE_ID=your_emailjs_volunteer_template_id

   # WhatsApp Configuration
   NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER=your_whatsapp_number

   # Other Environment Variables
   NEXT_PUBLIC_SITE_URL=https://leoclubbiratnagar.org
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

## Project Structure

```
client/
├── app/                    # Next.js app directory
│   ├── about/              # About page
│   ├── blog/               # Blog page
│   ├── contact/            # Contact page
│   ├── join/               # Membership page
│   ├── projects/           # Projects page
│   ├── api/                # API routes
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── ui/                 # UI components from shadcn/ui
│   ├── contact-form.tsx    # Contact form component
│   ├── membership-form.tsx # Membership form component
│   ├── volunteer-form.tsx  # Volunteer form component
│   ├── site-header.tsx     # Header component
│   ├── site-footer.tsx     # Footer component
│   └── ...                 # Other components
├── dictionaries/           # Translations
│   ├── en.ts               # English translations
│   ├── ne.ts               # Nepali translations
│   └── index.ts            # Dictionary loader
├── lib/                    # Utility functions
├── hooks/                  # Custom React hooks
├── public/                 # Static assets
├── styles/                 # Additional styles
├── .env.local              # Environment variables
└── ...                     # Configuration files
```

## Customization

- **Content**: Modify the text in the `dictionaries` directory for both English and Nepali
- **Styling**: Adjust theme colors in `tailwind.config.js`
- **Components**: Modify or add components in the `components` directory
- **Pages**: Update or add pages in the `app` directory

## Deployment

The project is optimized for deployment on Vercel:

1. Create a Vercel account and connect your GitHub repository
2. Configure the environment variables in the Vercel dashboard
3. Deploy the project

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature/your-feature-name`
6. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact [your-email@example.com](mailto:your-email@example.com).
