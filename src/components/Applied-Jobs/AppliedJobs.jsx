import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJobItem from '../AppliedJobItem/AppliedJobItem';

import TitleBanner from '../TitleBanner/TitleBanner';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const AppliedJobs = () => {
    const appliedJobs = useLoaderData();
    const [aJob, setAjob] = useState(appliedJobs);

    const showRemote = () => {
        const remoteJobs = appliedJobs.filter(job => job.remoteOnsite === 'Remote' || job.remoteOnsite === 'Hybrid');
        setAjob(remoteJobs);
    }
    const showOnsite = () => {
        const onsiteJobs = appliedJobs.filter(job => job.remoteOnsite === 'Onsite' || job.remoteOnsite === 'Hybrid');
        setAjob(onsiteJobs);
    }
    const showAll = () => {

        setAjob(appliedJobs);
    }

    return (
        <div >
            <TitleBanner>Applied Jobs</TitleBanner>
            <div className='container w-75 pt-5'>
                <div className='text-end me-5 pe-5 mt-4'>
                    <DropdownButton align="end" variant="secondary" id="dropdown-item-button" title="Filter By">
                        <Dropdown.Item as="button" onClick={() => showRemote()}>Show Remote jobs</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => showOnsite()}>Show Onsite jobs</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => showAll()}>Show All </Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className='my-3 px-5'>
                    {
                        aJob.map(job => <AppliedJobItem
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