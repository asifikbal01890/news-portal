import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import HomeLeftNav from './HomeLeftNav';

const HomeLeft = () => {
    const [navData, setNavData] = useState()
    useEffect(() => {
        fetch('/data/categories.json')
            .then(res => res.json())
            .then(data => setNavData(data))
    }, [])
    console.log(navData);

    return (
        <div>
            <div className='flex flex-col gap-6'>
                {
                    navData?.map(data => <HomeLeftNav data={data} key={data.id}></HomeLeftNav>)
                }


            </div>
        </div>
    );
};

export default HomeLeft;