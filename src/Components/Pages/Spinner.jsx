import React from 'react';

const Spinner = () => {
    return (
        <div className='h-[100vh] w-full flex items-center justify-center top-0 left-0'>
            <button className="btn btn-square loading"></button>
        </div>
    );
};

export default Spinner;