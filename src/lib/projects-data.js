export const projects = [
  {
    id: "trashtruce-waste-management",
    title: "TrashTruce - Waste Management System",
    description:
      "A comprehensive waste management system specifically built for the Kandy region that streamlines recycling processes, bin management, and waste collection scheduling. Features include real-time location tracking, recycling guides, event management, and an e-commerce platform for recycled products.",
    longDescription:
      "TrashTruce is an end-to-end waste management solution designed specifically for the Kandy region, connecting local citizens with waste management services. The platform includes features for waste bin tracking, recycling education, event organization, and a marketplace for recycled products. It helps the Kandy community organize waste collection efficiently while promoting sustainable practices through educational content and community events.",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "jQuery", "Google Maps API", "PHPMailer"],
    liveUrl: "",
    githubUrl: "https://github.com/ZafraZiaudeen/TrashTruce-WasteManagementSystem",
    image: "/trashtruce.png",
    featured: false,
    status: "Completed",
    overview:
      "TrashTruce is a full-stack web application designed to revolutionize waste management at the community level. The system comprises three main interfaces: admin portal, customer portal, and staff portal, each tailored to specific user needs and responsibilities.",
    challenge:
      "The Kandy region faced significant challenges in organizing efficient waste collection, promoting recycling awareness, and managing waste-related resources. Traditional systems in the area lacked integration between different aspects of waste management and failed to engage local citizens in sustainable practices.",
    solution:
      "I developed a comprehensive platform that integrates waste bin management, recycling education, event organization, and e-commerce capabilities. The system features real-time location tracking for waste bins, detailed recycling guides, community event management, and a marketplace for recycled products. The solution includes automated scheduling and email notifications using PHPMailer.",
    results: [
      "Streamlined waste collection process with digital bin tracking and scheduling",
      "Increased community engagement through integrated events and recycling guides",
      "Enhanced recycling awareness with educational content and guidelines",
      "Facilitated sustainable practices through recycled product marketplace",
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
      },
      {
        category: "Backend",
        technologies: ["PHP", "MySQL", "PHPMailer"],
      },
      {
        category: "APIs",
        technologies: ["Google Maps API"],
      },
      {
        category: "Tools & Libraries",
        technologies: ["XAMPP", "Git", "Apache"],
      }
    ],
    features: [
      "Real-time waste bin location tracking with Google Maps integration",
      "Comprehensive recycling guides and educational content",
      "Community event management and registration system",
      "E-commerce platform for recycled products",
      "Multi-portal architecture (Admin, Staff, and Customer interfaces)",
      "Automated waste collection scheduling system",
      "Email notifications for collection schedules and events",
      "Interactive location-based bin management",
      "User feedback and community engagement system",
      "Digital recycling awareness campaigns and resources"
    ],
    architecture: {
      description:
        "The application follows a traditional LAMP stack architecture with PHP backend and MySQL database. It implements a multi-portal system with role-based access control, integrates Google Maps for location services, and uses PHPMailer for automated communications.",
      components: [
        "PHP Backend - MVC architecture for business logic",
        "MySQL Database - Structured data storage for waste management data",
        "Google Maps Integration - Real-time location tracking and visualization",
        "PHPMailer Service - Automated notifications and communications",
        "Bootstrap Frontend - Responsive UI components",
        "Apache Server - Web server configuration",
        "Multi-portal System - Separate interfaces for different user roles"
      ],
      image: "/trashtruce-architecture-diagram.png"
    }
  },
  {
    id: "horizone-hotel-booking",
    title: "Horizone - Hotel Booking Platform",
    description:
      "An innovative hotel booking platform powered by AI, designed to enhance the search and booking experience. By leveraging OpenAI's LLM, the platform offers intelligent search recommendations, implements secure payment processing through Stripe integration, user authentication, and a fully responsive design.",
    longDescription:
      "Horizone is an innovative hotel booking platform powered by AI, designed to enhance the search and booking experience. By leveraging OpenAI's LLM, the platform revolutionizes the way users search for and book accommodations. It provides intelligent search recommendations, implements secure payment processing through Stripe, and offers a seamless user experience across all devices.",
    tags: ["React.js", "TypeScript", "MongoDB", "Clerk", "OpenAI", "Stripe", "Tailwind CSS"],
    liveUrl: "https://aidf-horizone-frontend-zafra.netlify.app/",
    githubUrl: "https://github.com/ZafraZiaudeen/Hotel-Booking",
    image: "/modern-hotel-booking-interface-dashboard.jpg",
    featured: true,
    status: "Live",
    overview:
      "Horizone - Hotel Booking Platform - is a full-stack web application designed to streamline the hotel booking experience. The platform combines modern web technologies with AI-powered search capabilities using OpenAI to help users find their perfect accommodation quickly and efficiently.",
    challenge:
      "The hospitality industry needed a modern booking platform that could handle complex search queries, provide real-time availability updates, process secure payments, and deliver a seamless user experience across devices. Traditional booking systems often suffered from slow search performance, complicated user interfaces, and security vulnerabilities.",
    solution:
      "I architected and developed a comprehensive solution using React.js for the frontend, MongoDB for flexible data storage, and Clerk for robust authentication. The platform implements AI-driven search algorithms using OpenAI to provide intelligent recommendations, integrates Stripe for secure payment processing. The responsive design ensures optimal user experience on all devices.",
    results: [
      "Reduced average booking time by 40% through AI-powered search",
      "Achieved 99.9% uptime with robust error handling and monitoring",
      "Processed over 1,000 secure transactions through Stripe integration",
      "Maintained sub-2-second page load times across all pages",
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["React js", "TypeScript", "Tailwind CSS", "React Query"],
      },
      {
        category: "Backend/Database",
        technologies: ["MongoDB", "Mongoose"],
      },
      {
        category: "Authentication",
        technologies: ["Clerk"],
      },
      {
        category: "AI/ML",
        technologies: ["OpenAI LLM"],
      },
      {
        category: "Payment",
        technologies: ["Stripe API"],
      },
      {
        category: "DevOps & Tools",
        technologies: ["Git", "Netlify", "MongoDB Atlas", "Postman", "ESLint", "Prettier"],
      },
    ],
    features: [
      "AI-powered hotel search with intelligent recommendations using OpenAI",
      "Real-time availability checking and booking management",
      "Secure payment processing with Stripe integration",
      "User authentication and authorization with Clerk",
      "Responsive design optimized for all devices",
      "Advanced filtering and sorting options",
      "User profile and booking history management",
      "Admin dashboard for hotel management",
      "Email notifications for booking confirmations",
      "Review and rating system",
    ],
    architecture: {
      description:
        "The application follows a modern React.js architecture with server-side rendering, API routes for backend logic, and MongoDB database. The system implements Clerk-based authentication, Stripe payment processing, and OpenAI-powered search algorithms.",
      components: [
        "React.js Frontend - Component-based UI with Javascript",
        "MongoDB Database - Flexible document storage for hotels, bookings, and users",
        "Clerk Auth Service - Token-based authentication and authorization",
        "OpenAI Integration - Intelligent recommendation system",
        "Stripe Integration - Secure payment processing",
        "Email Service - Automated booking confirmations",
        "Admin Dashboard - Hotel and booking management interface",
      ],
      image: "/horizone-architecture-diagram.png",
    },
  },
 
  {
    id: "professional-portfolio",
    title: "Professional Portfolio Website",
    description:
      "A modern, elegant portfolio website built with React and Vite, featuring smooth animations, responsive design, and an intuitive user interface. Implements modern design principles with Tailwind CSS and shadcn/ui components.",
    longDescription:
      "This portfolio website showcases my professional work and skills using modern web development practices. Built with React and Vite for optimal performance, it features a clean, responsive design using Tailwind CSS and shadcn/ui components. The site includes interactive elements, smooth animations, and a Netlify-powered contact form.",
    tags: ["React.js", "Vite", "Tailwind CSS", "shadcn/ui", "Netlify"],
    liveUrl: "https://zafraziaudeen.netlify.app",
    githubUrl: "https://github.com/ZafraZiaudeen/Portfolio",
    status: "Live",
    image: "/professional-portfolio-website-design.jpg",
    featured: true,
    overview:
      "A modern portfolio website that showcases my projects and skills in an engaging way. The site combines aesthetic design with optimal performance, featuring smooth animations and responsive layouts that work seamlessly across all devices.",
    challenge:
      "Creating a portfolio that effectively presents my work and skills while maintaining excellent performance and user experience. The site needed to be visually appealing, easy to navigate, and perform well on all devices, while also being easy to maintain and update.",
    solution:
      "Developed using React and Vite for fast development and optimal performance. Implemented Tailwind CSS for responsive design and shadcn/ui for consistent, accessible components. Integrated with Netlify for hosting and form handling, ensuring reliable deployment and functionality.",
    results: [
      "Achieved fast load times with Vite's build optimization",
      "Implemented smooth animations and transitions",
      "Created a responsive design that works perfectly on all devices",
      "Integrated secure contact form with Netlify Forms",
      "Established an easily maintainable and scalable codebase"
    ],
    techStack: [
      {
        category: "Frontend Framework",
        technologies: ["React.js", "Vite", "React Router"],
      },
      {
        category: "Styling",
        technologies: ["Tailwind CSS", "shadcn/ui", "Lucide Icons"],
      },
      {
        category: "Deployment & Services",
        technologies: ["Netlify", "Netlify Forms", "Git", "GitHub"],
      },
    ],
    features: [
      "Responsive design optimized for all screen sizes",
      "Interactive UI elements with smooth animations",
      "Dynamic project showcase with detailed views",
      "Secure contact form with spam prevention",
      "Clean and modern design aesthetic",
      "Optimized performance and loading times",
      "Easy-to-navigate interface",
      "Social media integration",
      "Resume download functionality",
      "Project filtering and sorting"
    ],
    architecture: {
      description:
        "The portfolio is built using React with Vite for optimal development experience and build performance. It uses React Router for client-side routing, Tailwind CSS for styling, and integrates with Netlify for hosting and form handling.",
      components: [
        "React/Vite - Fast and efficient frontend framework",
        "React Router - Client-side routing and navigation",
        "Tailwind CSS - Utility-first styling framework",
        "shadcn/ui - Reusable UI component library",
        "Netlify Forms - Secure form handling and spam prevention",
        "GitHub Actions - Automated deployment workflow"
      ],
    },
  },
 
  // {
  //   id: "task-management-app",
  //   title: "Task Management App",
  //   description:
  //     "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
  //   longDescription:
  //     "A modern task management application that enables teams to collaborate effectively. Features real-time updates, project boards, task assignments, and progress tracking.",
  //   tags: ["React", "TypeScript", "Firebase", "Material-UI"],
  //   image: "/task-management-kanban.png",
  //   overview:
  //     "A collaborative task management tool designed for teams to organize work, track progress, and communicate effectively. Built with real-time synchronization for seamless collaboration.",
  //   challenge:
  //     "Creating a task management system that supports real-time collaboration, handles complex project structures, and provides an intuitive interface for team coordination.",
  //   solution:
  //     "Built with React and TypeScript for type-safe development, Firebase for real-time database and authentication, and Material-UI for a polished interface. Implemented Kanban boards, task assignments, and real-time updates.",
  //   results: [
  //     "Real-time synchronization across all users",
  //     "Supports unlimited projects and tasks",
  //     "Intuitive drag-and-drop interface",
  //     "Mobile-responsive design",
  //   ],
  //   techStack: [
  //     {
  //       category: "Frontend",
  //       technologies: ["React", "TypeScript", "Material-UI", "React DnD"],
  //     },
  //     {
  //       category: "Backend",
  //       technologies: ["Firebase Realtime Database", "Firebase Auth", "Cloud Functions"],
  //     },
  //   ],
  //   features: [
  //     "Kanban board interface",
  //     "Real-time task updates",
  //     "Team collaboration",
  //     "Task assignments and due dates",
  //     "Project organization",
  //     "Activity tracking",
  //     "File attachments",
  //     "Comments and discussions",
  //   ],
  //   architecture: {
  //     description:
  //       "Firebase-powered real-time application with React frontend. Uses Firebase Realtime Database for instant synchronization and Firebase Auth for user management.",
  //     components: [
  //       "React Frontend - Interactive UI with drag-and-drop",
  //       "Firebase Realtime Database - Real-time data sync",
  //       "Firebase Auth - User authentication",
  //       "Cloud Functions - Backend logic",
  //       "Material-UI - Component library",
  //     ],
  //   },
  // },
  // {
  //   id: "weather-dashboard",
  //   title: "Weather Dashboard",
  //   description:
  //     "An interactive weather dashboard providing real-time weather data, forecasts, and weather maps. Features location-based weather tracking and historical data visualization.",
  //   longDescription:
  //     "A comprehensive weather dashboard that provides current conditions, forecasts, and weather visualizations. Integrates with OpenWeather API for accurate, real-time weather data.",
  //   tags: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   image: "/weather-dashboard-interface.png",
  //   overview:
  //     "An interactive weather dashboard that provides comprehensive weather information including current conditions, forecasts, and historical data visualizations.",
  //   challenge:
  //     "Creating an intuitive weather dashboard that presents complex meteorological data in an accessible format while providing accurate, real-time information.",
  //   solution:
  //     "Integrated OpenWeather API for weather data, used Chart.js for data visualization, and implemented geolocation for automatic location detection. Built with React and TypeScript for reliability.",
  //   results: [
  //     "Real-time weather updates",
  //     "7-day forecast accuracy",
  //     "Interactive weather maps",
  //     "Historical data visualization",
  //   ],
  //   techStack: [
  //     {
  //       category: "Frontend",
  //       technologies: ["React", "TypeScript", "Chart.js", "Leaflet"],
  //     },
  //     {
  //       category: "API",
  //       technologies: ["OpenWeather API", "Geolocation API"],
  //     },
  //   ],
  //   features: [
  //     "Current weather conditions",
  //     "7-day weather forecast",
  //     "Hourly forecasts",
  //     "Weather maps and radar",
  //     "Location-based weather",
  //     "Historical data charts",
  //     "Weather alerts",
  //     "Multiple location tracking",
  //   ],
  //   architecture: {
  //     description:
  //       "React application that fetches data from OpenWeather API and displays it using Chart.js visualizations. Uses browser geolocation for automatic location detection.",
  //     components: [
  //       "React Frontend - Weather display interface",
  //       "OpenWeather API - Weather data source",
  //       "Chart.js - Data visualization",
  //       "Leaflet - Interactive maps",
  //       "Geolocation API - Location detection",
  //     ],
  //   },
  // },
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