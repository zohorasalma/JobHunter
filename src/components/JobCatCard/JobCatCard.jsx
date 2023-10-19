import React from 'react';
import './JobCatCard.css'

const JobCatCard = ({jobCat}) => {
    const {icon,name,jobsAvailable}= jobCat;
        return (
        <div className='cat-card bg-body-tertiary p-4'>
            <img className='bg-body-secondary mb-4'src={icon} alt="" />
            <h5>{name}</h5>
            <p className='text-secondary'>{jobsAvailable}+ jobs available</p>
            
            
        </div>
    );
};

export default JobCatCard;