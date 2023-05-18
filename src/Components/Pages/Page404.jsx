import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className='h-[100vh] w-full '>
            <h1 className='h-full w-full text-[10vw] flex items-center justify-center shadow shadow-xl shadow-slate-700'><span className='text-red-500 mr-4'>404 </span> not found</h1>
            {/* <Link to={"/"}>Back to Home</Link> */}
        </div>
    );
};

export default Page404;