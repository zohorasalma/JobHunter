import React, { useEffect, useState } from 'react';
import JobPost from '../JobPost/JobPost';
import './FeaturedJobs.css'

const FeaturedJobs = () => {
    const [jobposts,setJobposts] = useState([]);
    useEffect(()=>{
        fetch('jobPosts.json')
        .then(res=>res.json())
        .then(data=>setJobposts(data))
    },[])
    return (
        <div className='container'>
            <h1 className='text-center mt-5 fw-bold'>Featured Jobs</h1>
            <p className='text-secondary text-center'>Choose your dream job from our place and apply now</p>
            <div className=' job-post-container mx-5 mt-4'>
            {
                jobposts.map(jobpost=><JobPost
                key={jobpost.id}
                jobPost={jobpost}
                ></JobPost>)
                
            }
            </div>
            <div className='d-flex align-items-center justify-content-center'>
            <button className='btn btn-primary mt-4'>See All Jobs</button>
            </div>
            
        </div>
    );
};

export default FeaturedJobs;