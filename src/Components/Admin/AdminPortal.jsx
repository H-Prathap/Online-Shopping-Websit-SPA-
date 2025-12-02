import React from 'react'
import Navbar from '../Navbar'
import '../../assets/Styles/NAvbar.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import product from './product'
import Cartitem from './Cartitem'
import Product from './product'
import ViewCard from './ViewCard'
import Addproduct from './Addproduct'

const AdminPortal = () => {
  return (
    <>
    <div>
    <Navbar/>
    <Routes>
      <Route element={<Home/>} path='/' />
      <Route element={<Product/>} path='/product'/>
      <Route element={<Cartitem/>} path='/cartitem'/>
      <Route element={<ViewCard/>} path='/viewcard/:id'/>
        <Route element={<Addproduct/>} path='/addproduct'/>
    </Routes>
    </div>
    </>
  )
}

export default AdminPortal
