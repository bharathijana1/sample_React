import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCart } from "react-use-cart"


const  Services = ({sdesc,stitle,simg}) => {
    const { addItem } = useCart();
  return (
    <>
    <div className="d-flex justify-content-center align-item-center gap-2 flex-row m-2 mb-5">
            <Card style={{ width: '18rem' }} className='p-1 cardzoom'>
            <Card.Title className='p-2 bg-info'>{stitle}</Card.Title>

                <Card.Body>
                    <div className='d-flex flex-column'>
                    <Card.Img variant="top" width="100px" src={simg} className='img-fluied rounded cardimg border' />
                    <Card.Text className='p-2 mt-2'>{sdesc}
                    </Card.Text>
                    </div>           
                </Card.Body>
            </Card>
            </div>
    </>
    
  )
}
export default Services;
