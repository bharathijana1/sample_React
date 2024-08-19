import React from 'react'
import { HeaderNavbar } from './HeaderNavbar'
import { Home } from './Home'
import { CartProvider } from "react-use-cart"
import { Footer } from './Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Cards } from "./Cards"
import { Payment } from './Payment'


export const IndexPath = () => {
  return (
    <>
        <BrowserRouter>
        <HeaderNavbar />
        <CartProvider>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="card" element={<Cards />} />
                    <Route path="/payment" element={<Payment />} />


            </Routes>

        </CartProvider>

        <Footer />
        </BrowserRouter>

        {/* <CartProvider>
            <Home />
            <Cards />
        </CartProvider> */}

    
    </>
  )
}
