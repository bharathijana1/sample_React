import React from 'react'
import { useEffect, useRef, useState } from "react"


export const StopWatch = () => {
    
    const [time,setTime]=useState(0);
    const [timerOn,setTimeOn]=useState(false);

    const timer = useRef(null);
    
    useEffect((timer)=>{
        if(timerOn)
        {
            timer=setInterval(()=>{
                 setTime((prev)=>prev+10)
             },10)
        }
        else if(!timerOn){
            clearInterval(timer)
        }
        return ()=>{
            clearInterval(timer)
        }
    },[timerOn])

    const handleStart=()=>{
        setTimeOn(true);
    }
    
    const handleReset=()=>{
        setTime(0);
        setTimeOn(false)
    }
    
    const handleStop=()=>{
        setTimeOn(false)
    }

    return(
        <div className="style.StopWatch text-center p-3 mt-5">
             <h1>Stopwatch</h1>
            <h3 ref={timer} className="style.time p-5">
                {("0"+ Math.floor((time/600000)%60)).slice(-2)} h :
                {("0"+ Math.floor((time/60000)%60)).slice(-2)} m :
                {("0"+ Math.floor((time/1000)%60)).slice(-2)} s 
                {/* <span>{("0"+ ((time/10)%100)).slice(-2)} ms</span> */}
            </h3>
            <div className="style.b m-3">
                <button className="style.start btn btn-success m-2" onClick={handleStart}>START</button>
                <button className="style.stop btn btn-danger m-2" onClick={handleStop}>STOP</button>
                <button className="style.reset btn btn-warning m-2" onClick={handleReset}>RESET</button>
            </div>
        </div>
    )
}
