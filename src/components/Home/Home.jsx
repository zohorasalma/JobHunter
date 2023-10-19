import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import JobCategoryList from '../JobCategoryList/JobCategoryList';

const Home = () => {
    return (
   
        <div>
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>

        </div>
    );
};

export default Home;