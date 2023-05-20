import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const My_toy = () => {

  const { user } = useContext(AuthContext);
  const [toys,setToys] = useState(useLoaderData());
  const {_id}=toys

// const handleUpdate=(event)=>{

// }

const handleDelete=(_id)=>{
console.log(_id)
Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
   
        fetch(`http://localhost:5000/toy/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0)
            {
               toast("Success Fully Deleted")
                  setToys(useLoaderData())
            }
        })
    }
  })

}

  return (
    <div>
        <ToastContainer></ToastContainer>
      <div className="container mx-auto py-5">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head*/}
            <thead>
              <tr>
                <th>T. Name.</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Rating</th>
                <th>S. Name</th>
                <th>S. Mail</th>
                <th>Photo</th>
                <th>Desc.</th>
                <th>Action.</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {
                user && (
                  toys.filter(toy=>toy.sellerMail==user.email).map(t=>(
                    <tr className="active">
                    
                    <td>{t.name}</td>
                    <td>{t.quantity}</td>
                    <td>{t.price}</td>
                    <td>{t.rating}</td>
                    <td>{t.sellerName}</td>
                    <td>{t.sellerMail}</td>
                    <td><img src={t.photoURL} alt="" className="w-[40px] h-[40px]" /></td>
                    <td>{t.description}</td>
                    <td><Link to={`http://localhost:5173/update-toy/${t._id}`}> <FontAwesomeIcon  icon={faEdit}  className="text-green-600 mr-2 cursor-pointer"/></Link>
                    <FontAwesomeIcon onClick={()=> handleDelete(t._id)} icon={faTrash}  className="text-red-600 cursor-pointer"/>
                    </td>
                   
                  </tr>
                  ))
                )
              }
              

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default My_toy;
