// import React from 'react';
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthProvider, { AuthContext } from "../../Provider/AuthProvider";
import {
  getAuth,
  updateCurrentUser,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

const Register = () => {
    return (
        <div>
            
        </div>
    );
};

export default Register;