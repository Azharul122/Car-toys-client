import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faCalculator } from '@fortawesome/free-solid-svg-icons'

const All_Toys = () => {
    //const toys=useLoaderData()
    const[toys,setToys]=useState(useLoaderData())
    const { user  } = useContext(AuthContext);

const handleSearch=event=>{
    const search=document.getElementById("search").value
    // const searchValue=event.target.saerch.value;
    const filtredToy=toys.filter(toy=>toy.name==search)
    setToys(filtredToy)
}


    return (
        <div>

<div className="flex md:flex gap-5 items-center justify-center py-5">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text" name='search' id='search'
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square" onClick={handleSearch}>
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



                            toys.map(toy=>(
                                <div className="card shadow shadow-sm shadow-slate-600 p-5 bg-slate-800" key={toy._id}>
                                    <p className='text-xl text-white text-center mb-5'>{toy.name}</p>
                                    <div className="md:flex justify-between mb-5">     
                                    <p><FontAwesomeIcon icon={faCalculator} />  {toy.quantity}</p>
                                    <p> {toy.subCategory}</p></div>
                                   <div className="md:flex justify-between mb-5">
                                   <p className=''><FontAwesomeIcon icon={faUser} /> {toy.sellerName}</p>
                                    <p>${toy.price}</p>
                                   </div>
                                   <Link to={`/toy-details/${toy._id}`} className='bg-slate-600 py-2 px-4 rounded'>View Details</Link>
                                </div>
                            ))
                        }
                </div>
            </div>
        </div>
    );
};

export default All_Toys;