import React, { useState, useEffect } from 'react'
import Img9 from '../assets/Img9.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Signup = () => {
    // this object collects user information
    const [value, setValue] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })

    const handleInput = () => {
        const name = e.target.name;
        const value = e.target.value;

        setValue(prev => {
            return{...prev, [name]: value}
        })
    }

    const handleSubmit = () => {
        e.preventDefault();
        
    }

    //  this hook initializes the animate on scroll library
    useEffect(() => {
        AOS.init();
    },[])

    return(
        <div className='bg-white min-h-full'>
            <section className='sm:h-full md:h-full flex flex-row justify-between h-screen mb-8 border-4 border-blue rounded-2xl'>
            <img src={Img9} alt="" className='sm:hidden object-cover w-1/2 rounded'/>
            <div className='sm:w-full bg-blue w-1/2 p-12'>
                <h1 className='text-white text-center text-lg mb-4 font-bold'>Create your account</h1>
                <form onClick={handleSubmit} className='flex flex-col gap-4'>
                    <label htmlFor="" className='text-white'>Firstname:</label>
                    <input type="text" placeholder='Firstname' name='firstname' onClick={handleInput} className='text-gray p-2' data-aos='fade-up'/>
                    <label htmlFor="" className='text-white'>Lastname:</label>
                    <input type="text" placeholder='Lastname' name='lastname' onClick={handleInput} className='text-gray p-2' data-aos='fade-up'/>
                    <label htmlFor="" className='text-white'>Email:</label>
                    <input type="text" placeholder='Email' name='email' onClick={handleInput} className='text-gray p-2' data-aos='fade-up'/>
                    <label htmlFor="" className='text-white'>Password:</label>
                    <input type="text" placeholder='Password' name='password' onClick={handleInput} className='text-gray p-2 mb-4' data-aos='fade-up'/>
                    <button type='submit' className='bg-white text-blue w-1/2 self-center rounded outline outline-offset-4 outline-1 outline-white py-1'>Create User</button>
                </form>
            </div>
            </section>
        </div>
    )
}

export default Signup;