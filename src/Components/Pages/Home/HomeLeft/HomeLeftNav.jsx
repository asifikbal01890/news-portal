import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeLeftNav = ({ data }) => {
    return (
        <NavLink
            to={`/${data.route}`}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-slate-300 px-6 py-3 text-xl" : "px-6 py-3 text-xl"
            }
        >
            {data.name}
        </NavLink>
    );
};

export default HomeLeftNav;