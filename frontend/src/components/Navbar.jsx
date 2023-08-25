import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {
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
            navigate('/Login')
        )
    }
    
    return(
        <div className='flex flex-row justify-between p-4'>
            <div className='pl-8'>
                <h1 className='text-xl text-blue font-extrabold'><NavLink to="/">Kresti Insurance Agency LLC</NavLink></h1>
            </div>
            <div className='pr-8'>
                <ul className='flex space-x-16 text-color-gray text-lg'>
                    <li><NavLink to="/" style={activeBtn}>Homepage</NavLink></li>
                    <li><NavLink to="services" style={activeBtn}>Services</NavLink></li>
                </ul>
            </div>
            <div className='flex space-x-12 pr-8 text-lg'>
                <button className='bg-blue text-white py-0.5 px-6 rounded' onClick={loginBtn}>Login</button>
                <span className='text-gray'><NavLink to="signup" style={activeBtn}>Sign Up</NavLink></span>
            </div>
        </div>
    )
}

export default NavBar;