import React from 'react';
import './TitleBanner.css'
import bg1 from './../../assets/bg1.png'
import bg2 from './../../assets/bg2.png'


const TitleBanner = ({children}) => {
    return (
        <div className='bg-body-tertiary d-flex justify-content-between'>
            <img src={bg1} alt="" />
            <h4 className='fw-bold mt-5 pt-4 fs-4'>{children}</h4> 
            <img src={bg2} alt="" />  
        </div>
    );
};

export default TitleBanner;