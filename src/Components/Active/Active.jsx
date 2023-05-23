import React from 'react';
import { NavLink } from 'react-router-dom';

const Active = ({}) => {

    return (
        <div>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")}></NavLink>
        </div>
    );
};

export default Active;
