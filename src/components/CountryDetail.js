import React, { createContext } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import useLoadData from '../hooks/useLoadData';
import SubHeader from './SubHeader';

export const DataContext = createContext('hello')

const CountryDetail = () => {
    const {countryDetails} = useParams();
    const [datas, setDatas] = useLoadData(`https://restcountries.com/v3.1/alpha/${countryDetails}`);
    
    console.log(datas[0]);
    
    return (
        <div>
            <SubHeader data={datas}></SubHeader>
            <h1 className='text-3xl'>{datas?.[0]?.name.common}</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default CountryDetail;