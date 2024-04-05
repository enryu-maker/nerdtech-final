import React from 'react'
import Home from './Screens/Home'
import { Route, Routes } from 'react-router-dom'
import Blog from './Screens/Blog'
import About from './Screens/About'
import Contact from './Screens/Contact'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blogs' element={<Blog />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact-us' element={<Contact />} />
    </Routes>
  )
}
