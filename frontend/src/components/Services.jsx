import React from 'react';
import Car1 from '../assets/Car1.jpg';
import Car2 from '../assets/Car2.jpg';
import Car3 from '../assets/Car3.jpg';

const Services = () => {
    return(
        <div className='bg-white min-h-screen'>
            <main>
                <section className='bg-blue flex flex flex-col p-12'>
                    <h1 className='text-white font-bold text-center mb-12'>Automobile Insurance</h1>
                    <div className='flex flex-row justify-evenly'>
                        <div className='flex flex-col p-8'>
                            <div className='rounded-full overflow-hidden w-52 h-52 self-center'>
                                <img src={Car1} alt="" className='w-52 h-52 object-cover'/>
                            </div>
                            <span className='text-white text-center'>Third Party Motor $5,000 Minimum</span>
                            <button className='text-white text-center'>Requirement</button>
                            <button>Buy Now</button>
                            <button>Requestment for Quote</button>
                        </div>
                        <div className='flex flex-col p-8'>
                            <div className='rounded-full overflow-hidden bg-white h-52 w-52 self-center'>
                                <img src={Car2} alt="" className='w-52 h-52 object-cover'/>
                            </div>
                            <span>Comprehensive Motor 5% of vehicle cost [for private vehicles only. Get Quote for other vehicles]</span>
                            <button>Requirement</button>
                            <button>Buy Now</button>
                            <button>Request for Quote</button>
                        </div>
                        <div className='flex flex-col p-8'>
                            <div className='rounded-full overflow-hidden bg-white h-52 w-52 self-center'>
                                <img src={Car3} alt="" className='w-52 h-52 object-cover'/>
                            </div>
                            <span>Third Party Motor $5,000 Minimum</span>
                            <button>Requirement</button>
                            <button>Buy Now</button>
                            <button>Request for Quote</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Services;