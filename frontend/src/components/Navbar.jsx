import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavLinks = () => {
    const navigate = useNavigate();

    // this function changes the color of the active button
    const activeBtn = ({isActive}) => {
        return{
            color: isActive? "blue": "#38383b"
        }
    }

    // this function routes to the login page when the button is clicked
    const loginBtn = () => {
        return(
            navigate('/login-page')
        )
    }
    
    return(
        <div className='md:p-0 flex flex-row justify-between p-4'>
            <div className='sm:hidden md:hidden block pl-8'>
                <h1 className='text-xl text-blue font-extrabold'><NavLink to="/">Kresti Insurance Agency LLC</NavLink></h1>
            </div>
            <nav className='sm:flex sm:flex-col sm:gap-4 sm:justify-center md:flex-col md:pr-0 md:gap-4 md:w-screen flex flex-row pr-8'>
                <ul className='md:flex-col md:gap-8 md:self-center md:space-x-0 md:scale-50 md:text-4xl flex pr-8 space-x-16 text-color-gray text-lg'>
                    <li><NavLink to="/" style={activeBtn}>Homepage</NavLink></li>
                    <li><NavLink to="services" style={activeBtn}>Services</NavLink></li>
                    <li className='sm:block md:block hidden'><NavLink to="login-page" style={activeBtn}>Log in</NavLink></li>
                    <li className='sm:block md:block hidden'><NavLink to="signup-page" style={activeBtn}>Sign Up</NavLink></li>
                </ul>
                <div className='md:hidden flex space-x-12 text-lg'>
                    <button className='bg-blue text-white py-0.5 px-6 rounded' onClick={loginBtn}>Login</button>
                    <span className='text-gray'><NavLink to="signup-page" style={activeBtn}>Sign Up</NavLink></span>
                </div>
            </nav>
        </div>
    )
}

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // toggle navbar function
    const toggleBar = () => {
        setIsOpen(!isOpen)
    }

    return(
        <div>
            <div className='sm:hidden md:hidden'>
                <NavLinks/>
            </div>
            <div className='md:block md:text-xl md:p-8 md:flex md:flex-row md:justify-between hidden'> 
                <h1 className='sm:hidden  md:text-2xl md:text-blue md:font-extrabold '><NavLink to="/">Kresti Insurance Agency LLC</NavLink></h1>  
                <button onClick={toggleBar}>{isOpen ? <FaTimes className='text-red-700'/> : <FaBars className='text-blue'/>}</button>
            </div>
            {isOpen &&
            <NavLinks/>
            }
        </div>
    )
}

export default NavBar;