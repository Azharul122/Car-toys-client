import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faCalculator } from '@fortawesome/free-solid-svg-icons'

const All_Toys = () => {
    const toys=useLoaderData()
    const { user  } = useContext(AuthContext);
    console.log(toys)
    return (
        <div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-5 py-3 md:py-8">
                        {
//                             description
// : 
// "dfgdfg"
// name
// : 
// "ghgh"
// photoURL
// : 
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-xDfIixSXhMc1rJJruvFQEVDO6tqagBqD_mrDcZzQw&s"
// price
// : 
// "67"
// quantity
// : 
// "10"
// rating
// : 
// "67"
// sellerMail
// : 
// "azharulip@gmail.com"
// sellerName
// : 
// "Azharul Islam"
// subCategory

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