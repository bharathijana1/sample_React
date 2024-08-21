
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import './style.css'
import { useCart } from "react-use-cart"
// import { Cards } from './Cards';
import { Link } from 'react-router-dom';

export const ItemCard = (props) => {
    const { addItem } = useCart();
   
  return (
    <>
    
            <div className=" d-flex justify-content-center align-item-center gap-2 flex-row m-2 mb-5">
            <Card style={{ width: '18rem' }} className='p-1 cardzoom'>
                <Card.Img variant="top" src={props.img} className='img-fluied rounded cardimg border' />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                    {props.desc}
                    </Card.Text>
                    <Button variant="primary" className='me-3' onClick={()=>addItem(props.item)}>Vehicle details</Button>

                    <Button variant="primary">
                    <Link to="/booking" className='text-white text-decoration-none'>Book</Link>
                    </Button>
                    
                    

                </Card.Body>
            </Card>
            </div>

    </>
  )
}
