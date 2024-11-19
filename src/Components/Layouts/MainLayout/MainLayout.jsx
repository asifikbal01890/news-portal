import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='max-w-[1400px] mx-auto font-poppins'>
           <Outlet></Outlet> 
        </div>
    );
};

export default MainLayout;