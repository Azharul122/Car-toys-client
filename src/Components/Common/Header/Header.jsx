// import React from 'react';

import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png"

const Header = () => {
    return (
      <div className=" bg-slate-600">
          <div className="navbar  flex justify-between items-center container mx-auto py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-5  shadow bg-base-100 rounded-box  w-[200px]">
                <Link to={"/"} className="px-5 py-2" >Home</Link>
                <Link to={"/all-cars"} className="px-5 py-2">All Cars</Link>
                <Link to={"/my-cars"} className="px-5 py-2">My Cars</Link>
                <Link to={"/blog"} className="px-5 py-2">Blog</Link>

            </ul>
          </div>
          <Link to={"/"}><img src={logo} alt="" className="h-[50px] w-[50px] rounded-full mr-5 md:block hidden" /></Link>
          <Link to={"/"} className="text-xl text-white">CarZone</Link>
     

        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 flex gap-5 text-white">
          <Link to={"/"} className="ml-5">Home</Link>
                <Link to={"/all-cars"}>All Cars</Link>
                <Link to={"/my-cars"}>My Cars</Link>
                <Link to={"/blog"}>Blog</Link>
          </ul>
        </div>
        <div className="navbar-end ">
        <Link to={"/"}><img src={logo} alt="" className="h-[50px] w-[50px] rounded-full mr-5" /></Link>
        </div>
      </div>
      </div>
    );
};

export default Header;
