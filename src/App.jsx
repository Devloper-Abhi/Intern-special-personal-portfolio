// import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'
import About from './Components/About'
import { useState } from 'react'
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={"scrollbar-hide" + (darkMode ? 'bg-[#181818] text-white' : 'bg-white')}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Intro darkMode={darkMode} setDarkMode={setDarkMode}  />} />
      <Route path="/about" element={<About darkMode={darkMode} setDarkMode={setDarkMode} />} />
    </Routes>
    </div>
  )
}

export default App
