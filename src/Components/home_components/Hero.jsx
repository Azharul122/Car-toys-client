import React from 'react';

const Hero = () => {
    return (
        <div>
             <div className="container mx-auto grid grid-cols-3 justify-center items-center text-center p-5 border border-slate-600 shadow shadow-lg shadow-slate-600">
                <div className="col-span-2">
                    <img src="https://images.pexels.com/photos/6132059/pexels-photo-6132059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                </div>
                <div className="">
                    <p className="text-3xl text-white">Visit our letest Car Toys</p>
                   <button className="btn bg-slate-600 text-white">Visit</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;