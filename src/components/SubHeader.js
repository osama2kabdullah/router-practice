import React from 'react';
import SideLinks from './SideLinks';

const SubHeader = ({data}) => {
    
    return (
        <nav className='flex pt-2 pb-2 justify-start'>
            <SideLinks to={data?.[0]?.ccn3}>basic</SideLinks>
            <SideLinks to={data?.[0]?.ccn3}>Population</SideLinks>
            <SideLinks to={data?.[0]?.ccn3}>Map</SideLinks>
            <SideLinks to={data?.[0]?.ccn3}>Flag</SideLinks>
        </nav>
    );
};

export default SubHeader;