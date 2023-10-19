import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-body-tertiary'>
            
             <section className='px-5 container navbar pt-4' >
                <h2 className='navbar-brand fs-2'>JobHunter</h2>
                <nav className='nav'>
                    <Link className='nav-link' to='/'>Home</Link>
                    <Link className='nav-link' to='/statistics'>Statistics</Link>
                    <Link className='nav-link' to='/applied-jobs'>Applied Jobs</Link>
                    <Link className='nav-link' to='/blog'>Blog</Link>
                </nav>
                <Button>Start Applying</Button>
            </section> 
            
        </div>
    );
};

export default Header;