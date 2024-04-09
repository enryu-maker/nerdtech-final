import React from 'react';
import Home from './Screens/Home';
import { Route, Routes } from 'react-router-dom';
import Blog from './Screens/Blog';
import About from './Screens/About';
import Contact from './Screens/Contact';
import BlogInfo from './Screens/BlogInfo';
import Careers from './Screens/Careers';
import ScrollToTop from './Components/ScrollToTop';

export default function App() {
  return (

    <>
      <ScrollToTop />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/blogs'
          element={<Blog />}
        />
        <Route
          path='/blog/:id'
          element={<BlogInfo />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/contact-us'
          element={<Contact />}
        />
        <Route
          path='/careers'
          element={<Careers />}
        />
      </Routes>
     <Route
        path='/careers'
        element={<Careers />}
      />
    </Routes>
    </>

  );
}
