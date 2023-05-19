import React from 'react';

const Gallery = () => {
    return (
        <div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
                <img className='h-[20vw]' src="https://images.pexels.com/photos/10216080/pexels-photo-10216080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img className='h-[20vw]' src="https://images.pexels.com/photos/9998354/pexels-photo-9998354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img className='h-[20vw]' src="https://images.pexels.com/photos/5431662/pexels-photo-5431662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img className='h-[20vw]' src="https://images.pexels.com/photos/6161473/pexels-photo-6161473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img className='h-[20vw]' src="https://images.pexels.com/photos/3991204/pexels-photo-3991204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img className='h-[20vw]' src="https://images.pexels.com/photos/5052365/pexels-photo-5052365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img className='h-[20vw]' src="https://images.pexels.com/photos/12720687/pexels-photo-12720687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img className='h-[20vw]' src="https://images.pexels.com/photos/10215981/pexels-photo-10215981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </div>
    );
};

export default Gallery;