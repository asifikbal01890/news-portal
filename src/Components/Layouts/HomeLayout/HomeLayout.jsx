import React, { useContext } from 'react';
import HomeTop from '../../Pages/Home/HomeTop/HomeTop';
import TopNav from '../../Shared/TopNav/TopNav';
import HomeLeft from '../../Pages/Home/HomeLeft/HomeLeft';
import { Outlet } from 'react-router-dom';
import HomeRight from '../../Pages/Home/HomeRight/HomeRight';
import HomeMiddle from '../../Pages/Home/HomeMiddle/HomeMiddle';
import { AuthContext } from '../../Context/Provider';

const HomeLayout = () => {
    const user = useContext(AuthContext)
    console.log(user);
    
    return (
        <div>
            <HomeTop></HomeTop>
            <TopNav></TopNav>
            <div className='flex items-center justify-between gap-6'>
                <div className='w-[267px]'>
                    <HomeLeft></HomeLeft>
                </div>
                <Outlet></Outlet>
                <div className='w-[267px]'>
                    <HomeRight></HomeRight>
                </div>
            </div>

        </div>
    );
};

export default HomeLayout;