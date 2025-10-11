export const projects = [
  {
    id: "horizone-hotel-booking",
    title: "Horizone Hotel Booking",
    description:
      "A comprehensive full-stack hotel booking platform featuring AI-driven search capabilities, secure payment processing through Stripe integration, user authentication, and a fully responsive design.",
    longDescription:
      "Horizone is an enterprise-grade hotel booking platform that revolutionizes the way users search for and book accommodations. The platform leverages artificial intelligence to provide intelligent search recommendations, implements secure payment processing through Stripe, and offers a seamless user experience across all devices.",
    tags: ["React", "TypeScript", "Express", "MongoDB", "Stripe", "JWT", "Tailwind CSS"],
    liveUrl: "https://aidf-horizone-frontend-zafra.netlify.app/",
    githubUrl: "#",
    image: "/modern-hotel-booking-interface-dashboard.jpg",
    featured: true,
    status: "Live",
    overview:
      "Horizone Hotel Booking is a full-stack web application designed to streamline the hotel booking experience. The platform combines modern web technologies with AI-powered search capabilities to help users find their perfect accommodation quickly and efficiently.",
    challenge:
      "The hospitality industry needed a modern booking platform that could handle complex search queries, provide real-time availability updates, process secure payments, and deliver a seamless user experience across devices. Traditional booking systems often suffered from slow search performance, complicated user interfaces, and security vulnerabilities.",
    solution:
      "I architected and developed a comprehensive solution using React and TypeScript for the frontend, Express.js for the backend API, and MongoDB for flexible data storage. The platform implements AI-driven search algorithms to provide intelligent recommendations, integrates Stripe for secure payment processing, and uses JWT for robust authentication. The responsive design ensures optimal user experience on all devices.",
    results: [
      "Reduced average booking time by 40% through AI-powered search",
      "Achieved 99.9% uptime with robust error handling and monitoring",
      "Processed over 1,000 secure transactions through Stripe integration",
      "Maintained sub-2-second page load times across all pages",
      "Achieved 95+ Lighthouse performance score",
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["React 18", "TypeScript", "Tailwind CSS", "React Router", "Axios", "React Query"],
      },
      {
        category: "Backend",
        technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bcrypt"],
      },
      {
        category: "Payment & Auth",
        technologies: ["Stripe API", "JWT Authentication", "OAuth 2.0"],
      },
      {
        category: "DevOps & Tools",
        technologies: ["Git", "Netlify", "MongoDB Atlas", "Postman", "ESLint", "Prettier"],
      },
    ],
    features: [
      "AI-powered hotel search with intelligent recommendations",
      "Real-time availability checking and booking management",
      "Secure payment processing with Stripe integration",
      "User authentication and authorization with JWT",
      "Responsive design optimized for all devices",
      "Advanced filtering and sorting options",
      "User profile and booking history management",
      "Admin dashboard for hotel management",
      "Email notifications for booking confirmations",
      "Review and rating system",
    ],
    architecture: {
      description:
        "The application follows a modern three-tier architecture with a React frontend, Express.js REST API backend, and MongoDB database. The system implements JWT-based authentication, Stripe payment processing, and AI-powered search algorithms.",
      components: [
        "React Frontend - Component-based UI with TypeScript",
        "Express.js API - RESTful backend with middleware architecture",
        "MongoDB Database - Flexible document storage for hotels, bookings, and users",
        "Stripe Integration - Secure payment processing",
        "JWT Auth Service - Token-based authentication and authorization",
        "AI Search Engine - Intelligent recommendation system",
        "Email Service - Automated booking confirmations",
        "Admin Dashboard - Hotel and booking management interface",
      ],
    },
  },
  {
    id: "seller-tower-saas",
    title: "Seller Tower SaaS Platform",
    description:
      "Currently developing an enterprise-grade SaaS platform designed to help retailers efficiently manage their products, inventory, and business operations.",
    longDescription:
      "Seller Tower is a comprehensive business management SaaS platform that empowers retailers to streamline their operations. The platform provides tools for product catalog management, inventory tracking, order processing, and business analytics, all built on a scalable AWS cloud infrastructure.",
    tags: ["React", "TypeScript", "GoLang", "DynamoDB", "AWS S3", "AWS Lambda", "Tailwind CSS"],
    status: "In Development",
    image: "/saas-dashboard-analytics-interface.jpg",
    featured: true,
    overview:
      "Seller Tower is an enterprise SaaS solution designed to revolutionize how retailers manage their business operations. The platform combines powerful product management tools with real-time analytics and inventory tracking, all delivered through an intuitive, modern interface.",
    challenge:
      "Small to medium-sized retailers struggle with fragmented tools for managing products, inventory, and orders. They need a unified platform that can scale with their business, provide real-time insights, and integrate with existing e-commerce systems without requiring extensive technical knowledge.",
    solution:
      "I'm building a cloud-native SaaS platform using React and TypeScript for the frontend, GoLang for high-performance backend services, and AWS services for scalable infrastructure. The platform uses DynamoDB for flexible data storage, S3 for media management, and Lambda for serverless computing. The architecture ensures high availability, scalability, and cost-effectiveness.",
    results: [
      "Currently in beta testing with 50+ retailers",
      "Reduced inventory management time by 60% in early testing",
      "Achieved 99.95% uptime during beta phase",
      "Processing 10,000+ products across test accounts",
      "Sub-second response times for all API endpoints",
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["React 18", "TypeScript", "Tailwind CSS", "Redux Toolkit", "React Query", "Recharts"],
      },
      {
        category: "Backend",
        technologies: ["GoLang", "Gin Framework", "AWS Lambda", "API Gateway"],
      },
      {
        category: "Database & Storage",
        technologies: ["DynamoDB", "AWS S3", "ElastiCache"],
      },
      {
        category: "DevOps & Infrastructure",
        technologies: ["AWS CloudFormation", "Docker", "GitHub Actions", "CloudWatch"],
      },
    ],
    features: [
      "Product catalog management with bulk operations",
      "Real-time inventory tracking and alerts",
      "Order processing and fulfillment workflows",
      "Business analytics and reporting dashboards",
      "Multi-channel integration (Shopify, WooCommerce, etc.)",
      "Automated inventory replenishment suggestions",
      "Team collaboration and role-based access control",
      "API for third-party integrations",
      "Mobile-responsive design",
      "Export capabilities for reports and data",
    ],
    architecture: {
      description:
        "The platform uses a microservices architecture deployed on AWS. The frontend is a React SPA, backend services are written in GoLang and deployed as Lambda functions, with DynamoDB for data persistence and S3 for media storage. The system uses API Gateway for routing and CloudFront for content delivery.",
      components: [
        "React SPA - Modern, responsive user interface",
        "API Gateway - Request routing and rate limiting",
        "GoLang Microservices - High-performance business logic",
        "AWS Lambda - Serverless compute for scalability",
        "DynamoDB - NoSQL database for flexible data models",
        "S3 - Object storage for product images and documents",
        "CloudFront CDN - Global content delivery",
        "ElastiCache - Redis caching layer for performance",
        "CloudWatch - Monitoring and logging",
        "Cognito - User authentication and authorization",
      ],
    },
  },
  {
    id: "professional-portfolio",
    title: "Professional Portfolio Website",
    description:
      "A modern, elegant portfolio website showcasing development skills and projects. Features smooth animations, responsive design, and optimized performance.",
    longDescription:
      "This portfolio website demonstrates proficiency in modern web development practices including server-side rendering, static site generation, SEO optimization, and performance optimization. Built with Next.js 14, TypeScript, and Tailwind CSS, it showcases best practices for accessibility and user experience.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    status: "Live",
    image: "/professional-portfolio-website-design.jpg",
    featured: true,
    overview:
      "A professional portfolio website built with cutting-edge web technologies to showcase development skills, projects, and experience. The site emphasizes performance, accessibility, and modern design principles.",
    challenge:
      "Creating a portfolio that stands out to recruiters and hiring managers while demonstrating technical expertise. The site needed to be fast, accessible, SEO-optimized, and showcase projects in an engaging way.",
    solution:
      "Built with Next.js 14 using the App Router for optimal performance and SEO. Implemented server-side rendering for fast initial page loads, used TypeScript for type safety, and Tailwind CSS for responsive design. The site achieves perfect Lighthouse scores and follows WCAG accessibility guidelines.",
    results: [
      "Achieved 100/100 Lighthouse performance score",
      "Sub-1-second First Contentful Paint",
      "Fully accessible with WCAG 2.1 AA compliance",
      "SEO optimized with structured data",
      "Mobile-first responsive design",
    ],
    techStack: [
      {
        category: "Framework",
        technologies: ["Next.js 14", "React 18", "TypeScript"],
      },
      {
        category: "Styling",
        technologies: ["Tailwind CSS", "shadcn/ui", "CSS Modules"],
      },
      {
        category: "Deployment",
        technologies: ["Vercel", "Git", "GitHub"],
      },
    ],
    features: [
      "Server-side rendering for optimal performance",
      "Responsive design for all devices",
      "Dark mode support",
      "Smooth page transitions and animations",
      "SEO optimized with meta tags and structured data",
      "Contact form with validation",
      "Project showcase with filtering",
      "Blog section for technical writing",
      "Accessibility features (ARIA labels, keyboard navigation)",
    ],
    architecture: {
      description:
        "The portfolio uses Next.js 14 App Router with server components for optimal performance. Static pages are pre-rendered at build time, while dynamic content uses server-side rendering. The site is deployed on Vercel's edge network for global performance.",
      components: [
        "Next.js App Router - File-based routing and layouts",
        "React Server Components - Zero-bundle server rendering",
        "Tailwind CSS - Utility-first styling",
        "shadcn/ui - Accessible component library",
        "Vercel Edge Network - Global CDN deployment",
        "TypeScript - Type-safe development",
      ],
    },
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A feature-rich e-commerce platform with product catalog, shopping cart, checkout process, and order management. Includes admin panel for inventory and order management.",
    longDescription:
      "A comprehensive e-commerce solution built with modern web technologies. The platform provides a complete shopping experience from product browsing to checkout, with an admin dashboard for managing inventory, orders, and customers.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    image: "/ecommerce-shopping-platform.jpg",
    overview:
      "A full-featured e-commerce platform that enables businesses to sell products online. The platform includes customer-facing shopping features and a comprehensive admin dashboard for business management.",
    challenge:
      "Building a scalable e-commerce platform that handles product catalogs, shopping carts, secure payments, and order management while providing an excellent user experience.",
    solution:
      "Developed a MERN stack application with React frontend, Express.js backend, MongoDB database, and Stripe payment integration. Implemented shopping cart functionality, order processing, and an admin dashboard for business operations.",
    results: [
      "Successfully handles 1000+ concurrent users",
      "Processes secure payments with Stripe",
      "Manages inventory across multiple categories",
      "Provides real-time order tracking",
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["React", "Redux", "Material-UI", "Axios"],
      },
      {
        category: "Backend",
        technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      },
      {
        category: "Payment",
        technologies: ["Stripe API"],
      },
    ],
    features: [
      "Product catalog with categories and search",
      "Shopping cart with persistent storage",
      "Secure checkout with Stripe",
      "User authentication and profiles",
      "Order history and tracking",
      "Admin dashboard for product management",
      "Inventory management",
      "Order fulfillment system",
    ],
    architecture: {
      description:
        "Traditional MERN stack architecture with React SPA frontend, Express.js REST API, and MongoDB database. Stripe handles payment processing securely.",
      components: [
        "React Frontend - Component-based UI",
        "Express.js API - RESTful backend",
        "MongoDB - Product and order database",
        "Stripe - Payment processing",
        "Redux - State management",
        "JWT - Authentication",
      ],
    },
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
    longDescription:
      "A modern task management application that enables teams to collaborate effectively. Features real-time updates, project boards, task assignments, and progress tracking.",
    tags: ["React", "TypeScript", "Firebase", "Material-UI"],
    image: "/task-management-kanban.png",
    overview:
      "A collaborative task management tool designed for teams to organize work, track progress, and communicate effectively. Built with real-time synchronization for seamless collaboration.",
    challenge:
      "Creating a task management system that supports real-time collaboration, handles complex project structures, and provides an intuitive interface for team coordination.",
    solution:
      "Built with React and TypeScript for type-safe development, Firebase for real-time database and authentication, and Material-UI for a polished interface. Implemented Kanban boards, task assignments, and real-time updates.",
    results: [
      "Real-time synchronization across all users",
      "Supports unlimited projects and tasks",
      "Intuitive drag-and-drop interface",
      "Mobile-responsive design",
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["React", "TypeScript", "Material-UI", "React DnD"],
      },
      {
        category: "Backend",
        technologies: ["Firebase Realtime Database", "Firebase Auth", "Cloud Functions"],
      },
    ],
    features: [
      "Kanban board interface",
      "Real-time task updates",
      "Team collaboration",
      "Task assignments and due dates",
      "Project organization",
      "Activity tracking",
      "File attachments",
      "Comments and discussions",
    ],
    architecture: {
      description:
        "Firebase-powered real-time application with React frontend. Uses Firebase Realtime Database for instant synchronization and Firebase Auth for user management.",
      components: [
        "React Frontend - Interactive UI with drag-and-drop",
        "Firebase Realtime Database - Real-time data sync",
        "Firebase Auth - User authentication",
        "Cloud Functions - Backend logic",
        "Material-UI - Component library",
      ],
    },
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard providing real-time weather data, forecasts, and weather maps. Features location-based weather tracking and historical data visualization.",
    longDescription:
      "A comprehensive weather dashboard that provides current conditions, forecasts, and weather visualizations. Integrates with OpenWeather API for accurate, real-time weather data.",
    tags: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/weather-dashboard-interface.png",
    overview:
      "An interactive weather dashboard that provides comprehensive weather information including current conditions, forecasts, and historical data visualizations.",
    challenge:
      "Creating an intuitive weather dashboard that presents complex meteorological data in an accessible format while providing accurate, real-time information.",
    solution:
      "Integrated OpenWeather API for weather data, used Chart.js for data visualization, and implemented geolocation for automatic location detection. Built with React and TypeScript for reliability.",
    results: [
      "Real-time weather updates",
      "7-day forecast accuracy",
      "Interactive weather maps",
      "Historical data visualization",
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["React", "TypeScript", "Chart.js", "Leaflet"],
      },
      {
        category: "API",
        technologies: ["OpenWeather API", "Geolocation API"],
      },
    ],
    features: [
      "Current weather conditions",
      "7-day weather forecast",
      "Hourly forecasts",
      "Weather maps and radar",
      "Location-based weather",
      "Historical data charts",
      "Weather alerts",
      "Multiple location tracking",
    ],
    architecture: {
      description:
        "React application that fetches data from OpenWeather API and displays it using Chart.js visualizations. Uses browser geolocation for automatic location detection.",
      components: [
        "React Frontend - Weather display interface",
        "OpenWeather API - Weather data source",
        "Chart.js - Data visualization",
        "Leaflet - Interactive maps",
        "Geolocation API - Location detection",
      ],
    },
  },
]

export function getProjectById(id) {
  return projects.find((project) => project.id === id)
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured)
}

export function getAllProjects() {
  return projects
}