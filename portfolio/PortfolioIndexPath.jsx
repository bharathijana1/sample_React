import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home'
import { PortfolioNavbar } from './PortfolioNavbar'
import { PortfolioFooter } from './PortfolioFooter'
import { PortfolioAbout } from './PortfolioAbout'
import { PortfolioContact } from './PortfolioContact'
import { PortfolioHome } from './PortfolioHome'
import { PortfolioIndexPage } from './PortfolioIndexPage'
import "./style.css"


export const PortfolioIndexPath = () => {
  return (
    <>
    <div className="body">
    <BrowserRouter>
    <PortfolioNavbar />
    <Routes>
        {/* <Route path="/" element={<PortfolioHome />} /> */}
        <Route path='/' element={< PortfolioIndexPage/>} />
        <Route path='/home' element={< PortfolioHome />} />
        <Route path="/about" element={<PortfolioAbout />} />
        <Route path="/contact" element={<PortfolioContact />} />

    </Routes>
    <PortfolioFooter />
    </BrowserRouter>
    </div>
    
    </>
  )
}
