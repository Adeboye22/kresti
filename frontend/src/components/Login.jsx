import React,{ useState, useEffect } from 'react'
import Padlock from '../assets/Img11.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = () => {
    useEffect(() => {
        AOS.init();
    })
    return(
        <div className='bg-white min-h-full'>
            <section className='flex flex-row '>
                <div className='sm:hidden md:min-h-full w-6/12 flex px-32 bg-blue min-h-screen'>
                <img src={Padlock} alt="" className='self-center rounded-lg border-2 border-white '/>
                </div>
                <div className='sm:w-full sm:mr-0  mr-8 w-6/12 py-32'>
                    <form action="" className='flex flex-col mx-12'>
                        <h1 className='text-blue text-3xl text-center mb-8'>Let's Get Started</h1>
                        <label htmlFor="" className='text-gray '>User Email:</label>
                        <input type="email" name="email" placeholder='Email Address' className='w-full border-2 border-blue p-2 rounded my-4' id="" data-aos='flip-right' data-aos-duration='1000'/>
                        <label htmlFor="">Password:</label>
                        <input type="password" name="password" placeholder='password' className='w-full border-2 border-blue p-2 rounded my-4' data-aos='flip-left' data-aos-duration='1000' />
                    <   button className='text-white bg-blue py-2 px-8 rounded self-center'>Login</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Login;