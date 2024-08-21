import React from 'react'
import { Link } from "react-router-dom"


export default function Forms() {
  return (
    <>
    <div class="container-fluied ">
        <div className="row ">
            <div className="col mt-5" >
                <div className="active  d-flex justify-content-start align-item-start " >
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
                    <input type="date" name="" id="temail   " className="form-control m-2" placeholder="Email"/>
                        <select name="cars" id="cars" class="form-control  m-2">
                            <option value="Select Vehicle">Select Vehicle</option>
                            <option value="saab">34 seat bus</option>
                            <option value="mercedes">10 seats car</option>
                            <option value="audi">10 seats van</option>
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
