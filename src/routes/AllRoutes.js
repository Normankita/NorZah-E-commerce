import React from 'react'
import { Routes, Route} from 'react-router-dom';
import {LoginAsGuest, PageNotFound, Home, ProductsList,ProductDetail, Login, Register, CartPage, OrderPage, DashboardPage } from '../pages';
import {ProtectedRoutes} from './ProtectedRoutes';

const AllRoutes = () => {
  return (
   <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="products/" element={<ProductsList/>}/>
        <Route path='products/:id' element={<ProductDetail/>}/>
        <Route path='login/' element={<Login/>}/>
        <Route path='reviewer/' element={<LoginAsGuest><Login/></LoginAsGuest>}/>
        <Route path='register/' element={<Register/>}/>
        <Route path='cart/' element={<ProtectedRoutes><CartPage/></ProtectedRoutes>}/>
        <Route path='order-summary/' element={<ProtectedRoutes><OrderPage/></ProtectedRoutes>}/>
        <Route path='dashboard/' element={<ProtectedRoutes><DashboardPage/></ProtectedRoutes>}/>
        <Route path='*' element={<PageNotFound/>}/>
   </Routes>
  )
}

export default AllRoutes
