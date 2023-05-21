// import React from 'react';
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
const Login = () => {

    document.title="CarZone | login"
    const {signIn}  = useContext(AuthContext)
    const location = useLocation()
    console.log("login", location.pathname)
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"

    const [message, setMessage] = useState("")


    const handleLogin = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const loggeduser = result.user;
                navigate(from)
                console.log(loggeduser)
            })
            .catch(error => {
                setMessage("Email Password didin't matched")
            })
    }
    // const handleLogin=()=>{

    // }

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const nevigate = useNavigate();

    const handleGoogleSignUp = () => {
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            const user = result.user;
            nevigate("/");
          })
          .then((error) => {
            console.log(error);
          });
      };

    return (
        
        <div className="py-10 flex justify-center items-center text-center">
            <form className="w-[80%] md:w-[50%] mx-auto " onSubmit={handleLogin}>
            <input type="email" name="email" placeholder="Entar email" className="mb-5 input input-bordered w-full max-w-xs" />
            <br />
            <input type="password" name="password" placeholder="Enter Password" className="mb-5 input input-bordered w-full max-w-xs" />
                <div className="flex text-center justify-center items-center mb-6">
                    <p className="">New to chef ? <Link to={"/register"}>Sighn Up</Link></p>
                </div>
                <button
                    type="submit"
                    className="bg-slate-500 text-white py-2 px-5 rounded"
                >
                    Sign In
                </button>

                
          <button
            onClick={handleGoogleSignUp}
            className="flex justify-center items-center gap-2 py-2 px-3 bg-[#374151] rounded"
          >
            <img
              src="https://img.freepik.com/premium-psd/google-icon-isolated_68185-565.jpg?w=360"
              className="w-[30px] h-[30px] "
              alt=""
            />
            Google
          </button>
            </form>
        </div>
    );
};

export default Login;