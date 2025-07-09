# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features beautiful animations, dark/light theme support, and a clean, professional design.

## 🚀 Features

- 🎨 Modern, responsive design with dark/light theme
- ⚡ Smooth animations and transitions with Framer Motion
- 📱 Mobile-first responsive design
- 🖼️ Lazy loading images with fallbacks
- 🔍 SEO optimized with meta tags and structured data
- 📧 Contact form with Nodemailer integration
- 🗺️ Google Maps integration
- 📄 Resume download functionality
- 🎯 Project showcase with filtering
- 🏆 Skills visualization with progress bars
- 🎓 Education timeline
- 🏅 Certificates showcase
- ⌨️ Typewriter text animation
- 🔒 Security headers and input validation

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **SEO**: React Helmet Async
- **Email**: Nodemailer
- **Build Tool**: Vite
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your email credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   CONTACT_EMAIL=where-you-want-to-receive-messages@gmail.com
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📧 Email Setup

To enable the contact form functionality:

1. **Enable 2-factor authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. **Update environment variables** with your credentials

## 🎨 Customization

### Updating Portfolio Data

All portfolio content is stored in `src/data/portfolio.ts`. Edit this file to update:

- **Profile Information**: Name, title, bio variations, contact details, social links
- **Projects**: Add/edit your projects with descriptions, technologies, and links
- **Skills**: Update your technical skills with proficiency levels
- **Qualifications**: Add your education and certifications
- **Certificates**: Showcase your professional certifications
- **Settings**: Site name, description, and other metadata

### Example: Adding a New Project

```typescript
// In src/data/portfolio.ts
export const projectsData = [
  // ... existing projects
  {
    id: 'new-project',
    title: 'My New Project',
    description: 'Detailed description of the project...',
    shortDescription: 'Brief project description',
    image: 'https://example.com/project-image.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    links: {
      demo: 'https://demo.example.com',
      github: 'https://github.com/username/project',
      live: 'https://live.example.com'
    },
    featured: true,
    category: 'web',
    status: 'completed',
    startDate: '2024-01-01',
    endDate: '2024-03-01'
  }
];
```

### Styling Customization

The project uses Tailwind CSS for styling. You can customize:

1. **Colors**: Edit `tailwind.config.js` to change the color scheme
2. **Fonts**: Update font families in the Tailwind config
3. **Animations**: Modify or add new animations in the config
4. **Components**: Edit individual component styles in their respective files

## 🌐 Deployment to Vercel

### Automatic Deployment

1. **Push your code to GitHub**
2. **Connect your repo to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect it's a Vite project
3. **Add environment variables** in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add your email configuration variables
4. **Deploy** - Vercel will automatically build and deploy

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production deployment
vercel --prod
```

## 📊 Performance Optimization

The portfolio includes several performance optimizations:

- **Code Splitting**: Automatic chunking for vendor libraries
- **Lazy Loading**: Images load only when needed
- **Optimized Animations**: Framer Motion with performance considerations
- **Minimal Bundle**: Only essential dependencies included
- **Tree Shaking**: Unused code is automatically removed
- **Compression**: Terser minification for production builds
- **Caching**: Proper cache headers for static assets

## 🔒 Security Features

- **Input Validation**: Server-side validation for contact form
- **Rate Limiting**: Prevents spam submissions
- **CORS Headers**: Proper cross-origin resource sharing
- **Security Headers**: XSS protection, content type options, etc.
- **Sanitization**: Input sanitization to prevent XSS attacks

## 🔍 SEO Optimization

- **Meta Tags**: Comprehensive meta tags for all pages
- **Structured Data**: JSON-LD structured data for search engines
- **Sitemap**: XML sitemap for better indexing
- **Robots.txt**: Search engine crawler instructions
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions or support, please open an issue in the repository or contact through the portfolio contact form.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library
- [Vercel](https://vercel.com/) - Deployment platform