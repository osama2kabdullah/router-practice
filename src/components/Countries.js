import React from 'react';
import { Outlet } from 'react-router-dom';
import useLoadData from '../hooks/useLoadData';
import SideLinks from './SideLinks';

const Countries = () => {
    const [datas, setDatas] = useLoadData('https://restcountries.com/v3.1/all');
    console.log(datas);
    return (
        <div style={{display: 'grid', gridTemplateColumns: '20% 80%'}} className='m-5'>
            <div className='flex flex-col'>
                {
                    datas.map(country=><SideLinks to={`/${country.ccn3}`}>{country.name.common}</SideLinks>)
                }
                
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Countries;