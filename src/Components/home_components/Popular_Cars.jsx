import React, { useEffect } from 'react';
import { useState } from 'react';

const Popular_Cars = () => {
    const [popular,setPopular]=useState([])
    useEffect(() => {
        fetch("http://localhost:5000/cars/")
          .then((res) => res.json())
          .then((data) => setPopular(data));
      }, []);

    //   const allpular=popular.cars.filter(fpop=>fpop.isPopular==true)

   const mostPop= popular.map(p=>{p.cars.filter(fp=>fp.isPopular==true)})
      
    //   const [fpopular]=allpular
      console.log(mostPop)
    return (
        <div className='container mx-auto'>
               {
      popular && <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5">
        {
            popular.map(car=>(
               <p></p>
            //     <div className="card w-96 bg-base-100 shadow-xl">
            //     <figure className="px-10 pt-10">
            //     <img src={car.image} alt="" className='w-full h-[200px]'/>

            //     </figure>
            //     <div className="card-body items-center text-center">
            //       <h2 className="card-title">{car.name}!</h2>
            //       <div className="flex justify-between gap-5">
            //             <p>Ratings: <span className='font-bold'>{car.rating}</span></p>
            //            <p>${car.price}</p>
            //       </div>
            //       <div className="card-actions">
            //         <button className="btn btn-primary">Buy Now</button>
            //       </div>
            //     </div>
            //   </div>
            ))
        }
      </div>
   }
        </div>
    );
};

export default Popular_Cars;