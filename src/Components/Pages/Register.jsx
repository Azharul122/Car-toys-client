// // import React from 'react';
// import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import ReactDOM from "react-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import AuthProvider, { AuthContext } from "../../Provider/AuthProvider";
// import {
//   getAuth,
//   updateCurrentUser,
//   updateProfile,
//   signInWithPopup,
//   GoogleAuthProvider,
//   GithubAuthProvider,
// } from "firebase/auth";

const Register = () => {

  const handleRegister=()=>{

  }

    return (
      <div className="py-10 flex justify-center items-center text-center">
      <form className="w-[80%] md:w-[50%] mx-auto " onSubmit={handleRegister}>
      <input type="text" name="name" placeholder="Entar Name" className="mb-5 input input-bordered w-full max-w-xs" />
      <br />
      <input type="text" name="photoURL" placeholder="Entar Photo URL" className="mb-5 input input-bordered w-full max-w-xs" />
<br />
      <input type="email" name="email" placeholder="Entar email" className="mb-5 input input-bordered w-full max-w-xs" />
      <br />
      <input type="password" name="password" placeholder="Enter Password" className="mb-5 input input-bordered w-full max-w-xs" />
          <div className="flex text-center justify-center items-center mb-6">
              <p className="">Already user ? <Link to={"/login"}>Sighn In</Link></p>
          </div>
          <button
              type="submit"
              className="bg-slate-500 text-white py-2 px-5 rounded"
          >
              Sign Up
          </button>
      </form>
  </div>
    );
};

export default Register;