import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDeep = () => {
    const {subdetails} = useParams();
    
    return (
        <div>
            <h1 className='text-3xl'>{subdetails}</h1>
        </div>
    );
};

export default CountryDeep;