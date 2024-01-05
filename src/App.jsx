import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { AllRoutes } from './AdminComponent/AllRoutes'

function App() {

  return (
    <>
      <div>
        <Link to="/login" >Login</Link>
        <Link to="/register" >SignUp</Link>
      </div>
      <AllRoutes />
    </>
  )
}

export default App
