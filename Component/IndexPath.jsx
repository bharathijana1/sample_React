import React from 'react'
import HeaderNavbar from './HeaderNavbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './Footer'
import Forms from './Forms'
import FormmsTwo from './FormmsTwo'
import { Home } from './Home'
import { Contactus } from './Contactus'
import All from './All'
import Booking from './Booking'
import AboutUs from './AboutUs'
import Services from './Services'
import TourPackage from './TourPackage'
import TourPackageData from './TourPackageData'
import { ServicesData } from './ServicesData'

const IndexPath = () => {
  return (
    <div>
        <BrowserRouter>
            <HeaderNavbar />
            <Routes>
                <Route path="/" element={< All />} />
                <Route path="/car" element={< Forms />} />
                <Route path="/tour" element={< FormmsTwo />} />
                <Route path="/home" element={< Home />} />
                <Route path="/contact" element={< Contactus />} />
                <Route path="/booking" element={< Booking />} />
                <Route path="/about" element={< AboutUs />} />
                <Route path="/servicesdata" element={< ServicesData />} />
                <Route path="/tourpackagedata" element={< TourPackageData />} />







            </Routes>
        
        <Footer />

        </BrowserRouter>
      
    </div>
  )
}

export default IndexPath
