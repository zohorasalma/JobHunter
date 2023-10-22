import React from 'react';
import { Button } from 'react-bootstrap';
import deskPhoto from '../../assets/wepik-export-20231018180725EwON.png'

const Banner = () => {
    return (
        <div>
            <div className='bg-body-tertiary'>
                <div className='container d-flex  justify-content-between align-items-center p-5'>
                    <div className='w-50 m-5'>
                        <h1 id='tagline-text'>Reach Your <span className='text-primary'>True Potential</span></h1>
                        <p className='text-secondary' >With a database of millions of jobs, a variety of tools and resources, and a team of experts dedicated to helping you succeed, job-hunter is the perfect partner for your job search.

                        </p>
                        <Button>Get Started</Button>

                    </div>
                    <div className='w-50'>
                        <img id='deskPhoto' src={deskPhoto} className='img-fluid' alt=""></img>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;