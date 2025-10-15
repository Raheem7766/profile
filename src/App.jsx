import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Header from './component/Header'
import Experience from './component/Experience'
import Skill from './component/Skill'
import Contact from './component/Contact'
import ContactForm from './component/ContactForm'
import SkillsPage from './component/SkillsPage'
import AboutPage from './component/AboutPage'
import ProjectsPage from './component/ProjectsPage'
import ProjectDetailPage from './component/ProjectDetailPage'
import ScrollToTop from './component/ScrollToTop'

function HomePage() {
  return (
    <>
      <Header/>
      <Experience/>
      <Skill/>
      <Contact/>
    </>
  )
}

export default function App() {
  return (
    <Router>
        <ScrollToTop />
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project-detail/:projectId" element={<ProjectDetailPage />} />
          <Route path="/contact-form" element={<ContactForm />} />
        </Routes>
    </Router>
  )
}
