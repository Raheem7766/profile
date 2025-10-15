const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting portfolio project seeding...')

  // Create sample projects
  const project1 = await prisma.project.create({
    data: {
      title: 'Spotify Data Visualizer',
      slug: 'spotify-data-visualizer',
      description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.',
      longDescription: 'This comprehensive Spotify data visualization application provides users with deep insights into their music listening habits. Built with React and Node.js, it integrates with Spotify\'s Web API to fetch user data and presents it through interactive charts and visualizations. Users can explore their top artists, tracks, and genres over different time periods, create custom playlists based on their preferences, and discover new music through sophisticated recommendation algorithms.',
      category: 'Web Development',
      technologies: [
        { name: 'React', category: 'Frontend', icon: 'fab fa-react', color: '#61DAFB' },
        { name: 'Node.js', category: 'Backend', icon: 'fab fa-node-js', color: '#339933' },
        { name: 'Spotify API', category: 'API', icon: 'fab fa-spotify', color: '#1DB954' },
        { name: 'Chart.js', category: 'Visualization', icon: 'fas fa-chart-bar', color: '#FF6384' },
        { name: 'MongoDB', category: 'Database', icon: 'fas fa-database', color: '#47A248' }
      ],
      features: [
        'Personalized music data visualization',
        'Interactive charts and graphs',
        'Custom playlist creation',
        'Music recommendation system',
        'User authentication with Spotify',
        'Responsive design for all devices'
      ],
      challenges: [
        'Handling large datasets from Spotify API',
        'Implementing real-time data updates',
        'Creating smooth animations for charts',
        'Managing user authentication flow'
      ],
      solutions: [
        'Implemented efficient data caching strategies',
        'Used WebSocket connections for real-time updates',
        'Leveraged Chart.js for optimized rendering',
        'Created secure OAuth 2.0 flow implementation'
      ],
      images: [
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
        'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800',
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
      liveUrl: 'https://spotify-visualizer-demo.vercel.app',
      githubUrl: 'https://github.com/ibrahimmemon/spotify-visualizer',
      demoUrl: 'https://spotify-visualizer-demo.vercel.app',
      duration: '3 months',
      teamSize: 'Solo Project',
      status: 'published',
      isFeatured: true,
      views: 1250,
      likes: 89
    }
  })

  const project2 = await prisma.project.create({
    data: {
      title: 'E-commerce Platform',
      slug: 'ecommerce-platform',
      description: 'A full-stack e-commerce platform with modern UI/UX design. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.',
      longDescription: 'A comprehensive e-commerce solution built with modern web technologies. The platform includes a customer-facing storefront with advanced filtering, search functionality, and seamless checkout process. The admin dashboard provides complete inventory management, order tracking, customer analytics, and sales reporting. Integrated with multiple payment gateways and shipping providers for a complete online shopping experience.',
      category: 'Web Development',
      technologies: [
        { name: 'React', category: 'Frontend', icon: 'fab fa-react', color: '#61DAFB' },
        { name: 'Node.js', category: 'Backend', icon: 'fab fa-node-js', color: '#339933' },
        { name: 'Express.js', category: 'Backend', icon: 'fas fa-server', color: '#000000' },
        { name: 'MongoDB', category: 'Database', icon: 'fas fa-database', color: '#47A248' },
        { name: 'Stripe', category: 'Payment', icon: 'fab fa-stripe', color: '#635BFF' },
        { name: 'Tailwind CSS', category: 'Styling', icon: 'fas fa-paint-brush', color: '#06B6D4' }
      ],
      features: [
        'User authentication and authorization',
        'Product catalog with advanced filtering',
        'Shopping cart and wishlist functionality',
        'Secure payment processing',
        'Order tracking and management',
        'Admin dashboard with analytics',
        'Inventory management system',
        'Customer review and rating system'
      ],
      challenges: [
        'Implementing secure payment processing',
        'Managing complex state in shopping cart',
        'Optimizing database queries for large catalogs',
        'Ensuring mobile responsiveness across all features'
      ],
      solutions: [
        'Integrated Stripe for secure payment handling',
        'Used Redux for centralized state management',
        'Implemented database indexing and query optimization',
        'Adopted mobile-first responsive design approach'
      ],
      images: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
        'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      liveUrl: 'https://ecommerce-platform-demo.vercel.app',
      githubUrl: 'https://github.com/ibrahimmemon/ecommerce-platform',
      demoUrl: 'https://ecommerce-platform-demo.vercel.app',
      duration: '4 months',
      teamSize: 'Solo Project',
      status: 'published',
      isFeatured: true,
      views: 2100,
      likes: 156
    }
  })

  const project3 = await prisma.project.create({
    data: {
      title: 'Cryptocurrency Trading Bot',
      slug: 'crypto-trading-bot',
      description: 'An automated cryptocurrency trading bot that uses machine learning algorithms to analyze market trends and execute trades based on predefined strategies.',
      longDescription: 'This sophisticated trading bot leverages advanced machine learning models to analyze cryptocurrency market data and execute automated trades. The system includes real-time market data processing, technical indicator analysis, risk management protocols, and portfolio optimization algorithms. Built with Python and integrated with multiple cryptocurrency exchanges for maximum flexibility and liquidity.',
      category: 'Blockchain Development',
      technologies: [
        { name: 'Python', category: 'Backend', icon: 'fab fa-python', color: '#3776AB' },
        { name: 'TensorFlow', category: 'Machine Learning', icon: 'fas fa-brain', color: '#FF6F00' },
        { name: 'Binance API', category: 'API', icon: 'fas fa-exchange-alt', color: '#F0B90B' },
        { name: 'PostgreSQL', category: 'Database', icon: 'fas fa-database', color: '#336791' },
        { name: 'Redis', category: 'Cache', icon: 'fas fa-memory', color: '#DC382D' },
        { name: 'Docker', category: 'DevOps', icon: 'fab fa-docker', color: '#2496ED' }
      ],
      features: [
        'Automated trading execution',
        'Machine learning price prediction',
        'Risk management system',
        'Multi-exchange support',
        'Real-time market analysis',
        'Portfolio tracking and reporting',
        'Backtesting capabilities',
        'Custom strategy configuration'
      ],
      challenges: [
        'Handling high-frequency market data',
        'Implementing reliable ML models',
        'Managing API rate limits',
        'Ensuring system stability during volatile markets'
      ],
      solutions: [
        'Used Redis for high-speed data caching',
        'Implemented ensemble learning methods',
        'Created intelligent rate limiting strategies',
        'Built robust error handling and recovery systems'
      ],
      images: [
        'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
        'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800',
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
      liveUrl: null,
      githubUrl: 'https://github.com/ibrahimmemon/crypto-trading-bot',
      demoUrl: null,
      duration: '6 months',
      teamSize: 'Solo Project',
      status: 'published',
      isFeatured: true,
      views: 3200,
      likes: 234
    }
  })

  const project4 = await prisma.project.create({
    data: {
      title: 'Task Management Mobile App',
      slug: 'task-management-mobile-app',
      description: 'A cross-platform mobile application for task and project management with team collaboration features, built using Flutter.',
      longDescription: 'A comprehensive task management application designed for both individual users and teams. The app features intuitive task creation and organization, team collaboration tools, deadline tracking, progress monitoring, and seamless synchronization across devices. Built with Flutter for cross-platform compatibility and integrated with Firebase for real-time data synchronization.',
      category: 'Mobile Development',
      technologies: [
        { name: 'Flutter', category: 'Framework', icon: 'fab fa-flutter', color: '#02569B' },
        { name: 'Dart', category: 'Language', icon: 'fas fa-code', color: '#0175C2' },
        { name: 'Firebase', category: 'Backend', icon: 'fas fa-fire', color: '#FFCA28' },
        { name: 'Provider', category: 'State Management', icon: 'fas fa-cogs', color: '#757575' },
        { name: 'SQLite', category: 'Local Database', icon: 'fas fa-database', color: '#003B57' }
      ],
      features: [
        'Task creation and organization',
        'Team collaboration and sharing',
        'Real-time synchronization',
        'Offline functionality',
        'Push notifications',
        'Progress tracking and analytics',
        'Custom categories and tags',
        'Deadline and reminder system'
      ],
      challenges: [
        'Implementing offline-first architecture',
        'Managing real-time synchronization conflicts',
        'Optimizing app performance on older devices',
        'Creating intuitive user interface'
      ],
      solutions: [
        'Used SQLite for local data storage',
        'Implemented conflict resolution algorithms',
        'Optimized rendering with Flutter\'s performance tools',
        'Conducted extensive user testing for UX improvements'
      ],
      images: [
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
      liveUrl: null,
      githubUrl: 'https://github.com/ibrahimmemon/task-management-app',
      demoUrl: 'https://play.google.com/store/apps/details?id=com.taskmanager.app',
      duration: '5 months',
      teamSize: 'Team of 3',
      status: 'published',
      isFeatured: false,
      views: 890,
      likes: 67
    }
  })

  const project5 = await prisma.project.create({
    data: {
      title: 'AI-Powered Code Review Tool',
      slug: 'ai-code-review-tool',
      description: 'An intelligent code review tool that uses artificial intelligence to analyze code quality, detect bugs, and suggest improvements automatically.',
      longDescription: 'This innovative tool leverages advanced AI models to perform comprehensive code analysis and provide intelligent suggestions for improvement. It integrates with popular version control systems and IDEs to provide seamless code review experiences. The system can detect various code issues including security vulnerabilities, performance bottlenecks, and maintainability concerns.',
      category: 'AI/ML Development',
      technologies: [
        { name: 'Python', category: 'Backend', icon: 'fab fa-python', color: '#3776AB' },
        { name: 'OpenAI GPT', category: 'AI', icon: 'fas fa-robot', color: '#412991' },
        { name: 'GitHub API', category: 'API', icon: 'fab fa-github', color: '#181717' },
        { name: 'FastAPI', category: 'Backend', icon: 'fas fa-rocket', color: '#009688' },
        { name: 'React', category: 'Frontend', icon: 'fab fa-react', color: '#61DAFB' }
      ],
      features: [
        'Automated code quality analysis',
        'Security vulnerability detection',
        'Performance optimization suggestions',
        'Code style and convention checking',
        'Integration with popular IDEs',
        'Customizable review criteria',
        'Team collaboration features',
        'Detailed reporting and analytics'
      ],
      challenges: [
        'Training accurate AI models for code analysis',
        'Handling different programming languages',
        'Integrating with various development tools',
        'Providing actionable and relevant suggestions'
      ],
      solutions: [
        'Used transformer-based models for code understanding',
        'Implemented language-specific parsers',
        'Created flexible plugin architecture',
        'Developed context-aware suggestion algorithms'
      ],
      images: [
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
        'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
      liveUrl: 'https://ai-code-review-demo.vercel.app',
      githubUrl: 'https://github.com/ibrahimmemon/ai-code-review-tool',
      demoUrl: 'https://ai-code-review-demo.vercel.app',
      duration: '8 months',
      teamSize: 'Team of 4',
      status: 'published',
      isFeatured: true,
      views: 4500,
      likes: 312
    }
  })

  const project6 = await prisma.project.create({
    data: {
      title: 'Real Estate Management System',
      slug: 'real-estate-management-system',
      description: 'A comprehensive real estate management platform for property listings, client management, and transaction tracking with advanced search and filtering capabilities.',
      longDescription: 'A full-featured real estate management system designed for agents and agencies to manage their property listings, client relationships, and transactions. The platform includes advanced search functionality, virtual property tours, document management, and integrated communication tools for seamless client interaction.',
      category: 'Web Development',
      technologies: [
        { name: 'Vue.js', category: 'Frontend', icon: 'fab fa-vuejs', color: '#4FC08D' },
        { name: 'Laravel', category: 'Backend', icon: 'fab fa-laravel', color: '#FF2D20' },
        { name: 'MySQL', category: 'Database', icon: 'fas fa-database', color: '#4479A1' },
        { name: 'AWS S3', category: 'Storage', icon: 'fab fa-aws', color: '#FF9900' },
        { name: 'Mapbox', category: 'Maps', icon: 'fas fa-map', color: '#000000' }
      ],
      features: [
        'Property listing management',
        'Advanced search and filtering',
        'Virtual property tours',
        'Client relationship management',
        'Document and image management',
        'Transaction tracking',
        'Market analytics and reporting',
        'Mobile-responsive design'
      ],
      challenges: [
        'Handling large image and document uploads',
        'Implementing complex search algorithms',
        'Managing real-time property availability',
        'Ensuring data security and privacy'
      ],
      solutions: [
        'Used AWS S3 for scalable file storage',
        'Implemented Elasticsearch for advanced search',
        'Created real-time update system with WebSockets',
        'Applied comprehensive security measures and encryption'
      ],
      images: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
      liveUrl: 'https://realestate-management-demo.vercel.app',
      githubUrl: 'https://github.com/ibrahimmemon/real-estate-system',
      demoUrl: 'https://realestate-management-demo.vercel.app',
      duration: '6 months',
      teamSize: 'Team of 5',
      status: 'published',
      isFeatured: false,
      views: 1800,
      likes: 98
    }
  })

  console.log('✅ Portfolio projects seeded successfully!')
  console.log(`Created 6 sample projects with various categories and technologies`)
  console.log('\n📊 Project Summary:')
  console.log('   - 3 Web Development projects')
  console.log('   - 1 Blockchain Development project')
  console.log('   - 1 Mobile Development project')
  console.log('   - 1 AI/ML Development project')
  console.log('   - 4 Featured projects')
  console.log('   - All projects include detailed descriptions, technologies, and features')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
