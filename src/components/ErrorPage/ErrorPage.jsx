import React from 'react';
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    const btnHandler = () =>{
        navigate(-1);
    }
    return (
        <div className='container d-flex justify-content-center align-items-center flex-column'>
            <h1 className='text-primary fw-bold fs-1 mt-5 pt-5'>404</h1>
            <h2>Oops!!! Page not found.</h2>
             <p className='text-secondary'>Please try again</p>
             <button className='btn btn-primary' onClick={()=>btnHandler()}>Go Back</button>
            
        </div>
    );
};

export default ErrorPage;