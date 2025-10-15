# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS. This portfolio showcases my skills, projects, and professional experience with a clean and elegant design.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Multi-page Navigation**: 
  - Home page with hero section and overview
  - About page with detailed background
  - Skills page showcasing technical abilities
  - Projects page with portfolio items
  - Contact form for inquiries
- **React Router**: Client-side routing for seamless navigation
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **React Icons**: Comprehensive icon library for UI elements

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 3.4.18
- **Routing**: React Router DOM 7.9.4
- **Icons**: React Icons 5.5.0
- **Linting**: ESLint with React-specific rules

## 📁 Project Structure

```
src/
├── component/           # React components
│   ├── AboutPage.jsx   # About page component
│   ├── Contact.jsx     # Contact section
│   ├── ContactForm.jsx # Contact form page
│   ├── Experience.jsx  # Experience section
│   ├── Header.jsx      # Hero/header section
│   ├── Navbar.jsx      # Navigation component
│   ├── ProjectsPage.jsx # Projects showcase
│   ├── ProjectDetailPage.jsx # Individual project details
│   ├── SkillsPage.jsx  # Skills page
│   └── Skill.jsx       # Skills section
├── assets/             # Images and static assets
├── App.jsx            # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Profile
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🌐 Deployment

This project is configured for deployment on Netlify with:

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 20
- **SPA Routing**: Configured with redirects for client-side routing

### Netlify Configuration

The project includes a `netlify.toml` file with optimized settings for:
- Build environment setup
- SPA routing redirects
- Asset caching headers

## 🎨 Design Features

- **Gradient Backgrounds**: Modern gradient designs for visual appeal
- **Smooth Animations**: CSS transitions and hover effects
- **Mobile-First**: Responsive design starting from mobile devices
- **Professional Layout**: Clean typography and spacing
- **Interactive Elements**: Hover effects and smooth scrolling

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🔧 Configuration Files

- `vite.config.js` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `netlify.toml` - Netlify deployment configuration
- `eslint.config.js` - ESLint rules and configuration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
