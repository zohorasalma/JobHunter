import { getAppliedJobs } from "../utilities/fakedb"

const getAppliedJobsFromDb = async()=>{
    const LoadedJobs = await fetch('jobPosts.json');
    const jobs = await LoadedJobs.json();

    const appliedJobsDb = getAppliedJobs();
    console.log(appliedJobsDb);
    let appliedJobs = [];

    for(const id in appliedJobsDb){
        const addedJob = jobs.find(job => job.id == id);
        if(addedJob){
            appliedJobs.push(addedJob);
        }

    }
    return appliedJobs;

}
export default getAppliedJobsFromDb;