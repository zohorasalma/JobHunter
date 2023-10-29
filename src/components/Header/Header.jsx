import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-body-tertiary'>
            
             <section className=' container navbar pt-4 d-md-flex flex-sm-column flex-md-row align-items-sm-center justify-content-center justify-content-lg-around ' >
                <h2 className='navbar-brand fs-2'>JobHunter</h2>
                <nav className='nav'>
                    <Link className='nav-link' to='/'>Home</Link>
                    <Link className='nav-link' to='/statistics'>Statistics</Link>
                    <Link className='nav-link' to='/applied-jobs'>Applied Jobs</Link>
                    <Link className='nav-link' to='/blog'>Blog</Link>
                </nav>
                <Button className='mt-2'>Start Applying</Button>
            </section> 
            
        </div>
    );
};

export default Header;