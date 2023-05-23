import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'
const Add_Toy = () => {
    const { user  } = useContext(AuthContext);
    // console.log(user)
    // const sellerName= document.getElementById("sellerName");
    // sellerName.innerText=user?user.displayName:"Name"
// console.log(user?user.displayName:"Name")
document.title="CarZone | Add Toy"

const handleAddToy=(event)=>{

    event.preventDefault()
const form=event.target
const name=form.name.value
const quantity=form.quantity.value
const price=form.price.value
const rating=form.rating.value
const sellerName=form.sellerName.value
const sellerMail=form.sellerMail.value
const subCategory=form.subCategory.value
const photoURL=form.photoURL.value
const description=form.description.value

const newToy={name,quantity,price,rating,sellerName,sellerMail,subCategory,photoURL,description};
console.log(newToy)

fetch('http://localhost:5000/toys',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(newToy)
})
.then(res=>res.json())
.then(data=>{
    if(data.insertedId){
        let timerInterval
      
        Swal.fire({
          position: 'Center',
          icon: 'success',
          title: 'Data Successfully added',
          showConfirmButton: false,
          timer: 2000
        })

        name=""
        quantity=""
        price=""
        rating=""
        subCategory=""
        photoURL=""
        description=""
    }
   else {
    Swal.fire({
      position: 'Center',
      icon: 'success',
      title: 'Please try again',
      showConfirmButton: false,
      timer: 1500
    })
    }
})

}

  return (
    <div>
      <div className="container mx-auto h-[100vh] justify-center items-center flex">
        <form className="w-[90%] md:w-[80%] bg-black p-5" onSubmit={handleAddToy}>
            <div className="flex justify-around text-white mb-3">
                <div className="">
                    <label htmlFor="">Name</label>
                    <br />
                    <input type="text"  className="py-2 px-3 bg-slate-600" name="name"  placeholder="Name"/>
                </div>
                <div className="">
                    <label htmlFor="">Avilable Quantity</label>
                    <br />
                    <input type="number"  className="py-2 px-3 bg-slate-600" name="quantity" placeholder="Quantity"/>
                </div>
            </div>


            <div className="flex justify-around text-white mb-3">
                <div className="">
                    <label htmlFor="">Price</label>
                    <br />
                    <input type="number"  className="py-2 px-3 bg-slate-600" name="price"  placeholder="Price"/>
                </div>
                <div className="">
                    <label htmlFor="">Ratings</label>
                    <br />
                    <input type="text"  className="py-2 px-3 bg-slate-600" name="rating" placeholder="Ratings"/>
                </div>
            </div>

            <div className="flex justify-around text-white mb-3">
                <div className="">
                    <label htmlFor="">Seller Name</label>
                    <br />
                    <input id="sellerName" value={user?user.displayName:""} disabled type="text"  className="py-2 px-3 bg-slate-600" name="sellerName"  placeholder="seller Name"/>
                </div>
                <div className="">
                    <label htmlFor="">Seller Email</label>
                    <br />
                    <input value={user?user.email:""} disabled type="email"  className="py-2 px-3 bg-slate-600" name="sellerMail" placeholder="Seller Emasil"/>
                </div>
            </div>

            <div className="flex justify-around text-white mb-3">
                <div className="">
                    <label htmlFor="">Sub Category</label>
                    <br />
                    <input type="text"  className="py-2 px-3 bg-slate-600" name="subCategory"  placeholder="Sub Category"/>
                </div>
                <div className="">
                    <label htmlFor="">Photo URL</label>
                    <br />
                    <input type="text"  className="py-2 px-3 bg-slate-600" name="photoURL" placeholder="Photo URL"/>
                </div>
            </div>
            <div className="text-center mt-5">
          <textarea name="description" id="" cols="50" rows="2" placeholder="Describe About toy" className="text-white p-5"></textarea>
            </div>
           <div className="text-center mt-5">
           <button type="submit" className="w-[50%] bg-slate-600 py-2 px-4 text-center">Add Toy</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Add_Toy;
