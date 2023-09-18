import React, {useEffect} from 'react';
import Car1 from '../assets/Car1.jpg';
import Car2 from '../assets/Car2.jpg';
import Car3 from '../assets/Car3.jpg';
import Img2 from '../assets/Img2.jpg';
import Img4 from '../assets/Img4.jpg';
import Img10 from '../assets/Img10.jpg';
import BizLady from '../assets/BizLady.png';
import Dollar from '../assets/Dollar.png';
import Mobile from '../assets/Mobile.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {

    // This hook initializes the animate on scroll library
    useEffect(() => {
        AOS.init();
    },[])

    return(
        <div className='bg-white min-h-screen'>
            <main>
                {/* section 1 */}
                <section className='bg-blue flex flex flex-col p-8'>
                    <h1 className='text-white font-bold text-center text-xl mb-12'>Automobile Insurance</h1>
                    <div className='sm:flex-col sm:gap-8 m flex flex-row justify-evenly'>
                        <div className='flex flex-col p-8 gap-4'>
                            <div className='md:w-40 md:h-40 rounded-full overflow-hidden w-52 h-52 self-center mb-4 outline outline-offset-4 outline-white' data-aos="flip-left">
                                <img src={Car1} alt="" className='w-52 h-52 object-cover'/>
                            </div>
                            <span className='text-white text-center'>Third Party Motor $5,000 Minimum</span>
                            <button className='bg-white rounded py-1 text-blue text-center w-40 self-center'>Requirement</button>
                            <button className='bg-white py-1 w-24 self-center rounded text-blue'>Buy Now</button>
                            <button className='bg-white py-1 px-3 self-center rounded text-blue'>Request for Quote</button>
                        </div>
                        <div className='flex flex-col p-8 gap-4'>
                            <div className='md:w-40 md:h-40 rounded-full overflow-hidden w-52 h-52 self-center mb-4 outline outline-offset-4 outline-white' data-aos="flip-left">
                                <img src={Car2} alt="" className='w-52 h-52 object-cover'/>
                            </div>
                            <span className='text-white text-center'>Comprehensive Motor 5% of vehicle cost [for private vehicles only. Get Quote for other vehicles]</span>
                            <button className='bg-white rounded py-1 text-blue text-center w-40 self-center'>Requirement</button>
                            <button className='bg-white py-1 w-24 self-center rounded text-blue'>Buy Now</button>
                            <button className='bg-white py-1 px-3 self-center rounded text-blue'>Request for Quote</button>
                        </div>
                        <div className='flex flex-col p-8 gap-4'>
                            <div className='md:w-40 md:h-40 rounded-full overflow-hidden w-52 h-52 self-center mb-4 outline outline-offset-4 outline-white' data-aos='flip-left'>
                                <img src={Car3} alt="" className='w-52 h-52 object-cover'/>
                            </div>
                            <span className='text-white text-center'>Third Party Motor $5,000 Minimum</span>
                            <button className='bg-white rounded py-1 text-blue text-center w-40 self-center' >Requirement</button>
                            <button className='bg-white py-1 w-24 self-center rounded text-blue'>Buy Now</button>
                            <button className='bg-white py-1 px-3 self-center rounded text-blue'>Request for Quote</button>
                        </div>
                    </div>
                </section>
                {/* section 2 */}
                <section className='flex flex flex-col p-8'>
                    <h1 className='text-blue font-bold text-center text-xl mb-12'>House Insurance</h1>
                    <div className='sm:flex-col sm:gap-20 flex flex-row justify-evenly'>
                    <div className='flex flex-col gap-3 mx-12'>
                        <div className='md:w-40 md:h-40 rounded-full overflow-hidden w-52 h-52 outline outline-offset-2 outine-blue self-center mb-8' data-aos='flip-right'>
                            <img src={Img2} alt="" className='w-52 h-52 object-cover'/>
                        </div>
                        <span className='text-gray text-center'>Third Party Home $5,000 Minimum</span>
                        <button className='bg-blue text-white rounded py-1 w-40 self-center' data-aos='fade-up'>Requirement</button>
                        <button className='bg-blue text-white rounded py-1 w-24 self-center' data-aos='fade-up'>Buy Now</button>
                        <button className='bg-blue py-1 px-3 self-center rounded text-white' data-aos='fade-up'>Request for Quote</button>
                    </div>
                    <div className='flex flex-col gap-3 mx-12'>
                        <div className='md:w-40 md:h-40 rounded-full overflow-hidden w-52 h-52 outline outline-offset-2 outine-blue self-center mb-8' data-aos='flip-right'>
                            <img src={Img4} alt="" className='w-52 h-52 object-cover'/>
                        </div>
                        <span className='text-gray text-center'>Comprehensive House 5% of private cost [for personal homes only. Get Quote for other houses]</span>
                        <button className='bg-blue text-white rounded py-1 w-40 self-center' data-aos='fade-up'>Requirement</button>
                        <button className='bg-blue text-white rounded py-1 w-24 self-center' data-aos='fade-up'>Buy Now</button>
                        <button className='bg-blue py-1 px-3 self-center rounded text-white' data-aos='fade-up'>Request for Quote</button>
                    </div>
                    <div className='flex flex-col gap-3 mx-12'>
                        <div className='md:w-40 md:h-40 rounded-full overflow-hidden w-52 h-52 outline outline-offset-2 outine-blue self-center mb-8' data-aos='flip-right'>
                            <img src={Img10} alt="" className='w-52 h-52 object-cover'/>
                        </div>
                        <span className='text-gray text-center'>Third Party Home $5,000 Minimum</span>
                        <button className='bg-blue text-white rounded py-1 w-40 self-center' data-aos='fade-up'>Requirement</button>
                        <button className='bg-blue text-white rounded py-1 w-24 self-center' data-aos='fade-up'>Buy Now</button>
                        <button className='bg-blue py-1 px-3 self-center rounded text-white' data-aos='fade-up'>Request for Quote</button>
                    </div>
                    </div>
                </section>
                {/* section 3*/}
                <section className='sm:flex-col sm:gap-20 bg-blue my-24 rounded-3xl p-24 flex flex-row justify-evenly'>
                    <div className='md:py-8 md:px-8 bg-white pb-44 px-4 rounded-xl border-green-700 border-4 flex flex-col gap-12' data-aos="zoom-in">
                        <div className='rounded-full bg-green-50 overflow-hidden p-2 self-center w-32 h-32 mt-4'>
                            <img src={BizLady} alt="" className='h-24 w-24 object-cover'/>
                        </div>
                        <span className='text-center text-gray'>Simple and Affordable Plans</span>
                        <button className='bg-blue text-white p-1 rounded w-32 self-center'>Get Now</button>
                    </div>
                    <div className='md:py-8 md:px-8 bg-white pb-44 px-4 rounded-xl border-green-700 border-4 flex flex-col gap-12' data-aos="zoom-in">
                        <div className='rounded-full bg-green-50 overflow-hidden p-2 self-center w-32 h-32 mt-4'>
                            <img src={Mobile} alt="" className='h-24 w-24 object-cover'/>
                        </div>
                        <span className='text-gray'>Quote in 5 minutes claims in 24 hours</span>
                        <button className='bg-blue text-white p-1 w-32 rounded self-center'>Get Now</button>
                    </div>
                    <div className='md:py-8 md:px-8 bg-white pb-44 px-4 rounded-xl border-green-700 border-4 flex flex-col gap-12' data-aos="zoom-in">
                        <div className='rounded-full bg-green-50 overflow-hidden p-2 self-center w-32 h-32 mt-4'>
                            <img src={Dollar} alt="" className='h-32 w-32 object-cover'/>
                        </div>
                        <span className='text-gray'>Get Access to Rewards</span>
                        <button className='bg-blue text-white p-1 w-32 rounded self-center'>Get Now</button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Services;