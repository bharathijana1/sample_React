import React from 'react'
import Forms from './Forms'
import { Contactus } from './Contactus'
import { Home } from './Home'
import AboutUs from './AboutUs'

export default function All() {
  return (
    <>
    <div className='bgimg' style={{ 
      backgroundImage: `url("data:image/jpeg;base64,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")`}}>
    <Forms />
    </div>
    <div className='border border-secondary p-4 m-4'>
        <h2 className='text-center p-3 m-2'>Luxury Car & Bus Rental</h2>
    <Home />
    </div>
    <div className='border border-secondary p-4 m-4'>
    <h2 className='text-center p-3 m-2'>For Booking pls contact us</h2>
    <Contactus />
    </div>
    <div className='border border-secondary p-4 m-4'>
    <h2 className='text-center p-3 m-2'>“Remember that happiness is a way of travel – not a destination.” – Roy M. Goodman</h2>
    <AboutUs />
    </div>
    </>
  )
}
