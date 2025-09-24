# MENAA at De Anza - Official Website

A modern, mobile-first website for the Middle East & North Africa Association at De Anza College.

## Features

- **Responsive Design**: Mobile-first approach with beautiful animations
- **Dark Mode Support**: Automatic dark/light mode with user preference saving
- **Modern Tech Stack**: Built with React, Vite, TailwindCSS, and shadcn/ui
- **Interactive Elements**: Smooth animations powered by Framer Motion
- **QR Code Sharing**: Easy website sharing with QR code generation
- **Cultural Design**: MENA-inspired geometric patterns and color schemes

## Sections

1. **Hero Section**: Welcome banner with cultural background patterns
2. **About Us**: Mission and community information
3. **Quick Links**: Social media and registration links (Instagram, Discord, Member Form)
4. **Upcoming Events**: Showcase of club events and activities
5. **QR Code Section**: Easy sharing functionality
6. **Footer**: Contact information and social links

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS + shadcn/ui components
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **QR Codes**: qrcode.react

## Getting Started

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Customization

### Content Updates
- **About Section**: Update the mission text in `src/components/About.tsx`
- **Events**: Modify the events array in `src/components/Events.tsx`
- **Social Links**: Update URLs in `src/components/Links.tsx` and `src/components/Footer.tsx`

### Styling
- **Colors**: Modify the gradient colors in `src/index.css` and component files
- **Patterns**: Update the geometric SVG pattern in `src/components/Hero.tsx`

## Deployment

Build the project for production:
\`\`\`bash
npm run build
\`\`\`

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## License

© 2025 Middle East & North Africa Association at De Anza College