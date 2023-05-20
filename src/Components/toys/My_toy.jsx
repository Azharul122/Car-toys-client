import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

const My_toy = () => {
  const [username, setuserName] = useState(null);

  const { user } = useContext(AuthContext);
  const toys = useLoaderData();

  if (user) {
    // setuserName(user.displayName)
  }

  // console.log(toy)

  return (
    <div>
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
                  toys.filter(toy=>toy.sellerName==user.displayName).map(t=>(
                    <tr className="active">
                    
                    <td>{t.name}</td>
                    <td>{t.quantity}</td>
                    <td>{t.price}</td>
                    <td>{t.rating}</td>
                    <td>{t.sellerName}</td>
                    <td>{t.sellerMail}</td>
                    <td><img src={t.photoURL} alt="" className="w-[40px] h-[40px]" /></td>
                    <td>{t.description}</td>
                    <td><FontAwesomeIcon icon={faEdit}  className="text-green-600 mr-2 cursor-pointer"/>
                    <FontAwesomeIcon icon={faDeleteLeft}  className="text-red-600 cursor-pointer"/>
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
