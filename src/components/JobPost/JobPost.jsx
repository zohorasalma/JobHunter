import React from 'react';
import './JobPost.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { faDollar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const JobPost = ({ jobPost }) => {
    const { id, title, logo, company, location, remoteOnsite, type, salary } = jobPost
    return (
        <div className='job-post border border-secondary-subtle border-2 rounded p-5'>
            <img src={logo} alt="" />
            <h4 className='fw-bold'>{title}</h4>
            <p className='fs-5 text-secondary'>{company}</p>
            <p className='d-flex flex-column flex-md-row row-gap-2'><span className='border border-info border-2 rounded text-info px-3 py-1 me-2 text-center '>{remoteOnsite}</span> <span className='border border-info border-2 rounded text-info px-3 py-1 me-2 text-center'>{type}</span></p>
            <p className='text-secondary fs-6'><span className='me-3'>
                <FontAwesomeIcon icon={faLocationPin} className='text-secondary me-2' />
                {location}
            </span>
                <span >
                    <FontAwesomeIcon icon={faDollar} className='text-secondary me-2' />
                    Salary : {salary}</span></p>
            <Link to={`/jobDetails/${id}`}>
                <button className='btn btn-primary'>View Details</button></Link>
        </div>
    );
};

export default JobPost;