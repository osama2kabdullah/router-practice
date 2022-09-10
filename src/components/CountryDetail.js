import React from 'react';
import { useParams } from 'react-router-dom';
import useLoadData from '../hooks/useLoadData';

const CountryDetail = () => {
    const {countryDetails} = useParams();
    const [datas, setDatas] = useLoadData(`https://restcountries.com/v3.1/alpha/${countryDetails}`);
    
    console.log(datas[0]);
    
    return (
        <div>
            <h1 className='text-3xl'>{datas?.[0]?.name.common}</h1>
        </div>
    );
};

export default CountryDetail;