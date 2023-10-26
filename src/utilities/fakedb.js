// use local storage to manage cart data
const addToDb = id => {
    let AppliedJobs = getAppliedJobs();
    // add status
    const status = AppliedJobs[id];
    if (!status) {
        AppliedJobs[id] = 1;
    }
    
    localStorage.setItem('applied-jobs', JSON.stringify(AppliedJobs));
}

const removeFromDb = id => {
    const AppliedJobs = getAppliedJobs();
    if (id in AppliedJobs) {
        delete AppliedJobs[id];
        localStorage.setItem('applied-jobs', JSON.stringify(AppliedJobs));
    }
}

const getAppliedJobs = () => {
    let AppliedJobs = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('applied-jobs');
    if (storedCart) {
        AppliedJobs = JSON.parse(storedCart);
    }
    return AppliedJobs;
}

const deleteAppliedJobs = () => {
    localStorage.removeItem('applied-jobs');
}

export {
    addToDb,
    removeFromDb,
    getAppliedJobs,
    deleteAppliedJobs
}
