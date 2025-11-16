// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom' 
import background from './assets/welcome_page_background.jpg' 

// 2. Import các component chung và các trang
import Header from './components/Header'
import Welcome from './Pages/Welcome'
import PersonalApp from './Pages/PersonalApp'
import AboutMe from './Pages/AboutMe'

const App = () => {
  return (
    // Layout
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Header part */}
      <Header />

      {/* Main part */}
      <main>
        {/* Routes sẽ quyết định "trang" nào được hiển thị ở đây */}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/personal-app" element={<PersonalApp />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </main>
      
    </div>
  )
}

export default App