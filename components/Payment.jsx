import React from 'react'



export const Payment = () => {
  return (
    <>
    <div className="container d-flex align-item-start justify-content-start flex-column payment p-3 mt-4" >
        <h3>Pls select your payment method</h3>
        <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>Online payment 
        </div>    
        <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>Cash on delivery 
        </div>      
    </div>
    </>
  )
}
