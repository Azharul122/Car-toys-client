import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const My_toy = () => {
  const { user } = useContext(AuthContext);
  let [toys, setToys] = useState(useLoaderData());
  let [filter,setfilter]=useState("ASC")
  const { _id } = toys;
  document.title="CarZone | My Toys"
  //   let e = document.getElementById("sortTot");
  // let value = e.value;
  // let text = value.options[e.selectedIndex].text;
  // console.log(text)
  // const handleUpdate=(event)=>{

  // }

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://cars-server-eta.vercel.app/toy/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              //delete success message
              Swal.fire({

                position: 'center',
                icon: 'success',
                title:"Data deleted successfully",
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  },
                showConfirmButton: false,
                timer: 1500
              })

              const remaining=toys.filter(toy=>toy._id!==_id)
              setToys(remaining)
            }

            else{
              Swal.fire({

                position: 'center',
                icon: 'error',
                title:"Try again",
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  },
                showConfirmButton: false,
                timer: 1500
              })
              setToys(toys)
            }
          });
      }
    });
  };

  let sortedToy = [...toys];
  
  const filterToy = (value) => {
    console.log(value);
   
    if (value == "ASC") {
      sortedToy = sortedToy.sort((a, b) => a.price - b.price);
    }
    if (value == "DESC") {
      sortedToy = sortedToy.sort((a, b) => b.price - a.price);
    }
    setToys(sortedToy);
  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="flex items-center relative container mx-auto py-7">
        <select
          className="absolute px-4 py-2 text-white font-bold"
          name="sortTot"
          id="sortTot"
          onChange={(e) => filterToy(e.target.value)}
        >
          <option value="" disabled selected>Filter by Price</option>
          <option value="ASC">
            Ascanding
          </option>
          <option value="DESC">Descanding</option>
        </select>
      </div>


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

              {user &&
                toys
                  .filter((toy) => toy.sellerMail == user.email)
                  .map((t) => (
                    <tr className="bg-white odd:bg-[#1E293B]">
                      <td>{t.name}</td>
                      <td>{t.quantity}</td>
                      <td>{t.price}</td>
                      <td>{t.rating}</td>
                      <td>{t.sellerName}</td>
                      <td>{t.sellerMail}</td>
                      <td>
                        <img
                          src={t.photoURL}
                          alt=""
                          className="w-[40px] h-[40px]"
                        />
                      </td>
                      <td>{t.description}</td>
                      <td>
                        <Link to={`/update-toy/${t._id}`}>
                          {" "}
                          <FontAwesomeIcon
                            icon={faEdit}
                            className="text-green-600 mr-2 cursor-pointer"
                          />
                        </Link>
                        <FontAwesomeIcon
                          onClick={() => handleDelete(t._id)}
                          icon={faTrash}
                          className="text-red-600 cursor-pointer"
                        />
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default My_toy;
