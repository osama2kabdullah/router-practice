import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';

const SubHeader = () => {
    return (
        <nav className='flex gap-4 pt-2 pb-2 justify-start'>
            <Link to='/countryDetails/osama'>Osama</Link>
        </nav>
    );
};

export default SubHeader;