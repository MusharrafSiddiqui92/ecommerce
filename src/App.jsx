import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper styles
import 'swiper/css/navigation'; // for navigation arrows
import { Navigation } from 'swiper/modules';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Navbar from './components/Nav/Navbar';
import Banner from './components/Body/Banner';
import CardMen from './components/cardMen/CardMen';
import CardWomen from './components/cardWomen/CardWomen';
import CardKids from './components/cardKids/CardKids';
import Subscribe from './components/Subscribe/Subscribe';
import Men from './components/Men/Men';
import Women from './components/Women/Women';
import Kids from './components/Kids/Kids';
import Login from './components/Login/Login'
// import AdminPortal from './components/AdminPortal/AdminPortal';
import Products from './components/products/Products'
function App() {
  return (
    <>
    <BrowserRouter>
  <Navbar/>
 <Routes>
  <Route path = "/" element={
    <>
 <Banner/>
 <CardMen/>
 <CardWomen/>
 <CardKids/>  
 <Subscribe/>
 </>
  }/>
 <Route path = "/men"   element={<Men/>}/>
 <Route path = "/women" element={<Women/>}/>
 <Route path = "/kids"  element={<Kids/>}/>
 <Route path="login" element={<Login/>}/>
 {/* <Route path="adminportal" element={<AdminPortal/>}/> */}
 <Route path="products" element={<Products/>}/>
 </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
