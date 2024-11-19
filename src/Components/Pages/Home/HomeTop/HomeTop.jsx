import moment from 'moment';
import React from 'react';
import Marquee from 'react-fast-marquee';

const HomeTop = () => {
    return (
        <div className='mt-6 text-center'>
           <h3 className='font-medium text-xl'>{moment().format("dddd, MMMM D, YYYY")}</h3>
           {/* <h3 className='font-medium text-xl'>{moment().format(" MM/ D/ YYYY")}</h3> */}
           <div className='flex items-center gap-6 font-bold'>
            <button className=' bg-red-500 px-6 py-3 text-white  text-xl'>Latest</button>
            <Marquee speed={200} pauseOnHover={true}>
            <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </Marquee>
           
           </div>
        </div>
    );
};

export default HomeTop;