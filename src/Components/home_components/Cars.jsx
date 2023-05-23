import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link, Navigate, useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Provider/AuthProvider';
import Aos from 'aos';
// import { Toast } from 'react-toastify/dist/components';
import Swal from 'sweetalert2';
import Active from '../Active/Active';

import 'react-tabs/style/react-tabs.css';
import "./Cars.css"


const Cars = () => {

  let [toys,setToys]=useState(useLoaderData())
const {user}=useContext(AuthContext)
  
    // const [toysCar,settoysCar]=useState([])
    // const [sportsCar,setsportsCar]=useState([])
    // const [offRoadCar,setoffRoad]=useState([])
    // const [vintageCar,setvintageCar]=useState([])
    // const {user}=useContext(AuthContext)
    // useEffect(() => {
    //     fetch("https://cars-server-eta.vercel.app/toys/")
    //       .then((res) => res.json())
    //       .then((data) => settoysCar(data));
    //   }, []);

    //  const sptest=toysCar.filter(sp=>sp.id==1)
    
    //   const [cars]=sptest
    //   const {id:spid,sub_category:spSC}=sportsCar


      


//       useEffect(() => {
//         fetch("https://cars-server-eta.vercel.app/cars/1")
//           .then((res) => res.json())
//           .then((data) => setsportsCar(data));
//       }, []);

// const [cars,id]=sportsCar
//  console.log(cars)

//       useEffect(() => {
//         fetch("https://cars-server-eta.vercel.app/cars/2")
//           .then((res) => res.json())
//           .then((data) => setoffRoad(data));
//       }, []);
//       const [offRoad]=offRoadCar
//       useEffect(() => {
//         fetch("https://cars-server-eta.vercel.app/cars/3")
//           .then((res) => res.json())
//           .then((data) => setvintageCar(data));
//       }, []);
//       const [vintage]=vintageCar 

// const handleViewDetails=()=>{
// if(user){

// }
// else{
//   // alert("Please ")
//   setInterval(toast("Please login"), 3000);
// window.location.href="/login"
  
// }
// }
// Aos.init();

// const {
//   _id,
//   name,
//   quantity,
//   price,
//   rating,
//   sellerName,
//   sellerMail,
//   subCategory,
//   photoURL,
//   description,
// } = toys;
const [msg,setMSg]=useState("")

const handleMeassage=()=>{
if(!user){
  Swal.fire({
    position: 'center',
    icon:'warning',
    title: 'You must Login first',
    showConfirmButton: false,
    timer: 3000
  })
}

  
}


    return (
        <div>

            <div className="w-full md:w-[90%] mx-auto md:px-0 px-4" data-aos="flip-right">
          
            <Tabs>
            <TabList>
              <div className="flex justify-center items-center gap-5 py-3">

                 
                       
                        <Tab className={"cursor-pointer"}>Sports</Tab>
                        <Tab className={"cursor-pointer"}>Off-road</Tab> 
                       <Tab className={"cursor-pointer"}>Vintage</Tab> 
                         
                   

              </div>
        </TabList>

    <TabPanel>
   {
      toys && <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5">
        {
            toys.filter(toy=>toy.subCategory=="Sports").map(car=>(
                <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                <img src={car.photoURL} alt="" className='w-full h-[200px]'/>

                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{car.name}!</h2>
                  <div className="flex justify-between gap-5">
                        <p>Ratings: <span className='font-bold'>{car.rating}</span></p>
                       <p>${car.price}</p>
                  </div>
                  <div className="card-actions">
         
                  < Link to={`/toy-details/${car._id}`} onClick={handleMeassage} className='bg-slate-600 py-2 px-4 rounded bottom-0 w-[50%] md:w-[80%] text-center'>View Details</Link>

        
                    
                  </div>
                </div>
              </div>
            ))
        }
      </div>
   }
    </TabPanel>
    <TabPanel>
    {
       toys && <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5">
       {
           toys.filter(toy=>toy.subCategory=="Off-Road").map(car=>(
               <div className="card  bg-base-100 shadow-xl">
               <figure className="px-10 pt-10">
               <img src={car.photoURL} alt="" className='w-full h-[200px]'/>

               </figure>
               <div className="card-body items-center text-center">
                 <h2 className="card-title">{car.name}!</h2>
                 <div className="flex justify-between gap-5">
                       <p>Ratings: <span className='font-bold'>{car.rating}</span></p>
                      <p>${car.price}</p>
                 </div>
                 <div className="card-actions">
        
                 < Link to={`/toy-details/${car._id}`} onClick={handleMeassage} className='bg-slate-600 py-2 px-4 rounded bottom-0 w-[50%] md:w-[80%] text-center'>View Details</Link>


       
                   
                 </div>
               </div>
             </div>
           ))
       }
     </div>
   }
   
    </TabPanel>
    <TabPanel>
    {
       toys && <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5">
       {
           toys.filter(toy=>toy.subCategory=="Vintage").map(car=>(
               <div className="card  bg-base-100 shadow-xl">
               <figure className="px-10 pt-10">
               <img src={car.photoURL} alt="" className='w-full h-[200px]'/>

               </figure>
               <div className="card-body items-center text-center">
                 <h2 className="card-title">{car.name}!</h2>
                 <div className="flex justify-between gap-5">
                       <p>Ratings: <span className='font-bold'>{car.rating}</span></p>
                      <p>${car.price}</p>
                 </div>
                 <div className="card-actions">
        
                 < Link to={`/toy-details/${car._id}`} onClick={handleMeassage} className='bg-slate-600 py-2 px-4 rounded bottom-0 w-[50%] md:w-[80%] text-center'>View Details</Link>

       
                   
                 </div>
               </div>
             </div>
           ))
       }
     </div>
   }
    </TabPanel>

    {/* <TabPanel>
      {
        toysCar.map
        // toysCar[0].cars.map(sportsCar=>(
        //    <p>{ sportsCar.price}</p>
        // ))
      }
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel> */}
  </Tabs>
            </div>
        </div>
    );
};

export default Cars;