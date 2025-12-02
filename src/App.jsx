import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import AdminPortal from './Components/Admin/AdminPortal'
const App = () => {
  return (
    <>
      <div className="app">
        <BrowserRouter>
        <Routes>
          <Route element={<LandingPage/>} path='/' />
          <Route element={<AdminPortal/>} path='/adminportal/*' />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App


