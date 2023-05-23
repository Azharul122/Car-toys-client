import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faCalculator } from '@fortawesome/free-solid-svg-icons'

const All_Toys = () => {
  document.title="CarZone | All Toys"
    //const toys=useLoaderData()
    let [toys,setToys]=useState(useLoaderData())
    const [searh,setSearch]=useState("")
    const [limit,setLimit]=useState(20)
    const { user  } = useContext(AuthContext);
   // const limit =20
     toys=toys.slice(0, limit);
   

// const handleSearch=event=>{
//     const search=document.getElementById("search").value
//     console.log(search)
//     // const searchValue=event.target.saerch.value;
//     const filtredToy=toys.filter(toy=>toy.name.toLowerCase().includes(search))
//     setToys(filtredToy)
// }

// Show All
const showAll=()=>{
  document.getElementById("showAll").style.display="none"
  setLimit()
}
console.log(searh)
    return (
        <div>

<div className="flex md:flex gap-5 items-center justify-center py-5">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text" name='search' id='search'
              placeholder="Search By Toy Name"
              className="input input-bordered"
              onChange={(e)=>setSearch(e.target.value)}
            />
            <button className="btn btn-square" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <Link to={`/add-toys`} className='bg-slate-600 py-2 px-4 rounded'>Add New Toy</Link>
      </div>

            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-5 py-3 md:py-8">
                        {



                            toys.filter(toy=>toy.name.toLowerCase().includes(searh)).map(toy=>(
                                <div className="card shadow shadow-sm shadow-slate-600 p-5 bg-slate-800 bottom-0" key={toy._id}>
                                    <p className='text-xl text-white text-center mb-5'>{toy.name}</p>
                                    <div className="md:flex justify-between mb-5">     
                                    <p><FontAwesomeIcon icon={faCalculator} />  {toy.quantity}</p>
                                    <p> {toy.subCategory}</p></div>
                                   <div className="md:flex justify-between mb-5">
                                   <p className=''><FontAwesomeIcon icon={faUser} /> {toy.sellerName}</p>
                                    <p>${toy.price}</p>
                                   </div>
                                  <div className="text-center">
                                  <Link to={`/toy-details/${toy._id}`} className='bg-slate-600 py-2 px-4 rounded bottom-0 w-[50%] md:w-[80%] text-center'>View Details</Link>
                                  </div>
                                </div>
                            ))
                        }
                </div>
            </div>

            {/* ........................................................................... */}
            <div className="py-5 text-center">
            <button className='btn text-center' onClick={showAll} id='showAll'> Show All</button>
            </div>
        </div>
    );
};

export default All_Toys;