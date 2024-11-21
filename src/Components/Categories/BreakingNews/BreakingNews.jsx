import React from 'react';
import { useParams } from 'react-router-dom';

const BreakingNews = () => {
    const param = useParams()
    console.log(param);
    
    return (
        <div>
            BreakingNews
            BreakingNews
        </div>
    );
};

export default BreakingNews;