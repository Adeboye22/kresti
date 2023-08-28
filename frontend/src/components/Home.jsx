import React from 'react';
import Carousel from './Carousel';
import SvgThumb from '../assets/SvgThumb.png';
import SvgCar from '../assets/SvgCar.png';
import SvgBadge from '../assets/SvgBadge.png';
import SvgStar from '../assets/SvgStar.png';
import Img10 from '../assets/Img10.jpg';
import Img3 from '../assets/Img3.jpg';
import Review1 from '../assets/Review1.jpg';
import Review2 from '../assets/Review2.jpg';
import Review3 from '../assets/Review3.jpg';
import Review4 from '../assets/Review4.jpg';
import { FaStar, FaPhone, FaWhatsapp } from 'react-icons/fa'

const Home = () => {
    // This function redirects users to place a call when the button is clicked
    const PhoneCall = () => {
        return(
            window.open("tel:+14695285630")
        )
    }
    
    // This function redirects users to the chat support on whatsapp
    const WhatsappChat = () => {
        return(
            window.open("https://wa.link/nf81hs")
        )
    }

    return(
        <div className='bg-blue min-h-screen'>
            <main>
                <section>
                    <div className='bg-gradient-to-l from-yellow-100 from-100% to-white  h-100 overflow-hidden relative'>
                        <div className='h-full absolute mix-blend-darken'>
                            <Carousel />
                        </div>
                    </div>
                </section>
                <section className='flex p-20 justify-between'>
                    <div className='flex flex-col'>
                        <img src={SvgBadge} alt="badge" className='h-8 w-8 bg-white rounded self-center'/>
                        <span className='pt-6 text-white text-lg'>Regulatory Compliance</span>
                    </div>
                    <div className='flex flex-col'>
                        <img src={SvgCar} alt="Car" className='h-8 w-8 bg-white rounded self-center' />
                        <span className='pt-6 text-white text-lg'>Integrated Company</span>
                    </div>
                    <div className='flex flex-col'>
                        <img src={SvgStar} alt="star" className='h-8 w-8 bg-white rounded self-center' />
                        <span className='pt-6 text-white text-lg'>Exceptional User Experience</span>
                    </div>
                    <div className='flex flex-col'>
                        <img src={SvgThumb} alt="thumb" className='h-8 w-8 bg-white rounded self-center' />
                        <span className='pt-6 text-white text-lg'>Affordable Insurance</span>
                    </div>
                </section>
                <section className='bg-white'>
                    <div className='flex flex-col p-8'>
                        <h1 className='text-center text-gray text-xl font-bold'>What would you like to insure?</h1>
                        <div className='flex flex-row justify-between px-16 pt-16'>
                            <div className='flex flex-col'>
                                <div className='rounded-full overflow-hidden outline outline-blue outline-offset-2 outline-2'>
                                    <img src={Img3} alt="" className='w-52 h-52 object-cover' />
                                </div>
                                <span className='text-center pt-8 text-gray text-lg'>Automobile</span>
                            </div>
                            <div className='flex flex-col'>
                                <div className='rounded-full overflow-hidden outline outline-blue outline-offset-2 outline-2'>
                                    <img src={Img10} alt="" className='w-52 h-52 object-cover' />
                                </div>
                                <span className='text-center pt-8 text-gray text-lg'>House</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='p-12 flex flex-row justify-evenly'>
                    <div className='bg-white rounded h-96 w-60 flex flex-col'>
                        <div className='rounded-full overflow-hidden h-40 w-40  self-center outline outline-blue outline-offset-2 outline-2 my-4'>
                            <img src={Review1} alt="" className='object-cover' />
                        </div>
                        <h3 className='text-center text-gray font-bold'>Mary Reeves</h3>
                        <span className='text-center text-black font-black mb-4'>"The insurance is very affordable"</span>
                        <h2 className='text-center text-gray font-bold text-sm'>Customer satisfaction ratings</h2>
                        <div className='flex self-center m-4'>
                            <FaStar className='text-yellow-700'/>
                            <FaStar className='text-yellow-700'/>
                            <FaStar className='text-yellow-700'/>
                            <FaStar className='text-yellow-700'/>
                            <FaStar className='text-blue'/>
                        </div>
                    </div>
                    <div className='bg-white rounded h-96 w-60 flex flex-col'>
                        <div className='rounded-full overflow-hidden h-40 w-40  self-center outline outline-blue outline-offset-2 outline-2 my-4'>
                            <img src={Review2} alt="" className='object-cover' />
                        </div>
                        <h3 className='text-center text-gray font-bold'>White Cryer</h3>
                        <span className='text-center text-black font-black mb-4 px-4'>"This insurance is reliable"</span>
                        <h2 className='text-center text-gray font-bold text-sm'>Customer satisfaction ratings</h2>
                        <div className='flex self-center m-4'>
                            <FaStar className='text-yellow-700'/>
                            <FaStar className='text-yellow-700'/>
                            <FaStar className='text-yellow-700'/>
                            <FaStar className='text-yellow-700'/>
                            <FaStar className='text-blue'/>
                        </div>
                    </div>
                    <div className='bg-white rounded h-96 w-60 flex flex-col'>
                        <div className='rounded-full overflow-hidden h-40 w-40  self-center outline outline-blue outline-offset-2 outline-2 my-4'>
                            <img src={Review3} alt="" className='object-cover' />
                        </div>
                        <h3 className='text-center text-gray font-bold'>Veronica Harrington</h3>
                        <span className='text-center text-black font-black mb-4 px-4'>"There customer service is top notch"</span>
                        <h2 className='text-center text-gray font-bold text-sm'>Customer satisfaction ratings</h2>
                        <div className='flex self-center m-4'>
                            <FaStar className='text-yellow-700'/>
                            <FaStar className='text-yellow-700'/>
                            <FaStar className='text-yellow-700'/>
                            <FaStar className='text-yellow-700'/>
                            <FaStar className='text-yellow-700'/>
                        </div>
                    </div>
                    <div className='bg-white rounded h-96 w-60 flex flex-col'>
                        <div className='rounded-full overflow-hidden h-40 w-40  self-center outline outline-blue outline-offset-2 outline-2 my-4'>
                            <img src={Review4} alt="" className='object-contain' />
                        </div>
                        <h3 className='text-center text-gray font-bold'>Benny Young</h3>
                        <span className='text-center text-black font-black mb-4 px-4'>"This insurance is safe and secured"</span>
                        <h2 className='text-center text-gray font-bold text-sm'>Customer satisfaction ratings</h2>
                        <div className='flex self-center m-4'>
                            <FaStar className='text-yellow-700'/>
                            <FaStar className='text-yellow-700'/>
                            <FaStar className='text-yellow-700'/>
                            <FaStar className='text-blue'/>
                            <FaStar className='text-blue'/>
                        </div>
                    </div>
                </section>
                <section className='bg-white p-12 flex flex-row justify-evenly'>
                    <div className='flex flex-col gap-8'>
                        <h2 className='text-lg font-bold text-gray text-center'>Customer Care</h2>
                        <span className='text-gray text-center'>Available from Monday- Friday: 7am-7pm</span>
                        <div className='flex flex-row bg-blue rounded p-2 justify-center'>
                            <button className='bg-white rounded p-1 mr-4' onClick={PhoneCall}><FaPhone className='text-blue'/></button>
                            <span className='text-white'>Click to Call</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <h2 className='text-lg font-bold text-gray text-center'>Chat Support</h2>
                        <span className='text-gray text-center'>Available from Monday- Friday: 7am-7pm</span>
                        <div className='flex flex-row bg-blue rounded p-2 justify-center'>
                            <button className='bg-white rounded p-1 mr-4' onClick={WhatsappChat}><FaWhatsapp className='text-green-700'/></button>
                            <span className='text-white'>Click to Call</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <h2 className='text-lg font-bold text-gray text-center'>Email Us</h2>
                        <span className='text-gray text-center'>send us an email <em>info@krestiinsuranceagency.com</em></span>
                        <div className='flex flex-row bg-blue rounded p-2 justify-center'>
                            <button className='bg-white rounded p-1 mr-4' onClick={Email}><FaPhone className='text-blue'/></button>
                            <span className='text-white'>Click to Call</span>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home;