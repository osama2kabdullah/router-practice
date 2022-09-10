import React from 'react';
import SideLinks from './SideLinks';

const DataChart = () => {
    return (
        <div style={{display: 'grid', gridTemplateColumns: '20% 80%'}} className='m-5'>
            <div className='flex flex-col'>
                <SideLinks to='/population'>Population</SideLinks>
                <SideLinks to='/area'>Area</SideLinks>
            </div>
            <div className='ml-10 bg-gray-100 p-8 h-screen' style={{position: 'sticky', top:0, }}>
                gello chart
            </div>
        </div>
    );
};

export default DataChart;