import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart"

export const Cards = () => {
  const { 
    items, 
    isEmpty, 
    totalUniqueItems, 
    totalItems, 
    cartTotal, 
    updateItemQuantity, 
    removeItem, 
    emptyCart } = useCart();
  
  if(isEmpty)
    return(
    <>
    <div className='d-flex justify-content-center align-item-center flex-column m-3'>
        <h3 className=' p-4 text-center'>Your Card is empty</h3>
      <div className="shopbtn text-center">
        <button className='btn btn-info p-3 m-5 text-center'>
          <Link to="/" className='text-decoration-none text-dark'>Shopping</Link>
        </button>
      </div>
    </div>
    </>   
    )

  return (
    <div className="conataine p-3">
      <div className="row">
        <div className="col-12">
          <h5>Cart ({totalUniqueItems}) Total items: ({totalItems})</h5>
          <table className='table table-light table-hover m-0'>
            {items.map((item,index) => {
              return(
                <tr key={index}>
                  <td>
                    <img src={item.img} alt="" style={{height: "6rem"}} />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>Quantity({item.quantity})</td>
                  <td>
                    <button className='btn btn-info m-2 p-2' onClick={() => updateItemQuantity(item.id, item.quantity -1)}>-</button>
                    <button className='btn btn-info m-2 p-2' onClick={() => updateItemQuantity(item.id, item.quantity +1)}>+</button>
                    <button className='btn btn-danger  m-2 p-2' onClick={()=>removeItem(item.id)}>Remove Item</button>
                  </td>
               </tr>
              )
              
            })}
          </table>
          <div className="totalprice text-center p-3 mt-3">
            <h3>Total price: {cartTotal}</h3>
          

          <div className="totalprice text-right p-3 mt-3" onClick={()=> emptyCart()}>
            <button className='btn btn-danger'>Clear All</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
