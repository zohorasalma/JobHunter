import React, { useEffect, useState } from 'react';
import JobCatCard from '../JobCatCard/JobCatCard';

const JobCategoryList = () => {
    const [jobCats,setJobCats] = useState([]);
        useEffect(()=>{
            fetch('jobCategories.json')
            .then(res=>res.json())
            .then(data=>setJobCats(data));
        },[])
    return (
        

        <div className='container'>
            <h1 className='text-center mt-5 fw-bold'>Job Category List</h1>
            <p className='text-secondary text-center'>Different categories to find your true Potential and reach your dream destination.</p>
            <div className='d-flex justify-content-evenly mx-2 mt-4'>
            {
                jobCats.map(jobCat=><JobCatCard
                key={jobCat.id}
                jobCat={jobCat}>

                </JobCatCard>)
            }
            </div>

            
        </div>
    );
};

export default JobCategoryList;