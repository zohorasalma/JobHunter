import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJobItem from '../AppliedJobItem/AppliedJobItem';

import TitleBanner from '../TitleBanner/TitleBanner';

const AppliedJobs = () => {
    const appliedJobs = useLoaderData();

    return (
        <div >
            <TitleBanner>Applied Jobs</TitleBanner>
            <div className='container w-75 pt-5'>
                <div className='my-5 px-5'>
                    {
                        appliedJobs.map(job => <AppliedJobItem
                            key={job.id}
                            job={job}
                        ></AppliedJobItem>)

                    }
                </div>
            </div>



        </div>
    );
};

export default AppliedJobs;