const getJobDetails = async(id)=>{
    const loadedJobPosts = await fetch('jobPosts.json');
    const jobPosts = await loadedJobPosts.json();
    console.log(id);

    const exists = jobPosts.find(jobPost => jobPost.id == id);
    if(exists)
    {
        return exists;
    }
    else return null;
}
export default getJobDetails;
