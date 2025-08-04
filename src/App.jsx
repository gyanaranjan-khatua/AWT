
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Blogs from './Pages/Blogs'
import BlogPost from './Pages/BlogPost'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import Faq from './Pages/Faq'
import DestinationDetail from './Pages/DestinationDetail'
import BookingForm from "./Pages/BookingForm"
import InternationalTour from './Pages/InternationalTour'
import NationalTour from './Pages/NationalTour'
import Topnavbar from './Navbar/Topnavbar.jsx'
import Navbar from './Navbar/Navbar.jsx'
import Footer from './Footer/Footer.jsx'
import Book from './Pages/Book'

function App() {
  return (
  <>
   <Topnavbar/>
    <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/blog" element={<Blogs/>} />
      <Route path="/blog/:id" element={<BlogPost />} />
       <Route path="/gallery" element={<Gallery />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/book" element={<Book/>} />
      <Route path="/destination/:place" element={<DestinationDetail />} />
         <Route path="/booking" element={<BookingForm />} />
         <Route path="/internationalTour" element={<InternationalTour />} />
      <Route path="/nationalTour" element={<NationalTour />} />
  </Routes>
      <Footer/>
  </>
  )
}

export default App