import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  document.title="CarZone | Oh! Try again"
    return (
        <div className=''>
                <div className="relative h-[100vh] w-full flex items-center justify-center bg-[url('https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png')] bg-center">
                  <Link to={"/"} className='text-end px-4 py-2 bg-slate-600 text-white absolute'>Back to home</Link>
                </div>
          </div>
    );
};

export default Page404;