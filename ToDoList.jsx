import React, { useState } from 'react'

export const ToDoList = () => {
    const [ values , setValues ] = useState("");
    const [ list, setList] = useState([]);

    const handleAdd = () => {
        if(!values){
            alert("enter a value")
            
        }else
        {
            setList([...list,values])
            setValues("")
            console.log(values);
        }

    }

    const handleRemove = (index) => {
        const remove = list.filter((item,indexItem)=>indexItem != index);
        setList(remove);

    }


  return (
    <>
    <div className="container d-flex justify-content-center align-item-center mt-4 flex-column border text-center">
        <h1 className='p-2'>TODO List</h1>
        <div className='addinput '>
            <input type="text" className='m-2 mt-5 w-25 p-2' value={values} onChange={(e) =>{
                setValues(e.target.value)
            }} />
            <button className='btn btn-success p-2 ps-5 pe-5' onClick={() => handleAdd()} >ADD</button>
        </div>

            <div className="result d-flex justify-content-center align-item-center flex-wrap">
                <ul className=''>
                    {list.map((item, index) => {
                        return(
                            <div className='reslistitem d-flex flex-row mt-3'>
                            <li className='form-control d-flex flex-wrap border-none h5 p-2 m-2 d-flex'>
                                {item} 
                            </li>
                            <button className='btn btn-danger ps-5 pe-5 ' onClick={() => handleRemove(index)}>Remove</button>

                            </div>
                            
                        )

                    })}
                </ul>
            </div>
    </div>
    </>
  )
}
