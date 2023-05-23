import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
document.title="CarZone | update toy"
const Update_toy = () => {
const toy=useLoaderData();
const nevigate=useNavigate()
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
const handleToy=(event)=>{
event.preventDefault()
const form=event.target
const quantity=form.quantity.value
const price=form.price.value
const description=form.description.value
const updateToy={quantity,price,description};
console.log(updateToy)


  fetch(`https://cars-server-eta.vercel.app/toyUpdate/${_id}`,{
    method: 'PUT',
    headers:{
        'Content-Type': 'application/json'
    },
    body:JSON.stringify(updateToy)
})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.modifiedCount>0){
         
Swal.fire({

    position: 'center',
    icon: 'success',
    title:"Data updated successfully",
    showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
    showConfirmButton: false,
    timer: 1500
  })
  setTimeout(()=>{
     nevigate("../my-toys/")
    // <Link to={"https://cars-server-eta.vercel.app//my-toy"}></Link>
  },1600)
    }
    else{
        Swal.fire({

            position: 'center',
            icon: 'error',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              },
            showConfirmButton: false,
            timer: 1500
          })
    }
})
}
    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="container mx-auto py-5 justify-center items-center flex">
        <form className="w-[90%] md:w-[60%] bg-slate-800 p-5" onSubmit={handleToy}>
        <p className="text-white pb-5 font-['EB Garamond'] text-3xl text-center">Update toy</p>

            <div className="grid grid-cols-2 gap-5 text-white mb-3">
            <div className="">
                    <label htmlFor="">Price</label>
                    <br />
                    <input type="number" defaultValue={price}  className="py-2 px-3 bg-slate-600 w-full" name="price"  placeholder="Price"/>
                </div>
                <div className="">
                    <label htmlFor="">Avilable Quantity</label>
                    <br />
                    <input type="number" defaultValue={quantity}  className="py-2 px-3 bg-slate-600 w-full" name="quantity" placeholder="Quantity"/>
                </div>
            </div>


            <div className="text-center mt-5">
          <textarea name="description" defaultValue={description} id="" cols="50" rows="2" placeholder="Describe About toy" className="text-white p-5 w-full"></textarea>
            </div>
           <div className="text-center mt-5">
           <button type="submit" className="w-[50%] bg-slate-600 py-2 px-4 text-center">Update Toy</button>
            </div>
        </form>
      </div>
        </div>
    );
};

export default Update_toy;