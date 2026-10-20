import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/hero'
import About from './components/About'
import Projects from './components/Project'
import Skills from './components/Skills'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import CertificatesPage from './Pages/CertificatesPage'
import ProjectsPage from './Pages/ProjectsPage'
import './App.css'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Certificates />
      <Contact />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
