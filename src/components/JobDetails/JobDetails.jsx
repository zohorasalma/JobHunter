import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faDollar } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import TitleBanner from '../TitleBanner/TitleBanner';
import { addToDb } from '../../utilities/fakedb';

const JobDetails = () => {
    const jobPost = useLoaderData();
    const { id, responsibility, description, educationalRequirements, experience, salary, title, phone, email, address } = jobPost;
    const handleApply = (id) =>{
        addToDb(id)
    }
    return (
        <div>
            <TitleBanner>Job Details</TitleBanner>
            <Container className='mt-5 pt-5'>
            <Row>
                <Col sm={8}>
                    <div>
                        <p><span className='fw-bold'>Job Description:</span>
                            <span className='text-secondary'> {description}</span></p>
                        <p><span className='fw-bold'>Job Responsibility:</span>
                            <span className='text-secondary'> {responsibility}</span></p>
                        <p className='fw-bold'>Educational Requirements:</p>
                        <p className='text-secondary'>{educationalRequirements}</p>
                        <p className='fw-bold'>Experiences:</p>
                        <p className='text-secondary'>{experience}</p>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className='fs-5 bg-body-secondary p-4 rounded'>
                        <p className='fw-bold'>Job Details</p>
                        <hr className='text-info' />
                        <p className='text-secondary'> 
                            <FontAwesomeIcon icon={faDollar} className='text-primary me-1' />
                            <span className='fw-bold'> Salary: </span>
                            <span>{salary} (Per Month)</span>
                        </p>
                        <p className='text-secondary'>
                            <FontAwesomeIcon icon={faBriefcase} className='text-primary me-1' />
                            <span className='fw-bold'> Job Title: </span>
                            <span>{title}</span>
                        </p>
                        <p className='fw-bold'>Contact Information</p>
                        <hr className='text-info' />
                        <p className='text-secondary'>
                            <FontAwesomeIcon icon={faPhone} className='text-primary me-1' />
                            <span className='fw-bold'>  Phone: </span>
                            <span>{phone}</span>
                        </p>
                        <p className='text-secondary'>
                            <FontAwesomeIcon icon={faEnvelope} className='text-primary me-1' />
                            <span className='fw-bold'>  Email: </span>
                            <span>{email}</span>
                        </p>
                        <p className='text-secondary'>
                            <FontAwesomeIcon icon={faLocationDot} className='text-primary me-1' />
                            <span className='fw-bold'>  Address: </span>
                            <span>{address}</span>
                        </p>
                        
                    </div>
                    <button className='btn btn-primary w-100 fw-bold py-3 mt-4'
                    onClick={()=>handleApply(id)}>Apply Now</button>
                </Col>
            </Row>
        </Container>
        </div>
        // <div className='container'>

        //     <div>

        //     </div>


        // </div>
    );
};

export default JobDetails;