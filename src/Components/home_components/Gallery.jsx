import Aos from 'aos';
import React from 'react';

const Gallery = () => {
    Aos.init();
    return (
        <div>
            <div className="container sm:w-[90%]  mx-auto grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 md:px-0 px-3" data-aos="flip-left">
                <img className='h-[40vw]  md:h-[20vw] w-full' src="https://images.pexels.com/photos/10216080/pexels-photo-10216080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img className='h-[40vw] md:h-[20vw]  w-full' src="https://images.pexels.com/photos/9998354/pexels-photo-9998354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img className='h-[40vw] md:h-[20vw]  w-full' src="https://images.pexels.com/photos/5431662/pexels-photo-5431662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img className='h-[40vw] md:h-[20vw]  w-full' src="https://images.pexels.com/photos/6161473/pexels-photo-6161473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img className='h-[40vw]  md:h-[20vw]  w-full' src="https://images.pexels.com/photos/3991204/pexels-photo-3991204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img className='h-[40vw] md:h-[20vw]  w-full' src="https://images.pexels.com/photos/5052365/pexels-photo-5052365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img className='h-[40vw] md:h-[20vw]  w-full' src="https://images.pexels.com/photos/12720687/pexels-photo-12720687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img className='h-[40vw] md:h-[20vw]  w-full' src="https://images.pexels.com/photos/10215981/pexels-photo-10215981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </div>
    );
};

export default Gallery;