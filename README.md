# Portfolio

![Professional Portfolio Website](public/professional-portfolio-website.png)

A modern, responsive portfolio website showcasing my skills, experience, and projects as a Full-Stack Developer. Built with React.js, Vite, and Tailwind CSS, this site features smooth animations, interactive elements, and a clean, professional design optimized for all devices.

[Live Demo](https://zafra-portfolio.netlify.app/)

## 🚀 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens using Tailwind CSS.
- **Smooth Animations**: Engaging transitions and micro-interactions powered by Framer Motion.
- **Project Showcase**: Dynamic project gallery with detailed views, including live demos, GitHub links, and technical breakdowns.
- **Interactive UI Components**: Built with shadcn/ui for accessible, customizable elements like buttons, cards, progress bars, and badges.
- **Theme Support**: Dark/light mode toggle with Next Themes integration.
- **Contact Form**: Secure form handling via Netlify Forms for easy communication.
- **Performance Optimized**: Fast loading times with Vite's build system and code splitting.
- **SEO Friendly**: Proper meta tags and semantic HTML for better search visibility.
- **Real-time Stats**: Animated counters for experience, projects, and skills proficiency.

## 🛠 Tech Stack

### Frontend
- **React.js** (v19.1.1) - Component-based UI library
- **Vite** (v7.1.7) - Fast build tool and dev server
- **React Router** (v7.9.4) - Client-side routing
- **Tailwind CSS** (v3.4.17) - Utility-first styling framework
- **shadcn/ui** - Reusable, accessible UI components
- **Framer Motion** (v12.23.24) - Animation library
- **Lucide React** - Icon library
- **React Type Animation** - Dynamic text effects
- **Recharts** - Data visualization for project metrics
- **Sonner** - Toast notifications

### Utilities & Hooks
- **clsx** & **tailwind-merge** - Class name utilities
- **class-variance-authority (cva)** - Component styling variants
- **use-intersection-observer** - Performance-optimized visibility detection
- **use-toast** - Custom toast hook

### Development Tools
- **ESLint** (v9.36.0) - Code linting with React hooks rules
- **PostCSS** & **Autoprefixer** - CSS processing
- **TypeScript** support via jsconfig.json (ready for migration)

### Deployment & Hosting
- **Netlify** - CI/CD, form handling, and global CDN
- **GitHub** - Version control and collaboration

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/          # Project screenshots and assets
│   ├── Resume-Zafra.pdf # Downloadable resume
│   └── vite.svg         # Vite logo
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── home/        # Home page sections (hero, skills, projects, etc.)
│   │   ├── ui/          # shadcn/ui components (button, card, progress, etc.)
│   │   ├── navigation.jsx # Site navigation
│   │   └── footer.jsx   # Site footer
│   ├── hooks/           # Custom React hooks (use-theme, use-toast)
│   ├── layouts/         # Page layouts (root, main)
│   ├── lib/             # Utilities and data (projects-data.js, utils.js)
│   ├── pages/           # Page components (home, about, projects, contact, projectDetail)
│   ├── assets/          # Static assets (react.svg)
│   ├── index.css        # Global styles
│   └── main.jsx         # App entry point with routing
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
├── README.md            # This file
└── ...                  # Other config files (eslint, postcss, etc.)
```

## 🏗 Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ZafraZiaudeen/Portfolio.git
   cd Portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   The app will start at `http://localhost:5173`.

4. **Build for Production**
   ```bash
   npm run build
   ```
   Outputs optimized static files to the `dist/` directory.

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

### Environment Variables
No environment variables are required for basic setup. For custom configurations (e.g., API keys for external services), create a `.env` file in the root.

## 🔧 Customization

- **Update Projects**: Edit `src/lib/projects-data.js` to add/modify your projects. Each project includes fields for title, description, tech stack, features, architecture, and more.
- **Theme Colors**: Modify `tailwind.config.js` for custom color schemes.
- **Components**: Extend shadcn/ui components in `src/components/ui/` or add new ones via the CLI.
- **Animations**: Adjust Framer Motion variants in components like `hero-section.jsx`.
- **Contact Form**: Configure Netlify Forms in `public/_redirects` or integrate with other services.


## 📈 Featured Projects

This portfolio highlights several key projects demonstrating my full-stack capabilities:

For full details, visit the [Projects page](https://zafra-portfolio.netlify.app/projects).


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: [zafraziaudeen@gmail.com](mailto:zafraziaudeen@gmail.com)
- **LinkedIn**: [https://www.linkedin.com/in/zafra-ziaudeen/](https://www.linkedin.com/in/zafra-ziaudeen/)
- **GitHub**: [github.com/ZafraZiaudeen](https://github.com/ZafraZiaudeen)

Feel free to reach out for collaborations, opportunities, or just to say hello!

---

⭐ If you found this project helpful, give it a star on GitHub!
