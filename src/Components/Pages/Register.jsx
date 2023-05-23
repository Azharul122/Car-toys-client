import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthProvider, { AuthContext } from "../Provider/AuthProvider";
import {
  getAuth,
  updateCurrentUser,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

const Register = () => {
  document.title="CarZone | register"
    const [error, setError] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const { createUser } = useContext(AuthContext);
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

    const handleRegister = (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const photo = event.target.photo.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
  
      if (!name || !photo || !email || !password) {
        return setError("All fields must requird")
      }
      else if (password.length < 6) {
        return setError("Password must be 6 charcter or more")
      }
      else {
        createUser(name, email, password)
          .then((result) => {
            const createdUser = result.user;
            updateProfile(createdUser, {
              displayName: name,
              photoURL: photo,
            });
            console.log(createdUser);
          })
          .catch((error) => {
            console.log(error);
          });
        nevigate("/login");
      }
  
  
    };
    return (
    <div className="">
       <div className="text-center">
       <p className="py-5 text-red-500" id="messageDiv">{error}</p>
       </div>

        <div className="py-10 flex justify-center items-center text-center">
      <form className="w-[80%] md:w-[50%] mx-auto " onSubmit={handleRegister}>
      <input type="text" name="name" placeholder="Entar Name" className="mb-5 input input-bordered w-full max-w-xs" />
      <br />
      <input type="text" name="photo" placeholder="Entar Photo URL" className="mb-5 input input-bordered w-full max-w-xs" />
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
    </div>
    );
};

export default Register;