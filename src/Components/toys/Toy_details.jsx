import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Toy_details = () => {
  document.title="CarZone | Toy Details"
  const { id } = useParams;
  const toy = useLoaderData();
  console.log(toy);
  const {
    _id,
    name,
    quantity,
    price,
    rating,
    sellerName,
    sellerMail,
    subCategory,
    photoURL,
    description,
  } = toy;

  return (
    <div>



      <div className="container mx-auto md:flex justify-around items-center py-5">
        <div className="">
          <img src={photoURL} alt="" />
        </div>
        <div className="">
          <div className="flex gap-1">
            <p className="font-bold">Sub Category:</p>{" "}
            <span>{subCategory}</span>
          </div>

          <div className="flex gap-1">
            <p className="font-bold">Rating:</p> <span>{rating}</span>
          </div>

          <div className="flex gap-1">
            <p className="font-bold">Avilable Quantity:</p>{" "}
            <span>{quantity}</span>
          </div>

          <div className="flex gap-1">
            <p className="font-bold">Price :</p> <span>${price}</span>
          </div>

          <div className="flex gap-1">
            <p className="font-bold">Description:</p> <span>{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy_details;
