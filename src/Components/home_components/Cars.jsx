import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Provider/AuthProvider';
import Aos from 'aos';
// import 'react-tabs/style/react-tabs.css';

const Cars = () => {
  
    const [toysCar,settoysCar]=useState([])
    const [sportsCar,setsportsCar]=useState([])
    const [offRoadCar,setoffRoad]=useState([])
    const [vintageCar,setvintageCar]=useState([])
    const {user}=useContext(AuthContext)
    useEffect(() => {
        fetch("http://localhost:5000/cars/")
          .then((res) => res.json())
          .then((data) => settoysCar(data));
      }, []);

     const sptest=toysCar.filter(sp=>sp.id==1)
    
    //   const [cars]=sptest
    //   const {id:spid,sub_category:spSC}=sportsCar


      


      useEffect(() => {
        fetch("http://localhost:5000/cars/1")
          .then((res) => res.json())
          .then((data) => setsportsCar(data));
      }, []);

const [cars,id]=sportsCar
 console.log(cars)

      useEffect(() => {
        fetch("http://localhost:5000/cars/2")
          .then((res) => res.json())
          .then((data) => setoffRoad(data));
      }, []);
      const [offRoad]=offRoadCar
      useEffect(() => {
        fetch("http://localhost:5000/cars/3")
          .then((res) => res.json())
          .then((data) => setvintageCar(data));
      }, []);
      const [vintage]=vintageCar 

const handleViewDetails=()=>{
if(user){

}
else{
  // alert("Please ")
  setInterval(toast("Please login"), 3000);
window.location.href="/login"
  
}
}
Aos.init();

    return (
        <div>
          <ToastContainer></ToastContainer>
            <div className="w-full md:w-[90%] mx-auto md:px-0 px-4" data-aos="flip-right">
          
            <Tabs>
            <TabList>
              <div className="flex justify-center items-center gap-5 py-3">
              {
                    toysCar.map(car=>(
                       
                         <Tab className={"cursor-pointer"}>{car.sub_category}</Tab>
                   
                    ))
                }
              </div>
        </TabList>

    <TabPanel>
   {
      cars && <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5">
        {
            cars.cars.map(car=>(
                <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                <img src={car.image} alt="" className='w-full h-[200px]'/>

                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{car.name}!</h2>
                  <div className="flex justify-between gap-5">
                        <p>Ratings: <span className='font-bold'>{car.rating}</span></p>
                       <p>${car.price}</p>
                  </div>
                  <div className="card-actions">
         
                    <button className="btn btn-primary" onClick={handleViewDetails}> View Details</button>
        
                    
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
      offRoad && <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5">
        {
            offRoad.cars.map(car=>(
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                <img src={car.image} alt="" className='w-full h-[200px]'/>

                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{car.name}!</h2>
                  <div className="flex justify-between gap-5">
                        <p>Ratings: <span className='font-bold'>{car.rating}</span></p>
                       <p>${car.price}</p>
                  </div>
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
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
      vintage && <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5">
        {
            vintage.cars.map(car=>(
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                <img src={car.image} alt="" className='w-full h-[200px]'/>

                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{car.name}!</h2>
                  <div className="flex justify-between gap-5">
                        <p>Ratings: <span className='font-bold'>{car.rating}</span></p>
                       <p>${car.price}</p>
                  </div>
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
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