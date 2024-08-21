import React from 'react'
import TourPackage from './TourPackage'

const TourPackageData = () => {
    const tourdata = [
        {
            id:1,
            des:"Bodhgaya Tour Packages",
            img:"https://www.chennaitourstravelss.com/images/tour/varanasi/gaya.webp",
            days:"7 days",
        },
        {
            id:2,
            des:"Kashmir Valley Tour",
            img:"https://www.chennaitourstravelss.com/images/tour/kolkata/westbengallist.webp",
            days:"3 days"
        },
        {
            id:3,
            des:"Pokhara Tour Packages",
            img:"https://www.chennaitourstravelss.com/images/tour/kathmedu/kathmedu.webp",
            days:"6 days",
        },
        {
            id:4,
            des:"West Bengal Tour Packages",
            img:"https://www.chennaitourstravelss.com/images/tour/kolkata/westbengallist.webp",
            days:"5 days",
        },{
            id:5,
            des:"North East tour packages",
            img:"https://www.chennaitourstravelss.com/images/tour/kolkata/northeast.webp",
            days:"4 days",
        },{
            id:6,
            des:"Andaman Tour Packages",
            img:"https://www.chennaitourstravelss.com/images/tour/andaman/andamanlist.webp",
            days:"7 days",
        },{
            id:7,
            des:"Havelock Tour Package",
            img:"https://www.chennaitourstravelss.com/images/tour/andaman/andaman-list-fish.webp",
            days:"8 days",
        },{
            id:8,
            des:"Andaman School Tour Packages",
            img:"https://www.chennaitourstravelss.com/images/tour/andaman/andamanlistblue.webp",
            days:"10 days",
        },{
            id:9,
            des:"Gangtok & Darjeeling Tour",
            img:"https://www.chennaitourstravelss.com/images/tour/gangtok/gantok-flowers.webp",
            days:"5 days",
        },
        
    ]
  return (
    <>
      <div className="container d-flex justify-content-center align-item-center">
        <div className="row">
        <h4 className='text-info m-5'>Tour Package</h4>
            <div className="col d-flex justify-content-center align-item-center flex-row flex-wrap gap-4 text-center">
            {tourdata.map((i,index) => {
                return(
                    <TourPackage 
                      key={index} 
                      item={i} 
                      img={i.img}
                      desc={i.des}
                      days={i.days} 
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

export default TourPackageData
