import React from 'react'
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { FaSquareWhatsapp } from "react-icons/fa6";

export const PortfolioAbout = () => {
  return (
    <>
    <div className="container m-5">
        <div className="row">
            <div className="col">
                <h4 className='text-info'>About Me</h4>
                <h2>I've been developing websites</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptatibus.</p>
            </div>
            <div className="col d-flex gap-4 text-center align-item-center justify-content-center pt-5 ps-5 ms-5">
                <a className='text-white display-6' href="https://github.com/bharathijana1" target='_blank'><FaGithub /></a>
                <a className='text-white display-6' href="tel: +6383765538" target='_blank'><FaSquareWhatsapp /></a>
                <a className='text-white display-6' href="mailto:bharathi.jana01@gmail.com" target='_blank'><IoMdMail /></a>
                <a className='text-white display-6' href="https://learn-and-grow.netlify.app/" target='_blank'><SiNetlify /></a>          

            </div>
        </div>
    </div>
    </>
  )
}
