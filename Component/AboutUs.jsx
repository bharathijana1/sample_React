import React from 'react'

export default function AboutUs() {
  return (
    <>
    <div>
    <h4 className='text-info m-5'>About us</h4>

    <div className="container d-flex justify-content-center align-item-center p-3 m-2">
        <div className="d-flex flex-column p-2" style={{backgroundColor:"rgb(247, 247, 247)"}}>   
            <p className="text-center">Chennai tours and travels is to give you, best service at a reasonable cost. We are 
                expertise in Economy Tour bundles and Tourism, best benefits in Car and Bus rental with complete facility. To increase your 
                experience, visit our website www.chennaitourstravelss.com and find how you can enjoy luxurious and memorable tour packages</p>
            <p className="text-center">Unforgettable experience @ Chennai Tours and travels for Best tour packages.</p>
    
        </div>
        <div className="text-center bg-info d-flex flex-column p-3 m-2">
              <p >"Over all we had good trip and everything went fine, very well organized and it was very professional...."
            </p>
            <p>Prakash A - Customer.</p>
        </div>
      </div>    
  </div>
  <div className="container-fluid mb-5" >

    <div className="container text-center d-flex justify-content-center align-item-center ">
        <div className="row  d-flex justify-content-center align-item-center">
{/* lorem picsum - images */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-2 my-2 cardzoom">
                <div className="card " style={{height: "250px"}}>
                    <div className="row">
                        <div className="col-6 col-sm-12">
                            <img className="img-fluid rounded h-100 p-1" src="https://www.chennaitourstravelss.com/images/home/serv1.webp" alt="sample-img" />
                        </div>
                        <div classNameclassName="col-6 col-sm-12">
                            <div classNameclassName="card-body">
                                <p classNameclassName="text-center">Our Mission</p>
                                <div classNameclassName="button text-center">
                                    <a href="#" className="btn btn-primary btn-sm m-1 d-felx flex-column border border-secondary bg-white text-dark">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2 my-2 cardzoom">
                <div className="card" style={{height: "250px"}}>
                    <div className="row">
                        <div className="col-6 col-sm-12">
                            <img className="img-fluid rounded h-100 p-1" src="https://www.chennaitourstravelss.com/images/home/serv2.webp" alt="sample-img" />
                        </div>
                        <div className="col-6 col-sm-12">
                            <div className="card-body">
                                <p className="text-center">OUR Vision</p>
                                <div className="button text-center">
                                    <a href="#" className="btn btn-primary btn-sm m-1 d-felx flex-column border border-secondary bg-white text-dark">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2 my-2 cardzoom">
                <div className="card" style={{height: "250px"}}>
                    <div className="row">
                        <div className="col-6 col-sm-12">
                            <img className="img-fluid rounded h-100 p-1" src="https://www.chennaitourstravelss.com/images/home/serv3.webp" alt="sample-img" />
                        </div>
                        <div className="col-6 col-sm-12">
                            <div className="card-body">
                                <p className="text-center">Why Our Travels</p>
                                <div className="button text-center">
                                    <a href="#" className="btn btn-primary btn-sm m-1 d-felx flex-column border border-secondary bg-white text-dark">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2 my-2 cardzoom">
                <div className="card" style={{height: "250px"}}>
                    <div className="row">
                        <div className="col-6 col-sm-12">
                            <img className="img-fluid rounded h-100 p-1" src="https://www.chennaitourstravelss.com/images/home/serv4.webp" alt="sample-img" />
                        </div>
                        <div className="col-6 col-sm-12">
                            <div className="card-body">
                                <p className="text-center">24/7 Service</p>
                                <div className="button text-center">
                                    <a href="#" className="btn btn-primary btn-sm m-1 d-felx flex-column border border-secondary bg-white text-dark">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>

    </div>


</div>
    </>
  )
}
