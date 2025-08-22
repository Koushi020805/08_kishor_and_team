AutoCustom Pro - Car Customization Website
A professional, modern website for automotive customization services built with React, TypeScript, and Tailwind CSS.

Features
Modern Design: Sleek dark theme with automotive-inspired styling
Responsive Layout: Optimized for all devices (mobile, tablet, desktop)
Interactive Components: Smooth animations and hover effects
Service Showcase: Comprehensive display of customization services
Portfolio Gallery: Filterable project gallery with high-quality images
Contact Forms: Professional contact section with multiple contact methods
Performance Optimized: Built with Vite for fast loading and development
Tech Stack
Frontend: React 18 with TypeScript
Styling: Tailwind CSS
Icons: Lucide React
Build Tool: Vite
Linting: ESLint with TypeScript support
Getting Started
Prerequisites
Node.js (version 16 or higher)
npm or yarn
Installation
Clone the repository:
git clone https://github.com/yourusername/car-customization-website.git
cd car-customization-website
Install dependencies:
npm install
Start the development server:
npm run dev
Open your browser and navigate to http://localhost:5173
Available Scripts
npm run dev - Start development server
npm run build - Build for production
npm run preview - Preview production build
npm run lint - Run ESLint
Project Structure
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services showcase
│   ├── Gallery.tsx     # Project gallery
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles

Customization
Colors
The website uses a custom color scheme defined in Tailwind CSS. Main colors include:

Primary: Red (#DC2626)
Background: Gray-900 (#111827)
Cards: Gray-800 (#1F2937)
Images
All images are sourced from Pexels and can be easily replaced by updating the image URLs in the respective components.

Content
Update the content in each component file to match your business information:

Company name and branding
Services offered
Contact information
Portfolio projects
Deployment
Build for Production
npm run build
The built files will be in the dist directory, ready for deployment to any static hosting service.

Deployment Options
Netlify: Connect your GitHub repository for automatic deployments
Vercel: Import your GitHub repository for seamless deployment
GitHub Pages: Use GitHub Actions for automated deployment
Traditional Hosting: Upload the dist folder contents to your web server
Contributing
Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For questions or support, please contact:

Email: info@autocustompro.com
Website: AutoCustom Pro
Built with ❤️ using React and Tailwind CSS
