import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

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
                                <div className="card shadow shadow-sm shadow-slate-600 p-2" key={toy._id}>
                                    <p>{toy.sellerName}</p>
                                    <p>{toy.name}</p>
                                    <p>{toy.quantity}</p>
                                    <p>{toy.subCategory}</p>
                                    <p>{toy.price}</p>
                                </div>
                            ))
                        }
                </div>
            </div>
        </div>
    );
};

export default All_Toys;