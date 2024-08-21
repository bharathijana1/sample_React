import React from 'react'
import { Link } from "react-router-dom"


export default function FormmsTwo() {
  return (
    <>
    <div class="container-fluied ">
        <div className="row ">
            <div className="col mt-5">
                <div className="active d-flex justify-content-start align-item-start" >
                <div className="button">
                    <button type="submit" className="btn bg-info m-1">
                            <Link rel="stylesheet" href="#tour" to="/car" className='text-dark text-decoration-none'>
                            Car
                            </Link>
                            </button>
                    </div>
                    <div className="button">
                        <button type="submit" className="btn bg-info m-1">
                            <Link rel="stylesheet" href="#tour" to="/tour" className='text-dark text-decoration-none'>
                            Tour
                            </Link>
                            </button>
                    </div>
                </div>
                

                <form action="" className=" d-flex justify-content-center align-item-center border border-white w-50 " >
                    <div class="form-group m-2">
                        <input type="text" name="" id="tname" className="form-control m-2" placeholder="Name"/>
                        <input type="number" name="" id="tphone" className="form-control m-2" placeholder="Phone"/>
                        <input type="text" name="" id="temail   " className="form-control m-2" placeholder="Email"/>

                    </div>
                    <div className="form-group m-2" >
                        <select name="cars" id="cars" className="form-control  m-2" >
                            <option value="Select Vehicle">Tour Categories</option>
                            <option value="saab">Standard</option>
                            <option value="mercedes">luxuary</option>
                            <option value="audi">Budget</option>
                          </select>
                        <select name="cars" id="cars" class="form-control  m-2">
                            <option value="Select Vehicle">Select Tour Package</option>
                            <option value="saab">3 Day ooty</option>
                            <option value="mercedes">5 days kodaikanal</option>
                            <option value="audi">3 days Delhi</option>
                          </select>
                          <div className="button ">
                            <button type="submit" className="btn bg-info form-control  m-2">Book</button>
                        </div>
                    </div>
                    
                    
                </form>
            </div>
        </div>
      </div>
    </>
  )
}
