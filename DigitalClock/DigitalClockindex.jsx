import React from 'react'
import { useEffect, useState } from 'react'

export const DigitalClockindex = () => {
    const [ currentTime, setCurrentTime ] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
            return () => clearInterval(timer);
        }, 1000)
    },[])

    const formatTime = (num) => {
        return num < 10 ? `0${num}` : num;
    }
    const formatHour = (hour) => {
        return hour === 0 ? 12: hour > 12 ? hour - 12 : hour;
    }
    const formatDate = (data) => {
        const option = { weekday: "long", year: "numeric", month: "long", day:"numeric"};
        return data.toLocaleDateString(undefined, option);

    }
  return (
    <>
    <div className="digitalclock text-center bg-info" style={{height:"100vh", width:"100%"}}>
        <div className="heading">
        <h1 className='p-3'>Digital Clock</h1>
        </div>
        <h4 className="time pt-3">{formatTime(formatHour(currentTime.getHours()))}
        :{formatTime(currentTime.getMinutes())}
        :{formatTime(currentTime.getSeconds())} 
        {currentTime.getHours() >= 12 ? " PM" : " AM"}

    </h4>
    <h4 className="date p-3">
        {formatDate(currentTime)}
    </h4>
    </div>



    </>
  )
}
