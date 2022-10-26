import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ScrollToTop from '../ScrollToTop'

function Layout() {
  return (
    <div>
        <Header />
        <ScrollToTop />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout