import { useState } from 'react'
import Hero from './components/hero'
import About from './components/About'
import Projects from './components/Project'
import Skills from './components/Skills'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Education/>
      <Certificates/>
      <Contact/>
    </>
  )
}

export default App
