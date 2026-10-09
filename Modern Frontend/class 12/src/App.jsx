import React from 'react'
import Home from './pages/home'
import About from './pages/about'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import UserPage from './pages/user'
import UserDetails from './pages/userDetails'

const App = () => {
  return (
    <div>

      {/* <a href="/">HOme</a>
      <a href="/about">About</a> */}

      <Link to="/" >Home</Link>
      <Link to="/about" >About</Link>
      <Link to="/user" >User</Link>

      {/* <NavLink to="/about" className={( {isActive} )=>}  >About</NavLink> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />


        {/* Params -- Dynamic Routing */}
        {/* <Route path="/user/:userName" element={<UserPage />} /> */}
        <Route path="/user" element={<UserPage />} />

        {/* Params */}
        {/* <Route path="/user-detail/:id" element={<UserDetails />} /> */}
        {/* search params */}
        <Route path="/user-detail" element={<UserDetails />} />


        {/* nested */}

        <Route path="/admin" >

          <Route path="/dashboard" />
          <Route path="/wallet" />
          <Route path="/sales" />
          <Route path="/marketing" />
          <Route path="/email" />
          <Route path="/users" />
          <Route path="/job" />



        </Route>




      </Routes>

      {/* <Home />
      <About /> */}
    </div>
  )
}

export default App
