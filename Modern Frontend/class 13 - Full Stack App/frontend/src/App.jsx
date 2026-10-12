import React from 'react'
import Login from "./pages/login"
import Signup from './pages/signup'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Routes>

        {/* <Route index element={<Login />} /> */}

        <Route path='/' element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>


    </>
  )
}

export default App
