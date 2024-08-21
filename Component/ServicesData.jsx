import React from 'react'
import Services from './Services'

export const ServicesData = (props) => {
    const service =[
        {
            stitle:"In Bound Tour Package",
            sdesc:"Chennai tours and travels with more than 10 years of experience manage inbound tour package with commitment to its clients. We plan trip accordingly to customer requirement in best way to satisfy them. Also we provide unique and customized itineraries to our customers with 24/7 support.",
            simg:"https://www.chennaitourstravelss.com/images/services/domestic.webp",
        },
        {
            stitle:"Out Bound Tour Package",
            sdesc:"Chennai tours and travels with more than 10 years of experience manage inbound tour package with commitment to its clients. We plan trip accordingly to customer requirement in best way to satisfy them. Also we provide unique and customized itineraries to our customers with 24/7 support.",
            simg:"https://www.chennaitourstravelss.com/images/services/corporate.webp",
        },
        {
            stitle:"Domestic Tour Package",
            sdesc:"Avail the best domestic tour package from Chennai tours and travels with all mode of transports availability. Packages include well planned and organised work and there will be no confusions on the trip. It not includes various cities to visit but our trip will give you unforgettable experience.",
            simg:"https://www.chennaitourstravelss.com/images/services/college.webp",
        },
        {
            stitle:"Corporate Tour Package",
            sdesc:"We at Chennai tours and travels assure you for the refreshment of employees and will take care of all your travel needs. We are also experienced in arranging and managing conferences and meeting for all industries.",
            simg:"https://www.chennaitourstravelss.com/images/services/school.webp",
        },
        {
            stitle:"College Tour Package",
            sdesc:"We organize innovative college tour packages with the concept of educational and exotic tour experience to the college students in all the ways. Industrial visits and learning environment places we organise to students in order to educate them in outdoor with team spirit.",
            simg:"https://www.chennaitourstravelss.com/images/services/group-tour.webp",
        },
        {
            stitle:"School Tour Package",
            sdesc:"We arrange school tour package to the students with fun, games and activities. Our package will make the trip educational in real and we provide personal support and monitor the students in responsible manner and make the trip an enjoyable one.",
            simg:"https://www.chennaitourstravelss.com/images/services/family-tour.webp",
        },
        {
            stitle:"Group Tour Package",
            sdesc:"Experience the most beautiful locations throughout the world with group tour oragnized with Chennai tours and travels. Join us to have an enjoyable, memorable and fun filled experience in your trip. We are here to make all your needs comfort on your trip.",
            simg:"https://www.chennaitourstravelss.com/images/services/car-rental.webp",
        },
        {
            stitle:"Family Tour Package",
            sdesc:"Spend your time with Family with our exclusive packages to make the trip a memorable one. The trip might be for any country or for any season, we are here to give you the best options to make the vacation an enjoyable one with comfort.",
            simg:"https://www.chennaitourstravelss.com/images/services/bus-rental-service.webp",
        },
        {
            stitle:"Car Rental",
            sdesc:"We include a variety of vehicles with lot of comforts on your travel. Chennai tours and travels offers luxury, premium and economic cars accordingly to customers need with 24/7 support. With experienced and language drivers you can visit places on time and enjoy your destinations.",
            simg:"https://www.chennaitourstravelss.com/images/services/hotel-reservation.webp",
        },
        {
            stitle:"Bus Rental / Services",
            sdesc:"We provide luxury and all type of travel buses for your travelling experience at economy prices. We offer wide range of buses for our customers according to their requirements, tourist bus services are provided to travel around your destination.",
            simg:"https://www.chennaitourstravelss.com/images/services/10.png",
        },
        {
            stitle:"Hotel Reservation",
            sdesc:"We are here to provide you one stop solution for all your travel needs. Hotel reservations are done accordingly to customer needs like luxury or economy or spacious rooms for their comfort with best rate. We will provide you the best hotel to stay and make your trip a pleasurable one.",
            simg:"https://www.chennaitourstravelss.com/images/services/11.png",
        },
        {
            stitle:"Travel Insurance",
            sdesc:"Chennai tours and travels are experts in providing travel insurance to make customers mind in peace while travelling out of the country. For your convenience single or multiple trip plans available and no medical tests required for it. For instant policy no documentation required.",
            simg:"https://www.chennaitourstravelss.com/images/services/12.png",
        },
    ]
  return (
    <>
      <div className="container d-flex justify-content-center align-item-center">
        <div className="row">
        <h4 className='text-info m-5'>Services</h4>
            <div className="col d-flex justify-content-center align-item-center flex-row flex-wrap gap-4 text-center">
            {service.map((item,index) => {
                return(
                    <Services 
                      stitle={item.stitle}
                      simg={item.simg}
                      skey={index} 
                      sitem={item} 
                      sdesc={item.sdesc} 
                       />
                )
            }
            )}

            </div>
        </div>

    </div>
    </>
  )
}
