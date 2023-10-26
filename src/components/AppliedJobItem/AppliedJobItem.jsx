import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { faDollar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './AppliedJobItem.css';

const AppliedJobItem = ({ job }) => {
    const { logo, id, title, company, location, salary, type, remoteOnsite } = job;
    return (
        <div className='mb-3 px-5'>
            <div className='d-flex border border-1 rounded p-3 align-items-center '>
                <div className='bg-body-tertiary rounded logo-container'>
                    <img className='logo' src={logo} alt="" />
                </div>
                <div className='ms-4 flex-grow-1'>
                    <h4 className='fw-bold'>{title}</h4>
                    <p className='fs-5 text-secondary'>{company}</p>
                    <p><span className='border border-info border-2 rounded text-info px-3 py-1 me-2'>{remoteOnsite}</span> <span className='border border-info border-2 rounded text-info px-3 py-1 me-2'>{type}</span></p>
                    <p className='text-secondary fs-6'><span className='me-3'>
                        <FontAwesomeIcon icon={faLocationPin} className='text-secondary me-2' />
                        {location}
                    </span>
                        <span >
                            <FontAwesomeIcon icon={faDollar} className='text-secondary me-2' />
                            Salary : {salary}</span></p>



                </div>
                <Link to={`/jobDetails/${id}`}>
                    <button className='btn btn-primary me-3'>View Details</button></Link>

            </div>
        </div>
    );
};

export default AppliedJobItem;