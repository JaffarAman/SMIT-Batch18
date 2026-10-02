import React from 'react'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import User from './pages/user'
import PageNotFound from './pages/PageNotFound'
import UserDetails from './pages/userDetails'
import Product from './pages/Product'
import Productdetails from './pages/productdetails'

const App = () => {
  return (
    <>
      {/* <h1>HEADER</h1> */}

      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User />} />
        
        
        {/* Dynamic routes */}
        <Route path="/user/:id" element={<UserDetails />} />

        <Route path="/product" element={<Product />}  ></Route>
        <Route path="/product/:id" element={<Productdetails />}  ></Route>
      
      
        {/*  Page Not found */}
        <Route path="*" element={<PageNotFound />}  />
      </Routes>


      {/* <h1>FOOTER</h1> */}

    </>
  )
}

export default App
