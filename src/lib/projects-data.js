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
      "A comprehensive full-stack hotel booking platform powered by AI and automated workflows. Features AI-driven search recommendations via OpenAI, secure Stripe payments, user authentication with Clerk, and n8n-powered email automation for booking receipts. Built with React frontend and Node.js/Express backend.",
    longDescription:
      "Horizone is a modern, full-stack hotel booking platform that leverages AI and automation to revolutionize accommodation booking. The frontend, built with React and TypeScript, provides an intuitive user interface, while the backend, developed with Node.js and Express, handles business logic and data management. Integrated with OpenAI for intelligent search, Stripe for payments, Clerk for authentication, and n8n for automated email workflows, ensuring a seamless and efficient booking experience.",
    tags: ["React.js", "TypeScript", "Node.js", "Express", "MongoDB", "Clerk", "OpenAI", "Stripe", "n8n", "Tailwind CSS"],
    liveUrl: "https://aidf-horizone-frontend-zafra.netlify.app/",
    githubUrl: "https://github.com/ZafraZiaudeen/Hotel-Booking",
    image: "/modern-hotel-booking-interface-dashboard.jpg",
    featured: true,
    status: "Live",
    overview:
      "Horizone is a full-stack hotel booking platform combining AI-powered search, secure payments, and automated email workflows. The system includes a React-based frontend for user interactions and a Node.js/Express backend for API services, with n8n handling email automation to deliver booking receipts and notifications.",
    challenge:
      "The hospitality industry required a robust booking platform capable of handling complex queries, real-time updates, secure transactions, and automated communications. Existing solutions often lacked integration between AI search, payment processing, and workflow automation, leading to inefficiencies and poor user experiences.",
    solution:
      "Developed a full-stack solution with a React/TypeScript frontend for responsive UI, Node.js/Express backend for scalable APIs, MongoDB for data storage, Clerk for authentication, OpenAI for AI search, Stripe for payments, and n8n for workflow automation. This ensures intelligent recommendations, secure transactions, and automated email receipts, all deployed on Netlify and MongoDB Atlas.",
    results: [
      "Reduced booking time by 40% with AI-powered search",
      "Achieved 99.9% uptime with comprehensive error handling",
      "Processed over 1,000 secure transactions via Stripe",
      "Automated email receipts and notifications using n8n workflows",
      "Maintained sub-2-second load times across all pages",
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["React.js", "TypeScript", "Tailwind CSS", "React Query", "Vite"],
      },
      {
        category: "Backend",
        technologies: ["Node.js", "Express", "TypeScript", "MongoDB", "Mongoose"],
      },
      {
        category: "Authentication",
        technologies: ["Clerk"],
      },
      {
        category: "AI/ML",
        technologies: ["OpenAI LLM", "@langchain/openai"],
      },
      {
        category: "Payment",
        technologies: ["Stripe API"],
      },
      {
        category: "Automation",
        technologies: ["n8n"],
      },
      {
        category: "DevOps & Tools",
        technologies: ["Git", "Netlify", "MongoDB Atlas", "Postman", "ESLint", "Prettier", "Nodemon"],
      },
    ],
    features: [
      "AI-powered hotel search with OpenAI LLM recommendations",
      "Real-time availability and booking management",
      "Secure payment processing with Stripe integration",
      "User authentication and authorization via Clerk",
      "Responsive design for all devices",
      "Advanced filtering, sorting, and search options",
      "User profiles and booking history",
      "Admin dashboard for hotel and booking management",
      "Automated email receipts and notifications using n8n workflows",
      "Review and rating system",
      "Embedding-based search for enhanced recommendations",
      "Webhook integration for payment confirmations",
    ],
    architecture: {
      description:
        "Horizone follows a full-stack architecture with a React frontend deployed on Netlify, a Node.js/Express backend for API logic, MongoDB for data persistence, and n8n for workflow automation. Integrations include Clerk for auth, OpenAI for AI features, and Stripe for payments, ensuring scalability and reliability.",
      components: [
        "React.js Frontend - Component-based UI with TypeScript and Tailwind CSS",
        "Node.js/Express Backend - RESTful APIs with TypeScript and middleware",
        "MongoDB Database - Document-based storage with Mongoose ODM",
        "Clerk Auth Service - Secure authentication and user management",
        "OpenAI Integration - AI-driven search and recommendations",
        "Stripe Integration - Payment processing and webhooks",
        "n8n Workflows - Automated email receipts and notifications",
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