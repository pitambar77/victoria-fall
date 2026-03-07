import React from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const Layout = () => {
  return (
    <>
     <ScrollToTop />
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout