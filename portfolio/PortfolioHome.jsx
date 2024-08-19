import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const PortfolioHome = () => {
  return (
    <>
    <Row className='p-5'>
      <Col md="6" lg="6" className='order-md-2' >
        <div className='text-center'>
        <img src="../../src/Portfolio/images/A-01.jpg" className='rounded-circle rounded-fluied w-75 border' alt="loading" />
        </div>
        </Col>
      
        <Col md="6" lg="6" className='d-flex justify-content-center align-item-center '>
        <div className='text-center d-flex align-item-center justify-content-center flex-column'>
        <h1 className='pt-4 text-info'>Nice to meet you</h1>
        <h1 className='text-info'>I am Bharathi</h1>
        <h5>FrontEnd Developer</h5>
        <p className='pt-2 p-3 display-h1'>Expert in responsive & interactive website. Expert in HTML5, CSS, BOOTSTRAP, JAVASCRIPT, REACCT JS.</p>
        <div className="button">
            <button className="btn btn-info w-25 p-2">Hire me</button>
        </div>
        <div className="button">
          <a href=".src/portfolio/images/Bharathi_Resume.pdf" className="btn btn-info w-25 p-2 mt-2" download target='_blank'>Download CV</a>
              
        </div>
        </div>

        </Col>
        
      </Row>

    </>
  )
}
