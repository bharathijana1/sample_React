import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardText from 'react-bootstrap/esm/CardText';
import { Link } from 'react-router-dom';


const TourPackage = (props) => {
  return (
    <>
    <div className=" d-flex justify-content-center align-item-center gap-2 flex-row m-2 mb-5">
            <Card style={{ width: '18rem' }} className='p-1 cardzoom'>
                <Card.Img variant="top" src={props.img} className='img-fluied rounded cardimg border' />
                <Card.Body>
                    <CardText>{props.desc}</CardText>
                    <Button variant="success" className='me-3'>{props.days}</Button>

                    <Button variant="info">
                    <Link className='text-white text-decoration-none'>Ask Us</Link>
                    </Button>
                    
                    

                </Card.Body>
            </Card>
            </div>
      
    </>
  )
}

export default TourPackage
