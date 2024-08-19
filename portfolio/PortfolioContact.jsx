import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const PortfolioContact = () => {
  return (
    <>
    <h4 className='text-info m-5'>Contact Me</h4>
    <Row className='d-flex align-item-center justify-content-center flex-col mb-4'>
        <Col md={6} className='d-flex align-item-center justify-content-center'>
        
        <div className="f-flex justify-content-center align-item-center contactimg ">
        <img src="../../src/Portfolio/images/Contactimg.jpg" className='p-5 mt-5 img-responsive img-fluied' style={{width:"100%"}}  alt="Contact img" />
        </div>

        </Col>

        <Col className="contactform d-flex align-item-center justify-content-center ">
                <form action="" className='w-50'>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className='form-control' id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="conatctno">Contact No</label>
                        <input type="text" name="name" className='form-control' id="contactno" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className='form-control' id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" rows="10" cols="10" placeholder='Type youy message' id="message" className='form-control'></textarea>
                    </div>
                    <div className="button text-center pt-4">
                        <button className='btn btn-info'>Submit</button>
                    </div>
                </form>
        </Col>
                
                
    </Row>
    </>
  )
}
