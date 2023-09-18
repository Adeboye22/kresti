import React, {useEffect} from 'react';
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
import { FaStar, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


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
    
    // This hook initiallizes the animate on scroll library
    useEffect(() => {
        AOS.init();
    }, []);

    return(
        <div className='bg-blue min-h-screen'>
            <main>
                {/* section 1 */}
                <section>
                    <div className='bg-gradient-to-l from-yellow-100 from-100% to-white  h-100 overflow-hidden relative'>
                        <div className='h-full absolute mix-blend-darken'>
                            <Carousel />
                        </div>
                    </div>
                </section>
                {/* section 2 */}
                <section className='sm:flex-row sm:gap-4 p-20 sm:p-10 flex flex-row justify-between'>
                    <div className='flex flex-col'>
                        <img src={SvgBadge} alt="badge" className='h-8 w-8 sm:w-8 bg-white rounded self-center'/>
                        <span className='sm:text-sm md:text-center pt-6 text-white text-lg'>Regulatory Compliance</span>
                    </div>
                    <div className='flex flex-col'>
                        <img src={SvgCar} alt="Car" className='h-8 w-8 bg-white rounded self-center' />
                        <span className='sm:text-sm md:text-center pt-6 text-white text-lg'>Integrated Company</span>
                    </div>
                    <div className='flex flex-col'>
                        <img src={SvgStar} alt="star" className='h-8 w-8 bg-white rounded self-center' />
                        <span className='sm:text-sm sm:text-center md:text-center pt-6 text-white text-lg'>Exceptional User Experience</span>
                    </div>
                    <div className='flex flex-col'>
                        <img src={SvgThumb} alt="thumb" className='h-8 w-8 bg-white rounded self-center' />
                        <span className='sm:text-sm md:text-center pt-6 text-white text-lg'>Affordable Insurance</span>
                    </div>
                </section>
                {/* section 3 */}
                <section className='bg-white'>
                    <div className=' flex flex-col p-8'>
                        <h1 className='text-center text-gray text-xl font-bold'>What would you like to insure?</h1>
                        <div className='sm:px-1 md:px-4 flex flex-row justify-between px-16 pt-16'>
                            <div className='flex flex-col'>
                                <div className='sm:h-32 sm:w-32 rounded-full overflow-hidden outline outline-blue outline-offset-2 outline-2' data-aos="flip-left">
                                    <img src={Img3} alt="" className='sm:w-32 sm:h-32 w-52 h-52 object-cover' />
                                </div>
                                <span className='text-center pt-8 text-gray text-lg'>Automobile</span>
                            </div>
                            <div className='flex flex-col'>
                                <div className='sm:h-32 sm:w-32 rounded-full overflow-hidden outline outline-blue outline-offset-2 outline-2' data-aos="flip-right">
                                    <img src={Img10} alt="" className='sm:w-32 sm:h-32 w-52 h-52 object-cover' />
                                </div>
                                <span className='text-center pt-8 text-gray text-lg'>House</span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* section 4 */}
                <section className='sm:flex-col sm:gap-4 sm:p-2 md:flex-col md:gap-4 p-12 flex flex-row justify-evenly' data-aos="fade-up" data-aos-duration="1500">
                    <div className='sm:flex sm:flex-row sm:gap-4 flex flex-row justify-evenly gap-8'>
                    <div className=' sm:w-60 sm:px-8 bg-white rounded h-96  w-60  flex flex-col'>
                        <div className='sm:h-20 sm:w-20 rounded-full overflow-hidden h-40  w-40 self-center outline outline-blue outline-offset-2 outline-2 my-4'>
                            <img src={Review1} alt="" className='object-cover' />
                        </div>
                        <h3 className='text-center text-gray font-bold'>Mary Reeves</h3>
                        <span className='text-center text-black sm:text-sm font-black mb-4'>"The insurance is very affordable"</span>
                        <h2 className='text-center text-gray font-bold text-sm'>Customer satisfaction ratings</h2>
                        <div className='flex self-center m-4'>
                            <FaStar className='text-yellow-700'/>
                            <FaStar className='text-yellow-700'/>
                            <FaStar className='text-yellow-700'/>
                            <FaStar className='text-yellow-700'/>
                            <FaStar className='text-blue'/>
                        </div>
                    </div>
                    <div className='sm:px-8 bg-white rounded h-96  w-60 flex flex-col'>
                        <div className='sm:h-20 sm:w-20 rounded-full overflow-hidden h-40 w-40   self-center outline outline-blue outline-offset-2 outline-2 my-4'>
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
                    </div>
                    <div className='sm:flex sm:flex-row sm:gap-4 flex flex-row justify-evenly gap-8'>
                    <div className='bg-white rounded h-96 w-60 flex flex-col'>
                        <div className='sm:h-20 sm:w-20 rounded-full overflow-hidden h-40 w-40  self-center outline outline-blue outline-offset-2 outline-2 my-4'>
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
                        <div className='sm:h-20 sm:w-20 rounded-full overflow-hidden h-40 w-40  self-center outline outline-blue outline-offset-2 outline-2 my-4'>
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
                    </div>
                </section>
                {/* section 5 */}
                <section className='sm:flex-col sm:gap-12 md:flex-col md:gap-12 bg-white p-12 flex flex-row justify-evenly' data-aos="zoom-in" data-aos-duration="1500">
                    <div className='flex flex-col gap-8'>
                        <h2 className='text-lg font-bold text-gray text-center'>Customer Care</h2>
                        <span className='text-gray text-center'>Available from Monday- Friday: 7am-7pm</span>
                        <button className='flex flex-row bg-blue rounded p-2 justify-center' onClick={PhoneCall}>
                            <div className='bg-white rounded p-1 mr-4'><FaPhone className='text-blue'/></div>
                            <span className='text-white'>Click to Call</span>
                        </button>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <h2 className='text-lg font-bold text-gray text-center'>Chat Support</h2>
                        <span className='text-gray text-center'>Available from Monday- Friday: 7am-7pm</span>
                        <button className='flex flex-row bg-blue rounded p-2 justify-center' onClick={WhatsappChat}>
                            <div className='bg-white rounded p-1 mr-4'><FaWhatsapp className='text-green-700'/></div>
                            <span className='text-white'>Click to Chat</span>
                        </button>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <h2 className='text-lg font-bold text-gray text-center'>Email Us</h2>
                        <span className='text-gray text-center'>Send us an email <em className='text-red-700'>info@krestiinsuranceagency.com</em></span>
                        <button className='flex flex-row bg-blue rounded p-2 justify-center'>
                            <div className='bg-white rounded p-1 mr-4'><FaEnvelope className='text-red-700'/></div>
                            <span className='text-white'>Click to Call</span>
                        </button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home;