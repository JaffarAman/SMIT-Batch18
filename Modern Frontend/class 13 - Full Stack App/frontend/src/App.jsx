import React from 'react'
import Login from "./pages/login"
import Signup from './pages/signup'
import { Route, Routes } from 'react-router-dom'
import VerifyOtp from './pages/verifyOtp'
import Dashboard from './pages/dashboard'
import Child1 from './pages/child1'
import Child2 from './pages/child2'
import Child3 from './pages/child3'
import Parent from './pages/parent'
import ProtectedRoute from './routes/ProtectedRoute'
import AuthRoute from './routes/authRoute'


const App = () => {
  return (
    <>
      <Routes>

        {/* <Route index element={<Login />} /> */}


        <Route element={<AuthRoute />} >
          <Route path='/' element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otpverify" element={<VerifyOtp />} />
        </Route>




        <Route element={<ProtectedRoute />} >

          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/child1' element={<Child1 />} />
          <Route path='/child2' element={<Child2 />} />
          <Route path='/child3' element={<Child3 />} />
        </Route>

        {/* 
        <Route element={<Parent />}  >

          

        </Route> */}


      </Routes>


    </>
  )
}

export default App
